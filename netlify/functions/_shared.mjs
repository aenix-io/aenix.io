// Shared helpers for the link tools functions.

// Anti-fraud allow-list: only URLs whose host is one of ours may be shortened.
export const ALLOWED_HOSTS = new Set(['aenix.io', 'k.aenix.io', 'opc.aenix.io']);

export const SCHEMA_VERSION = 2;

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
  let u;
  try { u = new URL(raw); } catch { return { ok: false, error: 'Not a valid URL.' }; }
  if (u.protocol !== 'https:' && u.protocol !== 'http:') return { ok: false, error: 'Only http(s) URLs are allowed.' };
  const host = u.hostname.toLowerCase();
  if (!ALLOWED_HOSTS.has(host)) {
    return { ok: false, error: `Only aenix.io, k.aenix.io and opc.aenix.io links can be shortened (got "${host}").` };
  }
  return { ok: true, url: u.toString(), host };
}

// 64-bit FNV-1a as hex — collision-resistant enough for dedup keys.
export function fnv1a(str) {
  let h = 0xcbf29ce484222325n;
  for (let i = 0; i < str.length; i++) { h ^= BigInt(str.charCodeAt(i)); h = (h * 0x100000001b3n) & 0xffffffffffffffffn; }
  return h.toString(16);
}

export const json = (status, body) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
});
