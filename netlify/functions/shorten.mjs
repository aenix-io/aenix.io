import { getStore } from '@netlify/blobs';

// Anti-fraud allow-list: only URLs whose host is one of ours may be shortened,
// so nobody can mask a phishing target behind an aenix.io/l/... link.
// NOTE: creation is currently OPEN (no auth) — protection is the host allow-list only.
// GitHub-org (aenix-org) auth will be added in a follow-up.
const ALLOWED_HOSTS = new Set(['aenix.io', 'k.aenix.io', 'opc.aenix.io']);

const SLUG_RE = /^[a-z0-9](?:[a-z0-9-]{0,62}[a-z0-9])?$/; // 1-64, lowercase, no leading/trailing dash
const RESERVED = new Set(['l', 'go', 'api', 'admin', 'static', 'assets']);
const ALPHABET = 'abcdefghijkmnpqrstuvwxyz23456789'; // no ambiguous chars

const json = (status, body) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
});

function randomSlug(n = 5) {
  let s = '';
  const bytes = crypto.getRandomValues(new Uint8Array(n));
  for (const b of bytes) s += ALPHABET[b % ALPHABET.length];
  return s;
}

function validateTarget(raw) {
  let u;
  try { u = new URL(raw); } catch { return { ok: false, error: 'Not a valid URL.' }; }
  if (u.protocol !== 'https:' && u.protocol !== 'http:') return { ok: false, error: 'Only http(s) URLs are allowed.' };
  const host = u.hostname.toLowerCase();
  if (!ALLOWED_HOSTS.has(host)) {
    return { ok: false, error: `Only aenix.io, k.aenix.io and opc.aenix.io links can be shortened (got "${host}").` };
  }
  return { ok: true, url: u.toString() };
}

export default async (req) => {
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed.' });

  let payload;
  try { payload = await req.json(); } catch { return json(400, { error: 'Bad JSON body.' }); }

  const { url, slug: wanted } = payload || {};

  const v = validateTarget(String(url || ''));
  if (!v.ok) return json(400, { error: v.error });

  const store = getStore('links');

  // Resolve slug: use requested one if free & valid, otherwise generate.
  let slug;
  if (wanted != null && String(wanted).trim() !== '') {
    slug = String(wanted).trim().toLowerCase();
    if (!SLUG_RE.test(slug)) return json(400, { error: 'Slug must be 1-64 chars: a-z, 0-9, hyphens (not at the ends).' });
    if (RESERVED.has(slug)) return json(409, { error: `"${slug}" is reserved.` });
    if (await store.get(slug)) return json(409, { error: `Slug "${slug}" is already taken.` });
  } else {
    for (let i = 0; i < 8; i++) {
      const cand = randomSlug(5);
      if (!RESERVED.has(cand) && !(await store.get(cand))) { slug = cand; break; }
    }
    if (!slug) return json(500, { error: 'Could not generate a free slug, try again.' });
  }

  const record = { url: v.url, created: new Date().toISOString() };
  await store.set(slug, JSON.stringify(record), { metadata: { url: v.url } });

  const base = process.env.URL || 'https://aenix.io';
  return json(200, { slug, url: v.url, short: `${base.replace(/\/$/, '')}/l/${slug}` });
};
