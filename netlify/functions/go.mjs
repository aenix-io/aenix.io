import { getStore } from '@netlify/blobs';

// Server-side redirect (302) with an APPEND-ONLY click log (no read-modify-write
// race) and bot/prefetch filtering so the count reflects humans, not crawlers.
// Attribution happens on the DESTINATION property via the target's own UTMs, which
// we forward byte-for-byte. Anti-fraud host allow-list is RE-checked here so a
// tampered record can never turn this into an open redirect.

const ALLOWED_HOSTS = new Set(['aenix.io', 'k.aenix.io', 'opc.aenix.io']);

// Unfurlers, email scanners, crawlers, CLI tools — do not count these as clicks.
const BOT_RE = /bot|crawler|spider|slurp|slack|telegram|twitterbot|facebookexternalhit|discord|linkedinbot|whatsapp|bingpreview|google|preview|fetch|scan|proofpoint|mimecast|barracuda|curl|wget|python-requests|headless|monitor|pingdom|uptime|validator/i;

const notFound = () => new Response(
  '<!doctype html><meta charset="utf-8"><title>Link not found</title><p>This short link does not exist. <a href="https://aenix.io/">aenix.io</a></p>',
  { status: 404, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });

const gone = () => new Response(
  '<!doctype html><meta charset="utf-8"><title>Link disabled</title><p>This short link has been disabled or expired. <a href="https://aenix.io/">aenix.io</a></p>',
  { status: 410, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });

function fnv1a(str) { // 64-bit FNV-1a as hex — for ip/ua hashing (no PII stored raw)
  let h = 0xcbf29ce484222325n;
  for (let i = 0; i < str.length; i++) { h ^= BigInt(str.charCodeAt(i)); h = (h * 0x100000001b3n) & 0xffffffffffffffffn; }
  return h.toString(16);
}

function isCountable(req) {
  if (req.method !== 'GET') return false;                     // scanners often use HEAD
  const h = req.headers;
  const purpose = (h.get('sec-purpose') || h.get('purpose') || h.get('x-purpose') || h.get('x-moz') || '').toLowerCase();
  if (/prefetch|preview|prerender/.test(purpose)) return false;
  const ua = h.get('user-agent') || '';
  if (!ua || BOT_RE.test(ua)) return false;
  return true;
}

export default async (req) => {
  const url = new URL(req.url);
  const slug = (url.searchParams.get('s') || url.pathname.split('/').filter(Boolean).pop() || '').toLowerCase();
  if (!slug) return notFound();

  const store = getStore('links');
  const raw = await store.get(slug);
  if (!raw) return notFound();

  let rec;
  try { rec = JSON.parse(raw); } catch { rec = { url: raw }; }
  let target = rec.url;
  if (!target) return notFound();
  if (rec.disabled) return gone();
  if (rec.expires_at && Date.parse(rec.expires_at) < Date.now()) return gone();

  // Re-validate host allow-list at redirect time (defense-in-depth vs tampering).
  try {
    const host = new URL(target).hostname.toLowerCase();
    if (!ALLOWED_HOSTS.has(host)) return notFound();
  } catch { return notFound(); }

  // Append-only click event (only for real, human GETs). Never blocks the redirect.
  let clickId = '';
  if (isCountable(req)) {
    try {
      const ts = new Date().toISOString();
      clickId = fnv1a(slug + ts + Math.random());
      const ip = req.headers.get('x-nf-client-connection-ip') || req.headers.get('x-forwarded-for') || '';
      const ua = req.headers.get('user-agent') || '';
      const events = getStore('clickevents');
      await events.set(`${slug}/${ts}-${clickId.slice(0, 8)}`, JSON.stringify({
        slug, ts, clk: clickId, iphash: ip ? fnv1a(ip) : '', uahash: ua ? fnv1a(ua) : '',
      }));
    } catch { /* counting must never break the redirect */ }
  }

  // Forward the FULL target (query+fragment) untouched; append clk as a query param
  // (before any #fragment) so a GA4 session can be joined back to the click in BigQuery.
  let location = target;
  if (clickId) {
    const hashIdx = target.indexOf('#');
    const base = hashIdx === -1 ? target : target.slice(0, hashIdx);
    const frag = hashIdx === -1 ? '' : target.slice(hashIdx);
    location = base + (base.indexOf('?') === -1 ? '?' : '&') + 'clk=' + clickId + frag;
  }

  return new Response(null, {
    status: 302,
    headers: { location, 'cache-control': 'no-store', 'referrer-policy': 'no-referrer-when-downgrade' },
  });
};
