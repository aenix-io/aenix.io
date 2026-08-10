import { getStore } from '@netlify/blobs';
import { ALLOWED_HOSTS, SCHEMA_VERSION, sanitizeUrl, parseUtm, validateTarget, fnv1a, json } from './_shared.mjs';

const SLUG_RE = /^[a-z0-9](?:[a-z0-9-]{0,62}[a-z0-9])?$/;
const RESERVED = new Set(['l', 'go', 'api', 'admin', 'static', 'assets', 'links']);
const ALPHABET = 'abcdefghijkmnpqrstuvwxyz23456789';

function randomSlug(n = 5) {
  let s = '';
  const bytes = crypto.getRandomValues(new Uint8Array(n));
  for (const b of bytes) s += ALPHABET[b % ALPHABET.length];
  return s;
}

export default async (req) => {
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed.' });

  let payload;
  try { payload = await req.json(); } catch { return json(400, { error: 'Bad JSON body.' }); }

  const { url, slug: wanted } = payload || {};

  const v = validateTarget(String(url || ''));
  if (!v.ok) return json(400, { error: v.error });

  // Strip secrets/PII from the target before persisting.
  const { url: cleanUrl, stripped } = sanitizeUrl(v.url);

  const store = getStore('links');
  const base = (process.env.URL || 'https://aenix.io').replace(/\/$/, '');

  // Idempotency: an auto-slug request for a target we already have returns the
  // existing link instead of burning a new slug (safe double-submits).
  if (wanted == null || String(wanted).trim() === '') {
    const dedupKey = 'dedup_' + fnv1a(cleanUrl);
    const existingSlug = await store.get(dedupKey);
    if (existingSlug) {
      return json(200, { slug: existingSlug, url: cleanUrl, short: `${base}/l/${existingSlug}`, deduped: true, stripped });
    }
  }

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

  const record = {
    v: SCHEMA_VERSION, type: 'short', url: cleanUrl, utm: parseUtm(cleanUrl),
    created: new Date().toISOString(), disabled: false,
  };
  await store.set(slug, JSON.stringify(record), { metadata: { url: cleanUrl } });
  // dedup pointer for idempotency (only for auto-slug targets)
  if (wanted == null || String(wanted).trim() === '') {
    try { await store.set('dedup_' + fnv1a(cleanUrl), slug); } catch {}
  }

  return json(200, { slug, url: cleanUrl, short: `${base}/l/${slug}`, stripped });
};
