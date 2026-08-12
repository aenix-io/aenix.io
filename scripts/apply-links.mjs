#!/usr/bin/env node
// Apply the editor's changesets to the stored link registry.
//
//   node scripts/apply-links.mjs --check   validate only, write nothing
//   node scripts/apply-links.mjs           apply, then delete the changesets
//
// --check is what runs on a pull request: it decides whether the change is safe
// to merge without a human. Applying happens after the merge, so the stored
// state is always one file per link — the shape that lets a single link be
// edited or removed on its own.

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import {
  readStoredLinks, readInbox, applyChangesets, writeLink, removeLink, removeInbox,
} from './lib/link-store.mjs';
import { validateRecords } from './lib/link-validate.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK_ONLY = process.argv.includes('--check');

async function main() {
  const stored = await readStoredLinks(ROOT);
  const inboxes = await readInbox(ROOT);

  if (!inboxes.length) {
    console.log(`No changesets. ${stored.length} link(s) in the registry.`);
    // Still validate what is stored: a hand-edited file must not slip through.
    const { links, errors } = validateRecords(stored);
    return report(links, errors, links.length);
  }

  const changeCount = inboxes.reduce((n, i) => n + i.changes.length, 0);
  console.log(`${inboxes.length} changeset(s), ${changeCount} change(s):`);
  for (const i of inboxes) console.log(`  ${i.file}`);

  const applied = applyChangesets(stored, inboxes);

  // Validate the RESULT, not the changeset — that is what will be published, and
  // it is where a duplicate slug or a foreign host actually becomes a problem.
  const { links, errors } = validateRecords(applied.links);
  const allErrors = [...applied.errors, ...errors];
  const hard = allErrors.filter((e) => e.level !== 'warn');

  if (hard.length || CHECK_ONLY) return report(links, allErrors, links.length, applied);

  for (const link of links) {
    if (applied.touched.has(link.slug)) {
      await writeLink(ROOT, link);
      console.log(`  ~ data/links/${link.slug}.json`);
    }
  }
  for (const slug of applied.removed) {
    await removeLink(ROOT, slug);
    console.log(`  - data/links/${slug}.json`);
  }
  for (const inbox of inboxes) {
    await removeInbox(ROOT, inbox.name);
    console.log(`  - ${inbox.file}`);
  }

  return report(links, allErrors, links.length, applied);
}

function report(links, errors, total, applied) {
  const warns = errors.filter((e) => e.level === 'warn');
  const hard = errors.filter((e) => e.level !== 'warn');

  for (const e of hard) console.error(`  ✗ ${e.row || e.where}: ${e.error}`);
  for (const e of warns) console.warn(`  ! ${e.row || e.where}: ${e.error}`);

  const active = links.filter((l) => l.status === 'active').length;
  console.log(`\n${CHECK_ONLY ? '[check] ' : ''}${total} link(s) — `
    + `${active} active, ${total - active} disabled`
    + (applied ? `, ${applied.touched.size} changed, ${applied.removed.size} removed` : '')
    + `, ${hard.length} rejected.`);

  if (hard.length) {
    console.error('\nRejected — this change needs a human.');
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(`\napply-links failed: ${err.message}`);
  process.exit(1);
});
