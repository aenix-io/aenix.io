import { requireSession, json } from './_shared.mjs';

// Tells the page who is logged in (and whether auth is even enforced yet).
export default async (req) => {
  const s = requireSession(req);
  return json(200, { authed: !!s, open: !!(s && s.open), login: s && !s.open ? s.login : null });
};
