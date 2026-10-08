/*
 * aenix-events.js — GA4 conversion events.
 *
 * Every event goes through window.gtag and only when it exists. gtag is the
 * Consent Mode queue set up by /js/consent.js: GA4 itself loads only after the
 * visitor accepts analytics, so nothing leaves the browser without consent.
 *
 *   generate_lead       a Pipedrive form submitted (the form's redirect
 *                       message), or a thank-you page reached
 *   cta_click           a primary call to action clicked
 *   outbound_click      a link to cozystack.io or GitHub clicked
 *   calculator_use      first input in a calculator
 *   calculator_result   a calculator export / download / share, or sustained
 *                       use (5 changes)
 */
(function () {
  'use strict';

  function send(name, params) {
    if (typeof window.gtag !== 'function') return;
    params = params || {};
    params.page_path = location.pathname;
    try { window.gtag('event', name, params); } catch (e) { /* never break the page */ }
  }

  var lang = document.documentElement.lang || 'en';

  // ── Leads ──────────────────────────────────────────────────────────────
  // Pipedrive's loader posts {type: 6 /* REDIRECT */, payload: {url}} from the
  // form iframe after a successful submit when the form has a redirect URL.
  var leadSent = false;
  function lead(formType, how) {
    if (leadSent) return;
    leadSent = true;
    send('generate_lead', { form_type: formType || 'unknown', method: how, language: lang });
  }
  function formTypeOf(el) {
    var box = el && el.closest ? el.closest('.pipedrive-form') : null;
    if (!box) return '';
    var m = box.className.match(/pipedrive-form--([a-z-]+)/);
    return m ? m[1] : '';
  }
  window.addEventListener('message', function (e) {
    if (!/(^|\.)pipedrive\.com$/.test((e.origin || '').replace(/^https?:\/\//, ''))) return;
    var d = e.data;
    if (!d || typeof d !== 'object' || d.type !== 6) return;
    var frame = null;
    document.querySelectorAll('.pipedriveWebForms iframe').forEach(function (f) {
      if (f.contentWindow === e.source) frame = f;
    });
    lead(formTypeOf(frame) || 'pipedrive', 'form_redirect');
  });
  if (/\/thank-you\/?$/.test(location.pathname)) {
    var seg = location.pathname.split('/').filter(Boolean);
    lead(seg.length > 1 ? seg[seg.length - 2] : 'thank-you', 'thank_you_page');
  }

  // ── Clicks ─────────────────────────────────────────────────────────────
  var CTA = '.cta-primary, .nav-link--cta, .btn-primary, [data-cta]';
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.href || '';
    var host = '';
    try { host = new URL(href, location.href).hostname; } catch (err) { return; }
    if (/(^|\.)cozystack\.io$/.test(host) || /(^|\.)github\.com$/.test(host)) {
      send('outbound_click', { link_url: href, link_domain: host });
    }
    if (a.matches(CTA)) {
      send('cta_click', {
        link_url: href,
        link_text: (a.textContent || '').trim().slice(0, 100),
        cta_position: a.getAttribute('data-cta') || (a.closest('header') ? 'header' : a.closest('footer') ? 'footer' : 'body')
      });
    }
  }, true);

  // ── Calculators ────────────────────────────────────────────────────────
  // Embedded apps are same-origin iframes; inline calculators are page forms.
  function watchCalculator(doc, name) {
    var changes = 0, used = false, result = false;
    function onChange() {
      changes++;
      if (!used) { used = true; send('calculator_use', { calculator: name }); }
      if (!result && changes >= 5) { result = true; send('calculator_result', { calculator: name, trigger: 'engaged' }); }
    }
    doc.addEventListener('input', onChange, true);
    doc.addEventListener('change', onChange, true);
    doc.addEventListener('click', function (e) {
      var b = e.target && e.target.closest ? e.target.closest('button, a') : null;
      if (!b || result) return;
      if (/pdf|export|download|share|copy link|herunterladen/i.test(b.textContent || '')) {
        result = true;
        send('calculator_result', { calculator: name, trigger: 'export' });
      }
    }, true);
  }
  document.querySelectorAll('iframe[data-calculator], iframe[src*="-calculator-app/"]').forEach(function (f) {
    var name = (f.getAttribute('data-calculator') || f.getAttribute('src') || '').replace(/^\/|\/$/g, '');
    function hook() { try { if (f.contentDocument) watchCalculator(f.contentDocument, name); } catch (e) { /* cross-origin */ } }
    f.addEventListener('load', hook);
    if (f.contentDocument && f.contentDocument.readyState === 'complete') hook();
  });
  if (/-calculator-app\/$/.test(location.pathname) && window.top === window.self) {
    watchCalculator(document, location.pathname.replace(/^\/|\/$/g, ''));
  }
  document.querySelectorAll('.roicalc, .roicalc-grid, [data-inline-calculator]').forEach(function (el, i) {
    watchCalculator(el, el.getAttribute('data-inline-calculator') || ('inline-' + location.pathname.replace(/\//g, '') + '-' + i));
  });
})();
