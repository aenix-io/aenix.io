/**
 * aenix.io short-link creator — Google Apps Script web app.
 *
 * Paste this into the Apps Script editor bound to the link-registry spreadsheet
 * (Extensions → Apps Script) and deploy it as a web app. See README.md next to
 * this file for the exact deployment settings.
 *
 * Flow: /go/ opens this web app in a new tab with ?url=…&slug=… — Google checks
 * the visitor is signed in to an aenix.io account before the script runs, so the
 * page needs no token of its own and no CORS. The script validates, appends one
 * row to the sheet, and shows the finished short link.
 *
 * The validation rules here mirror scripts/lib/link-validate.mjs. Apps Script
 * cannot import that module, so the two copies must be edited together.
 */

// ── config ──────────────────────────────────────────────────────────────────
// The registry spreadsheet, opened by id rather than by container binding: a web
// app runs outside any document context, so getActiveSpreadsheet() has no
// "current" spreadsheet to return and fails on permissions. Leave empty to fall
// back to the bound spreadsheet (works from a menu or trigger, not from the web
// app). The id is not a secret — access is decided by sharing, not by obscurity.
var SHEET_ID = '1x9K7Bf4qesFw8_uD2GjTw_Pok0Pe1cf5X4rsu6x-XNo';
var SHEET_NAME = 'Sheet1';
var SITE_BASE = 'https://aenix.io';
var GITHUB_REPO = 'aenix-io/aenix.io';
var GITHUB_EVENT = 'links-updated';

// Anti-fraud allow-list: only our own hosts may sit behind a short link.
var ALLOWED_HOSTS = ['aenix.io', 'k.aenix.io', 'opc.aenix.io'];
var RESERVED = ['l', 'go', 'api', 'admin', 'static', 'assets', 'links'];
var SLUG_RE = /^[a-z0-9](?:[a-z0-9-]{0,62}[a-z0-9])?$/;
// No look-alike characters (no l/1, no o/0).
var ALPHABET = 'abcdefghijkmnpqrstuvwxyz23456789';

var SENSITIVE = ['email', 'e-mail', 'token', 'access_token', 'refresh_token', 'id_token',
  'password', 'passwd', 'pwd', 'secret', 'sig', 'signature', 'auth',
  'authorization', 'session', 'sessionid', 'sid', 'otp', 'code', 'apikey',
  'api_key', 'key', 'private_key', 'client_secret'];

// ── entry point ─────────────────────────────────────────────────────────────
function doGet(e) {
  try {
    var params = (e && e.parameter) || {};
    var rawUrl = String(params.url || '').trim();
    var rawSlug = String(params.slug || '').trim();
    var note = String(params.note || '').trim().slice(0, 200);

    if (!rawUrl) {
      return page('form', { message: 'Open this page from the link tools at ' + SITE_BASE + '/go/.' });
    }

    var target = validateTarget(rawUrl);
    if (!target.ok) return page('error', { message: target.error });

    var clean = sanitizeUrl(target.url);

    // One writer at a time: two people submitting at once must not land on the
    // same slug or the same row.
    var lock = LockService.getScriptLock();
    lock.waitLock(30000);
    try {
      var sheet = getSheet();
      var rows = readRows(sheet);

      // Idempotency: re-submitting the same target without asking for a specific
      // slug returns the existing link instead of burning a new one. This also
      // absorbs double-clicks and tab prefetching, which a GET endpoint invites.
      if (!rawSlug) {
        for (var i = 0; i < rows.length; i++) {
          if (rows[i].target_url === clean.url && isActive(rows[i].status)) {
            return page('ok', {
              slug: rows[i].slug, target: clean.url, stripped: clean.stripped, deduped: true
            });
          }
        }
      }

      var taken = {};
      for (var j = 0; j < rows.length; j++) taken[String(rows[j].slug).toLowerCase()] = true;

      var slug;
      if (rawSlug) {
        var v = validateSlug(rawSlug);
        if (!v.ok) return page('error', { message: v.error });
        if (taken[v.slug]) return page('error', { message: 'The slug "' + v.slug + '" is already taken.' });
        slug = v.slug;
      } else {
        slug = freeSlug(taken);
        if (!slug) return page('error', { message: 'Could not generate a free slug — try again.' });
      }

      sheet.appendRow([slug, clean.url, 'active', new Date().toISOString(), activeUser(), note]);
      SpreadsheetApp.flush();
    } finally {
      lock.releaseLock();
    }

    notifyGitHub();
    return page('ok', { slug: slug, target: clean.url, stripped: clean.stripped });
  } catch (err) {
    return page('error', { message: 'Unexpected error: ' + (err && err.message ? err.message : err) });
  }
}

// ── sheet access ────────────────────────────────────────────────────────────
function getSheet() {
  var ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('Could not open the registry spreadsheet.');
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error('Sheet "' + SHEET_NAME + '" not found in this spreadsheet.');
  return sheet;
}

/** Read the sheet into objects keyed by header name, not by column order. */
function readRows(sheet) {
  var values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];
  var header = values[0].map(function (h) {
    return String(h || '').trim().toLowerCase().replace(/\s+/g, '_');
  });
  var out = [];
  for (var r = 1; r < values.length; r++) {
    var row = {};
    for (var c = 0; c < header.length; c++) row[header[c]] = String(values[r][c] == null ? '' : values[r][c]).trim();
    if (row.slug || row.target_url) out.push(row);
  }
  return out;
}

function activeUser() {
  // "Execute as: user accessing" means this is the real signed-in aenix.io user.
  var email = '';
  try { email = Session.getActiveUser().getEmail() || ''; } catch (e) { email = ''; }
  return email;
}

// ── validation (mirror of scripts/lib/link-validate.mjs) ────────────────────
function validateTarget(raw) {
  var s = String(raw == null ? '' : raw).trim();
  if (!s) return { ok: false, error: 'Target URL is empty.' };

  // Apps Script has no URL class — parse with a strict regex instead.
  var m = /^([a-zA-Z][a-zA-Z0-9+.-]*):\/\/([^\/?#]+)([\/?#][\s\S]*)?$/.exec(s);
  if (!m) return { ok: false, error: 'Not a valid URL.' };

  var scheme = m[1].toLowerCase();
  if (scheme !== 'http' && scheme !== 'https') return { ok: false, error: 'Only http(s) URLs are allowed.' };

  var authority = m[2];
  // Reject embedded credentials — "https://aenix.io@evil.com/" must not pass.
  if (authority.indexOf('@') !== -1) return { ok: false, error: 'URLs with credentials are not allowed.' };

  var host = authority.split(':')[0].toLowerCase();
  if (ALLOWED_HOSTS.indexOf(host) === -1) {
    return { ok: false, error: 'Only aenix.io, k.aenix.io and opc.aenix.io links can be shortened (got "' + host + '").' };
  }
  return { ok: true, url: scheme + '://' + host + (m[3] || ''), host: host };
}

function validateSlug(raw) {
  var slug = String(raw == null ? '' : raw).trim().toLowerCase();
  if (!slug) return { ok: false, error: 'Slug is empty.' };
  if (!SLUG_RE.test(slug)) return { ok: false, error: 'Slug must be 1-64 chars: a-z, 0-9, hyphens (not at the ends).' };
  if (RESERVED.indexOf(slug) !== -1) return { ok: false, error: '"' + slug + '" is reserved.' };
  return { ok: true, slug: slug };
}

/** Strip secrets/PII from the query string before the URL is persisted. */
function sanitizeUrl(raw) {
  var hashAt = raw.indexOf('#');
  var frag = hashAt === -1 ? '' : raw.slice(hashAt);
  var head = hashAt === -1 ? raw : raw.slice(0, hashAt);
  var qAt = head.indexOf('?');
  if (qAt === -1) return { url: raw, stripped: [] };

  var base = head.slice(0, qAt);
  var pairs = head.slice(qAt + 1).split('&');
  var kept = [], stripped = [];
  for (var i = 0; i < pairs.length; i++) {
    if (!pairs[i]) continue;
    var name = decodeURIComponent(pairs[i].split('=')[0] || '').toLowerCase();
    if (SENSITIVE.indexOf(name) !== -1) stripped.push(name); else kept.push(pairs[i]);
  }
  return { url: base + (kept.length ? '?' + kept.join('&') : '') + frag, stripped: stripped };
}

function isActive(status) {
  var s = String(status == null ? '' : status).trim().toLowerCase();
  return s === '' || s === 'active';
}

function freeSlug(taken) {
  for (var attempt = 0; attempt < 12; attempt++) {
    var s = '';
    for (var i = 0; i < 5; i++) s += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    if (!taken[s] && RESERVED.indexOf(s) === -1) return s;
  }
  return null;
}

// ── GitHub nudge (optional) ─────────────────────────────────────────────────
/**
 * Ask GitHub Actions to sync the sheet into the repository now. Optional: if no
 * GITHUB_TOKEN script property is set, the scheduled run picks the row up later.
 * Never throws — a failed nudge must not lose a row that is already written.
 */
function notifyGitHub() {
  var token = PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN');
  if (!token) return;
  try {
    UrlFetchApp.fetch('https://api.github.com/repos/' + GITHUB_REPO + '/dispatches', {
      method: 'post',
      contentType: 'application/json',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      },
      payload: JSON.stringify({ event_type: GITHUB_EVENT }),
      muteHttpExceptions: true
    });
  } catch (e) {
    console.error('repository_dispatch failed: ' + e);
  }
}

// ── output ──────────────────────────────────────────────────────────────────
function page(kind, data) {
  var esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };

  var body;
  if (kind === 'ok') {
    var short = SITE_BASE + '/l/' + data.slug;
    body =
      '<h1>Short link created</h1>' +
      '<div class="box"><code id="s">' + esc(short) + '</code>' +
      '<button onclick="navigator.clipboard.writeText(document.getElementById(\'s\').textContent);' +
      'this.textContent=\'Copied\'">Copy</button></div>' +
      '<p class="t">→ ' + esc(data.target) + '</p>' +
      (data.deduped ? '<p class="i">This target already had a short link, so you got the existing one back.</p>' : '') +
      (data.stripped && data.stripped.length
        ? '<p class="w">Removed sensitive parameter(s) before saving: ' + esc(data.stripped.join(', ')) + '</p>' : '') +
      '<p class="i">The row is in the sheet now. The link starts working once the site rebuilds — ' +
      'usually a couple of minutes.</p>';
  } else if (kind === 'error') {
    body = '<h1>Could not create the link</h1><p class="e">' + esc(data.message) + '</p>';
  } else {
    body = '<h1>Link shortener</h1><p class="i">' + esc(data.message) + '</p>';
  }

  var html =
    '<!doctype html><html><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1"><title>aenix.io short link</title>' +
    '<style>' +
    'body{margin:0;padding:40px 20px;background:#0B0F1A;color:#F1F5F9;' +
    'font:15px/1.6 Inter,system-ui,-apple-system,sans-serif}' +
    '.wrap{max-width:620px;margin:0 auto}' +
    'h1{font-size:1.5rem;margin:0 0 20px}' +
    '.box{display:flex;gap:12px;align-items:center;flex-wrap:wrap;background:rgba(212,246,178,.06);' +
    'border:1px solid rgba(212,246,178,.25);border-radius:12px;padding:14px 16px}' +
    'code{font-family:ui-monospace,SFMono-Regular,monospace;font-size:1rem;color:#94DEE0;word-break:break-all}' +
    'button{background:#01A5FF;color:#001018;border:0;border-radius:9px;padding:8px 16px;' +
    'font-weight:700;cursor:pointer;font-family:inherit}' +
    '.t{color:#94A3B8;font-size:.85rem;word-break:break-all;margin:12px 0 0}' +
    '.i{color:#94A3B8;font-size:.87rem;margin-top:16px}' +
    '.w{color:#fcd34d;font-size:.87rem;margin-top:14px}' +
    '.e{background:rgba(248,113,113,.08);border:1px solid rgba(248,113,113,.3);color:#fca5a5;' +
    'border-radius:12px;padding:14px 16px}' +
    'a{color:#01A5FF}' +
    '</style></head><body><div class="wrap">' + body +
    '<p class="i"><a href="' + SITE_BASE + '/go/">← Back to the link tools</a> · ' +
    '<a href="' + SITE_BASE + '/go/links/">Registry</a></p>' +
    '</div></body></html>';

  return HtmlService.createHtmlOutput(html)
    .setTitle('aenix.io short link')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}
