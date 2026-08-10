// Unit tests for the link-tools pure helpers. Run: node scripts/test-link-tools.mjs
import { sanitizeUrl, parseUtm, validateTarget, fnv1a } from '../netlify/functions/_shared.mjs';

let pass = 0, fail = 0;
const ok = (name, cond) => { if (cond) { pass++; } else { fail++; console.error('  ✗ ' + name); } };

// round-trip: UTM params on an allowed target survive validate + sanitize byte-for-byte
const t = 'https://aenix.io/pricing/?utm_source=telegram&utm_medium=social&utm_campaign=cloudfest2026&utm_content=hero-cta';
const v = validateTarget(t);
ok('validateTarget accepts allowed host', v.ok);
const s = sanitizeUrl(v.url);
ok('sanitize keeps all UTM params', s.url.includes('utm_source=telegram') && s.url.includes('utm_campaign=cloudfest2026') && s.url.includes('utm_content=hero-cta'));
ok('sanitize strips nothing when clean', s.stripped.length === 0);

const u = parseUtm(t);
ok('parseUtm extracts source', u.source === 'telegram');
ok('parseUtm extracts campaign', u.campaign === 'cloudfest2026');

// anti-fraud: foreign host rejected
ok('validateTarget rejects foreign host', !validateTarget('https://evil.example.com/phish').ok);
ok('validateTarget rejects non-http', !validateTarget('javascript:alert(1)').ok);
ok('validateTarget accepts k.aenix.io', validateTarget('https://k.aenix.io/x').ok);

// PII sanitize
const pii = sanitizeUrl('https://aenix.io/reset?token=abc123&email=a@b.com&utm_source=email');
ok('sanitize strips token', !pii.url.includes('token='));
ok('sanitize strips email', !pii.url.includes('email='));
ok('sanitize keeps utm after strip', pii.url.includes('utm_source=email'));
ok('sanitize reports stripped names', pii.stripped.includes('token') && pii.stripped.includes('email'));

// fragment preservation through sanitize
const frag = sanitizeUrl('https://aenix.io/docs?utm_source=x#section-2');
ok('sanitize preserves fragment', frag.url.includes('#section-2'));

// hash width / determinism
ok('fnv1a is deterministic', fnv1a('abc') === fnv1a('abc'));
ok('fnv1a differs for different input', fnv1a('abc') !== fnv1a('abd'));
ok('fnv1a is wide (>= 8 hex)', fnv1a('abc').length >= 8);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
