#!/usr/bin/env node
// Validate the effective link registry, read as JSON on stdin.
//
//   python3 scripts/compact-links.py --json | node scripts/check-links.mjs
//
// The split keeps one implementation of the rules: Python resolves the YAML
// patches into a final list, this decides whether that list is allowed. It is
// what stands between a pull request and an automatic merge, so it validates
// the MERGED state — a duplicate slug or a foreign host only becomes a problem
// once the patch is applied.

import { validateRecords } from './lib/link-validate.mjs';

const input = await new Promise((resolve, reject) => {
  let buf = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (c) => { buf += c; });
  process.stdin.on('end', () => resolve(buf));
  process.stdin.on('error', reject);
});

let records;
try { records = JSON.parse(input || '[]'); } catch (e) {
  console.error(`Could not read the registry: ${e.message}`);
  process.exit(1);
}

const withWhere = records.map((r) => ({ ...r, where: `link "${r.slug}"` }));
const { links, errors } = validateRecords(withWhere);

const warns = errors.filter((e) => e.level === 'warn');
const hard = errors.filter((e) => e.level !== 'warn');

for (const e of hard) console.error(`  ✗ ${e.row}: ${e.error}`);
for (const e of warns) console.warn(`  ! ${e.row}: ${e.error}`);

const active = links.filter((l) => l.status === 'active').length;
console.log(`${links.length} link(s) — ${active} active, ${links.length - active} disabled, `
  + `${hard.length} rejected.`);

if (hard.length) {
  console.error('\nRejected — this needs a human.');
  process.exit(1);
}
