import { getStore } from '@netlify/blobs';

const GA_ID = 'GT-NMCJ23L'; // same Google tag the site uses; lets GA4 count link clicks

const htmlResponse = (status, body) => new Response(body, {
  status,
  headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' },
});

const notFound = () => htmlResponse(404,
  '<!doctype html><meta charset="utf-8"><title>Link not found</title><p>This short link does not exist. <a href="https://aenix.io/">aenix.io</a></p>');

const escapeJs = (s) => String(s).replace(/[\\'"<>]/g, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));

export default async (req) => {
  const url = new URL(req.url);
  // slug comes either as ?s=<slug> (rewrite) or as the last path segment
  const slug = (url.searchParams.get('s') || url.pathname.split('/').filter(Boolean).pop() || '').toLowerCase();
  if (!slug) return notFound();

  const store = getStore('links');
  const raw = await store.get(slug);
  if (!raw) return notFound();

  let target;
  try { target = JSON.parse(raw).url; } catch { target = raw; }
  if (!target) return notFound();

  // Thin HTML shell: fire a GA4 event with the Google tag already used site-wide,
  // then redirect immediately. Falls back to <meta refresh> if JS is off.
  const t = escapeJs(target);
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="robots" content="noindex,nofollow">
<title>Redirecting…</title>
<link rel="canonical" href="${target.replace(/"/g, '&quot;')}">
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
<script>
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${GA_ID}');
gtag('event','short_link_click',{link_slug:'${escapeJs(slug)}',link_target:'${t}',transport_type:'beacon'});
location.replace('${t}');
</script>
<meta http-equiv="refresh" content="1;url=${target.replace(/"/g, '&quot;')}">
</head><body><p>Redirecting to <a href="${target.replace(/"/g, '&quot;')}">${target.replace(/</g, '&lt;')}</a>…</p></body></html>`;

  return htmlResponse(200, html);
};
