import crypto from 'node:crypto';
import { GH_CLIENT_ID, siteBase } from './_shared.mjs';

// Kick off GitHub login: set a state cookie, redirect to GitHub's authorize page.
export default async () => {
  const redirect = siteBase() + '/.netlify/functions/auth-callback';
  const state = crypto.randomBytes(16).toString('hex');
  const authorize = 'https://github.com/login/oauth/authorize'
    + '?client_id=' + encodeURIComponent(GH_CLIENT_ID)
    + '&redirect_uri=' + encodeURIComponent(redirect)
    + '&scope=' + encodeURIComponent('read:org')
    + '&state=' + state
    + '&allow_signup=false';
  return new Response(null, {
    status: 302,
    headers: {
      location: authorize,
      'set-cookie': 'lt_state=' + state + '; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600',
      'cache-control': 'no-store',
    },
  });
};
