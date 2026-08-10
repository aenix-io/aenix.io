import { getStore } from '@netlify/blobs';
import { SCHEMA_VERSION, sanitizeUrl, parseUtm, fnv1a, json, requireSession } from './_shared.mjs';

// Logs a UTM-tagged URL into the registry even when it is NOT shortened
// (e.g. "Copy URL"). Dedupes by a 64-bit FNV-1a hash of the exact target
// (wide enough to avoid the silent-overwrite risk of a 32-bit hash). Only
// records URLs that actually carry UTM params. Secrets/PII are stripped.

export default async (req) => {
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed.' });

  const sess = requireSession(req);
  if (!sess) return json(401, { error: 'Login required.' });

  let payload;
  try { payload = await req.json(); } catch { return json(400, { error: 'Bad JSON body.' }); }

  const target0 = String(payload?.url || '').trim();
  let u;
  try { u = new URL(target0); } catch { return json(400, { error: 'Bad URL.' }); }

  const { url: target } = sanitizeUrl(u.toString());
  const utm = parseUtm(target);
  if (!utm.source && !utm.medium && !utm.campaign) return json(200, { skipped: true });

  const store = getStore('utmlog');
  const key = 'u' + fnv1a(target);
  const existing = await store.get(key);
  if (existing) return json(200, { logged: true, deduped: true });

  const record = { v: SCHEMA_VERSION, type: 'utm', url: target, utm, created: new Date().toISOString(), created_by: sess.login || null, disabled: false };
  await store.set(key, JSON.stringify(record));
  return json(200, { logged: true });
};
