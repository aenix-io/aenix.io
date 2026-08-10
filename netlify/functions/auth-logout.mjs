import { SESSION_COOKIE, USER_COOKIE, siteBase } from './_shared.mjs';

export default async () => {
  const headers = new Headers();
  headers.append('set-cookie', SESSION_COOKIE + '=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0');
  headers.append('set-cookie', USER_COOKIE + '=; Secure; SameSite=Lax; Path=/; Max-Age=0');
  headers.set('location', siteBase() + '/go/');
  headers.set('cache-control', 'no-store');
  return new Response(null, { status: 302, headers });
};
