import { GH_CLIENT_ID, ORG, SESSION_COOKIE, USER_COOKIE, siteBase, signSession, parseCookies } from './_shared.mjs';

const GH = { 'user-agent': 'aenix-link-tools', accept: 'application/vnd.github+json' };
const redir = (loc, extra) => new Response(null, { status: 302, headers: { location: loc, 'cache-control': 'no-store', ...(extra || {}) } });

export default async (req) => {
  const base = siteBase();
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const cookies = parseCookies(req.headers.get('cookie'));

  if (!code || !state || state !== cookies.lt_state) return redir(base + '/go/?auth=state');

  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
  if (!clientSecret) return redir(base + '/go/?auth=notconfigured');

  // 1) exchange code → user access token
  let token;
  try {
    const r = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { accept: 'application/json', 'content-type': 'application/json' },
      body: JSON.stringify({ client_id: GH_CLIENT_ID, client_secret: clientSecret, code }),
    });
    token = (await r.json()).access_token;
  } catch { return redir(base + '/go/?auth=exchange'); }
  if (!token) return redir(base + '/go/?auth=denied');

  // 2) identify the user
  let login;
  try {
    const r = await fetch('https://api.github.com/user', { headers: { ...GH, authorization: 'Bearer ' + token } });
    login = (await r.json()).login;
  } catch { return redir(base + '/go/?auth=user'); }
  if (!login) return redir(base + '/go/?auth=user');

  // 3) verify org membership (the user's own membership — accessible to the user token)
  let member = false;
  try {
    const r = await fetch('https://api.github.com/user/memberships/orgs/' + ORG, { headers: { ...GH, authorization: 'Bearer ' + token } });
    if (r.ok) member = (await r.json()).state === 'active';
  } catch { /* fall through */ }
  if (!member) return redir(base + '/go/?auth=notmember');

  // 4) issue a signed 8h session (HttpOnly) + a readable username cookie for the UI
  const session = signSession({ login, exp: Date.now() + 8 * 3600 * 1000 }, clientSecret);
  const opts = 'Secure; SameSite=Lax; Path=/; Max-Age=28800';
  const headers = new Headers();
  headers.append('set-cookie', SESSION_COOKIE + '=' + session + '; HttpOnly; ' + opts);
  headers.append('set-cookie', USER_COOKIE + '=' + encodeURIComponent(login) + '; ' + opts);
  headers.append('set-cookie', 'lt_state=; Path=/; Max-Age=0');
  headers.set('location', base + '/go/?auth=ok');
  headers.set('cache-control', 'no-store');
  return new Response(null, { status: 302, headers });
};
