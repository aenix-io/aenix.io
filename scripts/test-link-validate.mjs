// Unit tests for the short-link validation rules.
// Run: node scripts/test-link-validate.mjs
import {
  validateTarget, validateSlug, sanitizeUrl, parseUtm, normalizeStatus,
  isActive, randomSlug, validateRows, ALPHABET,
} from './lib/link-validate.mjs';

let pass = 0, fail = 0;
const ok = (name, cond) => {
  if (cond) { pass++; } else { fail++; console.error('  \x1b[31m✗\x1b[0m ' + name); }
};

// ── target host allow-list ──────────────────────────────────────────────────
ok('accepts aenix.io', validateTarget('https://aenix.io/pricing/').ok);
ok('accepts k.aenix.io', validateTarget('https://k.aenix.io/x').ok);
ok('accepts opc.aenix.io', validateTarget('https://opc.aenix.io/').ok);
ok('rejects a foreign host', !validateTarget('https://evil.example.com/phish').ok);
ok('rejects a look-alike host', !validateTarget('https://aenix.io.evil.com/').ok);
ok('rejects a subdomain not on the list', !validateTarget('https://blog.aenix.io/').ok);
ok('rejects javascript:', !validateTarget('javascript:alert(1)').ok);
ok('rejects data:', !validateTarget('data:text/html,<script>alert(1)</script>').ok);
ok('rejects an empty target', !validateTarget('').ok);
ok('rejects a whitespace-only target', !validateTarget('   ').ok);
ok('rejects garbage', !validateTarget('not a url').ok);
ok('rejects a protocol-relative URL', !validateTarget('//evil.example.com').ok);
ok('empty target says so', validateTarget('').error === 'Target URL is empty.');

// UTM params on an allowed target survive validation byte-for-byte
const tgt = 'https://aenix.io/pricing/?utm_source=telegram&utm_medium=social&utm_campaign=cloudfest2026&utm_content=hero-cta';
const v = validateTarget(tgt);
ok('keeps every UTM param', v.ok
  && v.url.includes('utm_source=telegram') && v.url.includes('utm_medium=social')
  && v.url.includes('utm_campaign=cloudfest2026') && v.url.includes('utm_content=hero-cta'));

// ── slug rules ──────────────────────────────────────────────────────────────
ok('accepts a simple slug', validateSlug('cloudfest').ok);
ok('accepts digits and hyphens', validateSlug('cloudfest-2026').ok);
ok('accepts a single char', validateSlug('a').ok);
ok('lowercases the slug', validateSlug('CloudFest').slug === 'cloudfest');
ok('trims the slug', validateSlug('  cloudfest  ').slug === 'cloudfest');
ok('rejects a leading hyphen', !validateSlug('-nope').ok);
ok('rejects a trailing hyphen', !validateSlug('nope-').ok);
ok('rejects spaces', !validateSlug('two words').ok);
ok('rejects underscores', !validateSlug('snake_case').ok);
ok('rejects dots', !validateSlug('a.b').ok);
ok('rejects slashes', !validateSlug('a/b').ok);
ok('rejects non-ASCII', !validateSlug('привет').ok);
ok('rejects an empty slug', !validateSlug('').ok);
ok('rejects 65 chars', !validateSlug('a'.repeat(65)).ok);
ok('accepts 64 chars', validateSlug('a'.repeat(64)).ok);
['l', 'go', 'api', 'admin', 'static', 'assets', 'links'].forEach((r) => {
  ok(`rejects reserved "${r}"`, !validateSlug(r).ok);
});

// ── sanitize ────────────────────────────────────────────────────────────────
const pii = sanitizeUrl('https://aenix.io/reset?token=abc123&email=a@b.com&utm_source=email');
ok('strips token', !pii.url.includes('token='));
ok('strips email', !pii.url.includes('email='));
ok('keeps utm after stripping', pii.url.includes('utm_source=email'));
ok('reports what it stripped', pii.stripped.includes('token') && pii.stripped.includes('email'));
ok('strips nothing from a clean URL', sanitizeUrl(tgt).stripped.length === 0);

// ── utm parsing ─────────────────────────────────────────────────────────────
const u = parseUtm(tgt);
ok('parses utm_source', u.source === 'telegram');
ok('parses utm_campaign', u.campaign === 'cloudfest2026');
ok('missing utm is empty, not undefined', u.term === '');

// ── status gate ─────────────────────────────────────────────────────────────
ok('active is active', isActive('active'));
ok('blank status defaults to active', isActive(''));
ok('ACTIVE (case/space) is active', isActive('  ACTIVE '));
ok('disabled is not active', !isActive('disabled'));
ok('archived is not active', !isActive('archived'));
ok('typo status is not active', !isActive('activ'));
ok('normalizeStatus lowercases', normalizeStatus(' Disabled ') === 'disabled');

// ── random slug ─────────────────────────────────────────────────────────────
const rs = randomSlug(5);
ok('random slug has the requested length', rs.length === 5);
ok('random slug uses the safe alphabet', [...rs].every((c) => ALPHABET.includes(c)));
ok('random slug has no look-alikes', !/[l1o0]/.test(rs));
ok('random slug passes slug validation', validateSlug(rs).ok);

// ── whole-sheet validation (cross-row rules) ────────────────────────────────
const { links, errors } = validateRows([
  { rowNumber: 2, slug: 'good', target_url: 'https://aenix.io/pricing/', status: 'active' },
  { rowNumber: 3, slug: 'good', target_url: 'https://aenix.io/other/', status: 'active' },      // dup slug
  { rowNumber: 4, slug: 'foreign', target_url: 'https://evil.example.com/', status: 'active' }, // foreign host
  { rowNumber: 5, slug: 'bad slug', target_url: 'https://aenix.io/x/', status: 'active' },      // bad slug
  { rowNumber: 6, slug: 'empty-target', target_url: '', status: 'active' },                     // no target
  { rowNumber: 7, slug: 'go', target_url: 'https://aenix.io/x/', status: 'active' },            // reserved
  { rowNumber: 8, slug: 'off', target_url: 'https://aenix.io/old/', status: 'disabled' },       // kept, not active
  { rowNumber: 9, slug: '', target_url: '', status: '' },                                       // blank padding
  { rowNumber: 10, slug: 'leak', target_url: 'https://aenix.io/r?token=s3cr3t', status: 'active' },
]);

const slugs = links.map((l) => l.slug);
ok('sheet: keeps the good row', slugs.includes('good'));
ok('sheet: keeps a disabled row as history', slugs.includes('off'));
ok('sheet: disabled row is not active', links.find((l) => l.slug === 'off').status === 'disabled');
ok('sheet: drops the duplicate slug', links.filter((l) => l.slug === 'good').length === 1);
ok('sheet: first row wins the slug', links.find((l) => l.slug === 'good').target_url.includes('/pricing/'));
ok('sheet: drops the foreign host', !slugs.includes('foreign'));
ok('sheet: drops the malformed slug', !slugs.includes('bad slug'));
ok('sheet: drops the empty target', !slugs.includes('empty-target'));
ok('sheet: drops the reserved slug', !slugs.includes('go'));
ok('sheet: ignores blank padding rows silently', !errors.some((e) => e.row === 9));
ok('sheet: strips a secret from the target', links.find((l) => l.slug === 'leak').target_url.indexOf('token=') === -1);
ok('sheet: reports the stripped param', links.find((l) => l.slug === 'leak').stripped.includes('token'));

const hard = errors.filter((e) => e.level !== 'warn');
ok('sheet: reports exactly the 5 bad rows', hard.length === 5);
ok('sheet: error carries the row number', hard.every((e) => typeof e.row === 'number'));
ok('sheet: duplicate error names the winning row', hard.find((e) => e.row === 3).error.includes('row 2'));

// duplicate targets warn but survive
const dupTarget = validateRows([
  { rowNumber: 2, slug: 'one', target_url: 'https://aenix.io/p/', status: 'active' },
  { rowNumber: 3, slug: 'two', target_url: 'https://aenix.io/p/', status: 'active' },
]);
ok('sheet: same target keeps both rows', dupTarget.links.length === 2);
ok('sheet: same target raises a warning', dupTarget.errors.some((e) => e.level === 'warn'));

console.log(`\n${fail === 0 ? '\x1b[32mall green\x1b[0m' : '\x1b[31mFAILURES\x1b[0m'} — ${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
