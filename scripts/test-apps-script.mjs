// Cross-check the Apps Script validation against the Node validation.
//
// Code.gs is pasted into the Apps Script editor by hand and cannot import the
// shared module, so the rules exist twice. This test loads Code.gs into a
// sandbox and asserts both implementations reach the same verdict, which is the
// only thing keeping the copies honest.
//
// Run: node scripts/test-apps-script.mjs
import { readFile } from 'node:fs/promises';
import { createContext, runInContext } from 'node:vm';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import * as node from './lib/link-validate.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = await readFile(path.join(ROOT, 'scripts/apps-script/Code.gs'), 'utf8');

// Code.gs only declares vars and functions at the top level, so evaluating it
// runs no Apps Script API calls. console is the one global it touches.
const sandbox = createContext({ console });
runInContext(source, sandbox);
const gas = {
  validateTarget: sandbox.validateTarget,
  validateSlug: sandbox.validateSlug,
  sanitizeUrl: sandbox.sanitizeUrl,
  isActive: sandbox.isActive,
  freeSlug: sandbox.freeSlug,
  ALPHABET: sandbox.ALPHABET,
};

let pass = 0, fail = 0;
const ok = (name, cond) => {
  if (cond) { pass++; } else { fail++; console.error('  \x1b[31m✗\x1b[0m ' + name); }
};

// ── targets: both sides must agree on accept/reject ─────────────────────────
const TARGETS = [
  'https://aenix.io/pricing/',
  'https://aenix.io/pricing/?utm_source=telegram&utm_medium=social&utm_campaign=cloudfest2026',
  'http://aenix.io/',
  'https://k.aenix.io/deep-dive/',
  'https://opc.aenix.io/',
  'https://aenix.io/a/b/c?x=1&y=2#frag',
  // rejected
  'https://evil.example.com/phish',
  'https://aenix.io.evil.com/',
  'https://blog.aenix.io/',
  'https://notaenix.io/',
  'javascript:alert(1)',
  'data:text/html,<script>alert(1)</script>',
  'ftp://aenix.io/file',
  '//evil.example.com',
  'not a url',
  '',
  '   ',
  'https://aenix.io@evil.example.com/',   // credentials trick
  'https://evil.example.com#aenix.io',
];

for (const t of TARGETS) {
  const n = node.validateTarget(t);
  const g = gas.validateTarget(t);
  ok(`target verdict matches: ${JSON.stringify(t).slice(0, 52)}`, n.ok === g.ok);
  if (n.ok && g.ok) {
    ok(`  target URL matches: ${t.slice(0, 46)}`, n.url === g.url);
  }
}

// The credentials case is the one where a naive regex and the URL parser can
// disagree, so assert the outcome directly rather than only cross-checking.
ok('both reject embedded credentials', !node.validateTarget('https://aenix.io@evil.example.com/').ok
  && !gas.validateTarget('https://aenix.io@evil.example.com/').ok);

// ── slugs ───────────────────────────────────────────────────────────────────
const SLUGS = ['cloudfest', 'cloudfest-2026', 'a', 'A-B', '  spaced  ', '-lead', 'trail-',
  'two words', 'snake_case', 'a.b', 'a/b', 'привет', '', 'go', 'l', 'api', 'admin',
  'static', 'assets', 'links', 'a'.repeat(64), 'a'.repeat(65)];

for (const s of SLUGS) {
  const n = node.validateSlug(s);
  const g = gas.validateSlug(s);
  ok(`slug verdict matches: ${JSON.stringify(s).slice(0, 52)}`, n.ok === g.ok);
  if (n.ok && g.ok) ok(`  slug value matches: ${s.slice(0, 46)}`, n.slug === g.slug);
}

// ── sanitize: same params removed, same params kept ─────────────────────────
const DIRTY = [
  'https://aenix.io/reset?token=abc&email=a@b.com&utm_source=email',
  'https://aenix.io/x?utm_source=telegram&utm_medium=social',
  'https://aenix.io/x?secret=1&password=2&api_key=3&keep=4',
  'https://aenix.io/x?token=1#fragment',
  'https://aenix.io/x',
];
for (const d of DIRTY) {
  const n = node.sanitizeUrl(d);
  const g = gas.sanitizeUrl(d);
  ok(`stripped set matches: ${d.slice(0, 46)}`, n.stripped.sort().join(',') === g.stripped.sort().join(','));
  // Node normalises via the URL parser, so compare the query params, not bytes.
  const params = (u) => {
    const q = u.split('#')[0].split('?')[1] || '';
    return q.split('&').filter(Boolean).sort().join('&');
  };
  ok(`  kept params match: ${d.slice(0, 46)}`, params(n.url) === params(g.url));
}

// ── status gate ─────────────────────────────────────────────────────────────
for (const s of ['active', '', '  ACTIVE ', 'disabled', 'archived', 'activ', 'paused']) {
  ok(`status verdict matches: ${JSON.stringify(s)}`, node.isActive(s) === gas.isActive(s));
}

// ── generated slugs are valid on both sides ─────────────────────────────────
ok('GAS alphabet matches', gas.ALPHABET === node.ALPHABET);
for (let i = 0; i < 200; i++) {
  const s = gas.freeSlug({});
  if (!node.validateSlug(s).ok) { ok('generated slug passes Node validation', false); break; }
  if (i === 199) ok('200 generated slugs all pass Node validation', true);
}

console.log(`\n${fail === 0 ? '\x1b[32mall green\x1b[0m' : '\x1b[31mFAILURES\x1b[0m'} — ${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
