import { json } from './_shared.mjs';

// Reports ONLY whether expected env vars are present (booleans, never values) so
// we can confirm Netlify env reached the functions. Safe to expose: leaks nothing.
export default async () => json(200, {
  GITHUB_OAUTH_CLIENT_ID: !!process.env.GITHUB_OAUTH_CLIENT_ID,
  GITHUB_OAUTH_CLIENT_SECRET: !!process.env.GITHUB_OAUTH_CLIENT_SECRET,
  SHORTENER_SECRET: !!process.env.SHORTENER_SECRET,
  PIPEDRIVE_API_TOKEN: !!process.env.PIPEDRIVE_API_TOKEN,
  SITE_URL: process.env.URL || null,
});
