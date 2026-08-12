// Smoke-test LinkState as it is actually shipped: pull the module out of the
// built page and drive it with a localStorage stub.
import { readFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';

// Needs a build first: it tests the module as shipped, not as authored.
let html;
try { html = readFileSync('public/go/links/index.html', 'utf8'); }
catch { console.log('skipped — run `hugo` first, this tests the built page'); process.exit(0); }
const m = html.match(/window\.LinkState\s*=\s*\(function\s*\(\)\s*\{[\s\S]*?\}\)\(\);/);
if (!m) { console.error('LinkState not found in the built page'); process.exit(1); }

const store = {};
const ctx = createContext({
  window: {},
  localStorage: {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
  },
  document: { dispatchEvent() {} },
  CustomEvent: class { constructor(t) { this.type = t; } },
  Date,
  console,
});
runInContext(m[0], ctx);
const S = ctx.window.LinkState;

let pass = 0, fail = 0;
const ok = (n, c) => { if (c) pass++; else { fail++; console.error('  ✗ ' + n); } };

const baseSlugs = S.baseline().map((l) => l.slug);
ok('baseline is populated from the build', baseSlugs.length > 0);
ok('no pending changes to begin with', S.count() === 0);
ok('working set equals the baseline', S.working().length === baseSlugs.length);

// add a new link
S.upsert({ slug: 'newone', target_url: 'https://aenix.io/x/', status: 'active' });
ok('adding counts as one change', S.count() === 1);
ok('added link joins the working set', S.working().some((r) => r.slug === 'newone' && r._state === 'added'));
ok('slug now reads as taken', S.taken('newone'));

// edit an existing one
const first = baseSlugs[0];
S.upsert({ slug: first, target_url: 'https://aenix.io/changed/', status: 'active' });
ok('editing counts as a change', S.count() === 2);
ok('edited link is marked edited', S.working().some((r) => r.slug === first && r._state === 'edited'));

// setting it back to the baseline value clears the change
const original = S.baseline().find((l) => l.slug === first);
S.upsert({ slug: first, target_url: original.target_url, status: original.status, note: original.note });
ok('reverting by hand drops the change', S.count() === 1);

// delete a published link
S.remove(first);
ok('deleting a published link is a change', S.count() === 2);
ok('deleted link is marked deleted', S.working().some((r) => r.slug === first && r._state === 'deleted'));

// deleting an unpublished addition just forgets it
S.remove('newone');
ok('deleting an unsaved addition forgets it', !S.working().some((r) => r.slug === 'newone'));
ok('only the deletion remains', S.count() === 1);

// changeset + URL
const cs = S.changeset();
ok('changeset carries the deletion', cs.changes.length === 1 && cs.changes[0].op === 'delete');
const url = S.commitUrl('2026-08-12-test');
ok('commit URL targets the inbox', url.includes(encodeURIComponent('data/links/_inbox/2026-08-12-test.json')));
ok('commit URL carries the payload', decodeURIComponent(url.split('&value=')[1]).includes('"op": "delete"'));
ok('commit URL points at the repo', url.startsWith('https://github.com/aenix-io/aenix.io/new/main?'));

S.revert(first);
ok('undo clears the last change', S.count() === 0);

S.upsert({ slug: 'a', target_url: 'https://aenix.io/a/' });
S.upsert({ slug: 'b', target_url: 'https://aenix.io/b/' });
ok('discard clears everything', (S.clear(), S.count() === 0));

console.log(`\n${fail === 0 ? '\x1b[32mall green\x1b[0m' : '\x1b[31mFAILURES\x1b[0m'} — ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
