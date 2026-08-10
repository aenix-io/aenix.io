import { getStore } from '@netlify/blobs';
import { json } from './_shared.mjs';

// Registry aggregation: shortened links (with click counts computed from the
// append-only event log) + logged UTM-only links. Read-only.

async function dumpKeys(store) {
  const keys = [];
  let cursor;
  do {
    const page = await store.list({ cursor });
    for (const b of (page.blobs || [])) keys.push(b.key);
    cursor = page.cursor;
  } while (cursor);
  return keys;
}

export default async () => {
  try {
    const base = (process.env.URL || 'https://aenix.io').replace(/\/$/, '');

    // click counts per slug from the append-only event log (one blob per click)
    const events = getStore('clickevents');
    const clicksBySlug = {};
    for (const key of await dumpKeys(events)) {
      const slug = key.split('/')[0];
      clicksBySlug[slug] = (clicksBySlug[slug] || 0) + 1;
    }

    // short links (skip internal dedup pointers)
    const shortStore = getStore('links');
    const shorts = [];
    for (const key of await dumpKeys(shortStore)) {
      if (key.startsWith('dedup_')) continue;
      const raw = await shortStore.get(key);
      if (!raw) continue;
      try {
        const rec = JSON.parse(raw);
        shorts.push({ ...rec, type: 'short', slug: key, short: `${base}/l/${key}`, clicks: clicksBySlug[key] || 0 });
      } catch { /* skip */ }
    }

    // utm-only links
    const utmStore = getStore('utmlog');
    const utms = [];
    for (const key of await dumpKeys(utmStore)) {
      const raw = await utmStore.get(key);
      if (!raw) continue;
      try { utms.push({ ...JSON.parse(raw), type: 'utm', key }); } catch { /* skip */ }
    }

    const links = [...shorts, ...utms].sort(
      (a, b) => String(b.created || '').localeCompare(String(a.created || '')));

    return json(200, {
      count: links.filter((l) => !l.disabled).length,
      shortCount: shorts.filter((l) => !l.disabled).length,
      utmCount: utms.filter((l) => !l.disabled).length,
      totalClicks: shorts.reduce((n, r) => n + (r.clicks || 0), 0),
      links,
    });
  } catch (e) {
    return json(500, { error: 'Could not read the registry.', detail: String(e).slice(0, 200) });
  }
};
