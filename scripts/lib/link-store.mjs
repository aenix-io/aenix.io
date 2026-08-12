// Reading and writing the link registry as it lives in the repository.
//
// Two shapes exist on purpose:
//
//   data/links/<slug>.json          one stored link — the published state
//   data/links/_inbox/<name>.json   one changeset — what the editor submitted
//
// The editor cannot write many files from one URL, so a batch of edits arrives
// as a single changeset. The pipeline applies it to the per-link files and
// deletes it, which keeps the stored state at exactly one file per link — the
// shape that makes a single link editable and removable on its own.

import { readdir, readFile, writeFile, unlink, mkdir } from 'node:fs/promises';
import path from 'node:path';

export const LINKS_DIR = 'data/links';
export const INBOX_DIR = 'data/links/_inbox';

const isJson = (name) => name.endsWith('.json');

/** Stored links, newest-first is not assumed — order comes from the file names. */
export async function readStoredLinks(root) {
  const dir = path.join(root, LINKS_DIR);
  let names = [];
  try { names = (await readdir(dir)).filter(isJson); } catch { return []; }

  const out = [];
  for (const name of names.sort()) {
    const file = path.join(dir, name);
    let record;
    try { record = JSON.parse(await readFile(file, 'utf8')); } catch (e) {
      throw new Error(`${LINKS_DIR}/${name}: not valid JSON (${e.message})`);
    }
    // The file name is authoritative: it is what the URL is built from, so a
    // record whose slug disagrees with its file name would publish under one
    // name and be edited under another.
    const fromName = name.replace(/\.json$/, '');
    if (record.slug && record.slug !== fromName) {
      throw new Error(`${LINKS_DIR}/${name}: slug "${record.slug}" does not match the file name.`);
    }
    out.push({ ...record, slug: fromName, where: `${LINKS_DIR}/${name}` });
  }
  return out;
}

/** Changesets waiting to be applied. */
export async function readInbox(root) {
  const dir = path.join(root, INBOX_DIR);
  let names = [];
  try { names = (await readdir(dir)).filter(isJson); } catch { return []; }

  const out = [];
  for (const name of names.sort()) {
    const rel = `${INBOX_DIR}/${name}`;
    let parsed;
    try { parsed = JSON.parse(await readFile(path.join(dir, name), 'utf8')); } catch (e) {
      throw new Error(`${rel}: not valid JSON (${e.message})`);
    }
    const changes = Array.isArray(parsed) ? parsed : parsed.changes;
    if (!Array.isArray(changes)) throw new Error(`${rel}: expected a "changes" array.`);
    out.push({ file: rel, name, changes });
  }
  return out;
}

/**
 * Apply changesets to the stored links, in file order then entry order, so the
 * result is deterministic no matter how the merge happened to interleave.
 * Returns the resulting link list plus what to write and delete on disk.
 */
export function applyChangesets(stored, inboxes) {
  const bySlug = new Map(stored.map((l) => [l.slug, l]));
  const touched = new Set();
  const removed = new Set();
  const errors = [];

  for (const inbox of inboxes) {
    inbox.changes.forEach((change, i) => {
      const where = `${inbox.file}[${i}]`;
      const op = String(change.op || 'upsert').toLowerCase();
      const slug = String(change.slug || '').trim().toLowerCase();

      if (!slug) { errors.push({ where, error: 'Change has no slug.' }); return; }

      if (op === 'delete') {
        if (!bySlug.has(slug)) {
          // Deleting something already gone is not an error worth failing on —
          // two changesets can legitimately race to remove the same link.
          errors.push({ where, level: 'warn', error: `Nothing to delete: "${slug}" is not in the registry.` });
          return;
        }
        bySlug.delete(slug);
        removed.add(slug);
        touched.delete(slug);
        return;
      }

      if (op !== 'upsert') { errors.push({ where, error: `Unknown op "${op}".` }); return; }

      const previous = bySlug.get(slug) || {};
      bySlug.set(slug, {
        slug,
        target_url: change.target_url ?? previous.target_url ?? '',
        status: change.status ?? previous.status ?? 'active',
        note: change.note ?? previous.note ?? '',
        created_at: previous.created_at || change.created_at || '',
        created_by: previous.created_by || change.created_by || '',
        where,
      });
      touched.add(slug);
      removed.delete(slug);
    });
  }

  return { links: [...bySlug.values()], touched, removed, errors };
}

const fileFor = (root, slug) => path.join(root, LINKS_DIR, `${slug}.json`);

/** Write one stored link. Field order is fixed so diffs stay readable. */
export async function writeLink(root, link) {
  const body = {
    slug: link.slug,
    target_url: link.target_url,
    status: link.status || 'active',
  };
  if (link.created_at) body.created_at = link.created_at;
  if (link.created_by) body.created_by = link.created_by;
  if (link.note) body.note = link.note;

  await mkdir(path.join(root, LINKS_DIR), { recursive: true });
  await writeFile(fileFor(root, link.slug), JSON.stringify(body, null, 2) + '\n', 'utf8');
}

export async function removeLink(root, slug) {
  try { await unlink(fileFor(root, slug)); } catch { /* already gone */ }
}

export async function removeInbox(root, name) {
  try { await unlink(path.join(root, INBOX_DIR, name)); } catch { /* already gone */ }
}
