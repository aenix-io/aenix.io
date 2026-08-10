import { getStore } from '@netlify/blobs';
import { json, requireSession } from './_shared.mjs';

// Soft-delete (archive) / restore a registry entry. We never hard-delete: a slug
// out in the wild must keep resolving to a "disabled" state (410), and slug reuse
// would be dangerous. Sets record.disabled.
// NOTE: open (no auth) for now, matching the shortener — GitHub-org auth to follow.

export default async (req) => {
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed.' });

  const sess = requireSession(req);
  if (!sess) return json(401, { error: 'Login required.' });

  let payload;
  try { payload = await req.json(); } catch { return json(400, { error: 'Bad JSON body.' }); }

  const kind = payload?.kind === 'utm' ? 'utm' : 'short';
  const key = String(payload?.key || payload?.slug || '').trim();
  const disabled = payload?.restore ? false : true;
  if (!key) return json(400, { error: 'Missing key/slug.' });

  const store = getStore(kind === 'utm' ? 'utmlog' : 'links');
  const raw = await store.get(key);
  if (!raw) return json(404, { error: 'Not found.' });

  let rec;
  try { rec = JSON.parse(raw); } catch { return json(500, { error: 'Corrupt record.' }); }
  rec.disabled = disabled;
  rec.updated_at = new Date().toISOString();
  await store.set(key, JSON.stringify(rec), { metadata: { url: rec.url } });

  return json(200, { ok: true, disabled });
};
