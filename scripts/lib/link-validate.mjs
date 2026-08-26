// Validation rules for short links.
//
// The editor at /go/ checks the same rules in the browser so a mistake is caught
// while it is being typed, but that check is a convenience, not a guarantee: a
// changeset is a file in a pull request and can be written by hand. This module
// is the one that decides, and it runs in CI on the result of applying a
// changeset — which is where a duplicate slug or a foreign host actually
// becomes a problem.

// Anti-fraud allow-list: only URLs whose host is one of ours may be shortened.
// Exception: calendar.google.com — its /render endpoint only opens an
// event-creation form and never redirects, so it cannot hide a foreign link
// behind our domain (unlike www.google.com, which has a /url?q= open redirect).
export const ALLOWED_HOSTS = new Set(['aenix.io', 'k.aenix.io', 'opc.aenix.io', 'calendar.google.com']);

// Paths that already exist on the site (or are about to) — never hand them out.
export const RESERVED = new Set(['l', 'go', 'api', 'admin', 'static', 'assets', 'links']);

// 1-64 chars, a-z0-9 and hyphens, never starting or ending with a hyphen.
export const SLUG_RE = /^[a-z0-9](?:[a-z0-9-]{0,62}[a-z0-9])?$/;

// Slug alphabet without look-alike characters (no l/1, no o/0).
export const ALPHABET = 'abcdefghijkmnpqrstuvwxyz23456789';

// Query params that must never be persisted (secrets/PII). Stripped on ingest.
const SENSITIVE = new Set([
  'email', 'e-mail', 'token', 'access_token', 'refresh_token', 'id_token',
  'password', 'passwd', 'pwd', 'secret', 'sig', 'signature', 'auth',
  'authorization', 'session', 'sessionid', 'sid', 'otp', 'code', 'apikey',
  'api_key', 'key', 'private_key', 'client_secret',
]);

// Remove sensitive params from a URL string; returns {url, stripped:[names]}.
export function sanitizeUrl(raw) {
  let u;
  try { u = new URL(raw); } catch { return { url: raw, stripped: [] }; }
  const stripped = [];
  for (const name of [...u.searchParams.keys()]) {
    if (SENSITIVE.has(name.toLowerCase())) { u.searchParams.delete(name); stripped.push(name); }
  }
  return { url: u.toString(), stripped };
}

export function parseUtm(raw) {
  try {
    const p = new URL(raw).searchParams;
    return {
      source: p.get('utm_source') || '', medium: p.get('utm_medium') || '',
      campaign: p.get('utm_campaign') || '', content: p.get('utm_content') || '',
      term: p.get('utm_term') || '', id: p.get('utm_id') || '',
    };
  } catch { return {}; }
}

export function validateTarget(raw) {
  const s = String(raw == null ? '' : raw).trim();
  if (!s) return { ok: false, error: 'Target URL is empty.' };
  let u;
  try { u = new URL(s); } catch { return { ok: false, error: 'Not a valid URL.' }; }
  if (u.protocol !== 'https:' && u.protocol !== 'http:') return { ok: false, error: 'Only http(s) URLs are allowed.' };
  const host = u.hostname.toLowerCase();
  if (!ALLOWED_HOSTS.has(host)) {
    return { ok: false, error: `Only aenix.io, k.aenix.io and opc.aenix.io links can be shortened (got "${host}").` };
  }
  return { ok: true, url: u.toString(), host };
}

export function validateSlug(raw) {
  const slug = String(raw == null ? '' : raw).trim().toLowerCase();
  if (!slug) return { ok: false, error: 'Slug is empty.' };
  if (!SLUG_RE.test(slug)) return { ok: false, error: 'Slug must be 1-64 chars: a-z, 0-9, hyphens (not at the ends).' };
  if (RESERVED.has(slug)) return { ok: false, error: `"${slug}" is reserved.` };
  return { ok: true, slug };
}

// Status gate: only "active" rows produce a redirect page. Anything else keeps
// the row (and its slug) as history but stops resolving.
export function normalizeStatus(raw) {
  const s = String(raw == null ? '' : raw).trim().toLowerCase();
  return s === '' ? 'active' : s;
}
export const isActive = (status) => normalizeStatus(status) === 'active';

// 64-bit FNV-1a as hex — collision-resistant enough for dedup keys.
export function fnv1a(str) {
  let h = 0xcbf29ce484222325n;
  for (let i = 0; i < str.length; i++) { h ^= BigInt(str.charCodeAt(i)); h = (h * 0x100000001b3n) & 0xffffffffffffffffn; }
  return h.toString(16);
}

export function randomSlug(n = 5, rand) {
  const bytes = rand ? rand(n) : crypto.getRandomValues(new Uint8Array(n));
  let s = '';
  for (const b of bytes) s += ALPHABET[b % ALPHABET.length];
  return s;
}

/**
 * Validate every link in one pass, so the cross-record rules — duplicate slugs
 * above all — can be applied. Records carry a `where` label (a file path, or a
 * file path and index) that is echoed back in errors so a human can find the
 * offending entry.
 *
 * Order is authoritative: on a slug collision the FIRST record wins, so a later
 * addition can never hijack a link that is already published.
 */
export function validateRecords(records) {
  const links = [];
  const errors = [];
  const seenSlugs = new Map();   // slug -> where it was first seen
  const seenTargets = new Map(); // clean target -> slug

  records.forEach((row, i) => {
    const rowNo = row.where ?? row.rowNumber ?? `#${i + 1}`;
    const reject = (error) => errors.push({ row: rowNo, slug: row.slug || '', error });

    // Entirely blank entries are padding — silently ignored.
    const blank = !String(row.slug || '').trim() && !String(row.target_url || '').trim();
    if (blank) return;

    const s = validateSlug(row.slug);
    if (!s.ok) { reject(s.error); return; }

    const t = validateTarget(row.target_url);
    if (!t.ok) { reject(t.error); return; }

    if (seenSlugs.has(s.slug)) {
      reject(`Duplicate slug — already used at ${seenSlugs.get(s.slug)}.`);
      return;
    }
    seenSlugs.set(s.slug, rowNo);

    const { url, stripped } = sanitizeUrl(t.url);

    // Two active slugs pointing at the same target is legal but almost always a
    // double-submit; report it without dropping the row.
    if (seenTargets.has(url)) {
      errors.push({ row: rowNo, slug: s.slug, level: 'warn', error: `Same target as "${seenTargets.get(url)}".` });
    } else {
      seenTargets.set(url, s.slug);
    }

    links.push({
      slug: s.slug,
      target_url: url,
      status: normalizeStatus(row.status),
      created_at: String(row.created_at || '').trim(),
      created_by: String(row.created_by || '').trim(),
      note: String(row.note || '').trim(),
      utm: parseUtm(url),
      stripped,
      row: rowNo,
    });
  });

  return { links, errors };
}
