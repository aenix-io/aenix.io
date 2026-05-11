/* consent.js — cookie consent banner + tracker gating for aenix.io.
 *
 * Behaviour:
 *  - Banner appears at bottom on first visit (no choice in localStorage).
 *  - Three categories: necessary (always on), analytics, marketing.
 *  - Choice is persisted with 13-month expiry (GDPR standard).
 *  - Trackers (GA gtag, Ahrefs, Apollo, Hotjar, GTM) load ONLY after the
 *    corresponding category is accepted.
 *  - Google Consent Mode v2: gtag is loaded but consent state is "denied"
 *    by default; on accept we send a `gtag('consent', 'update', ...)`.
 *  - Re-prompt available via window.AenixConsent.openSettings() — wire
 *    a footer link to it (e.g. "Cookie settings").
 *
 * Browser support: ES2017+ (no IE11). All evergreen browsers.
 */
(function () {
  'use strict';

  // -------------------------------------------------------------------
  // Config — read from data attributes on the consent root <div>
  // -------------------------------------------------------------------
  var root = document.getElementById('aenix-consent-root');
  if (!root) return;

  var LANG = root.getAttribute('data-lang') || 'en';
  var STORAGE_KEY = 'aenix-consent-v1';
  var EXPIRY_DAYS = 395; // ~13 months, GDPR-recommended max
  var GTM_ID = root.getAttribute('data-gtm-container') || '';
  var GA_ID = root.getAttribute('data-ga-id') || '';
  var AHREFS_KEY = root.getAttribute('data-ahrefs-key') || '';
  var APOLLO_APP_ID = root.getAttribute('data-apollo-app-id') || '';
  var HOTJAR_ID = root.getAttribute('data-hotjar-id') || '';

  // -------------------------------------------------------------------
  // i18n
  // -------------------------------------------------------------------
  var T = {
    en: {
      heading: 'We respect your privacy',
      body: 'We use cookies and similar technologies to keep the site running, measure usage, and improve content. You can accept all, reject non-essential, or pick categories.',
      acceptAll: 'Accept all',
      rejectAll: 'Reject non-essential',
      customize: 'Customize',
      save: 'Save preferences',
      catNecessaryName: 'Strictly necessary',
      catNecessaryDesc: 'Required for the site to function (cookie-consent state, language). Always active.',
      catAnalyticsName: 'Analytics',
      catAnalyticsDesc: 'Helps us understand how visitors use the site (Google Analytics, Ahrefs Analytics, Apollo B2B tracking).',
      catMarketingName: 'Marketing',
      catMarketingDesc: 'Used to measure ad performance and reach you with relevant content across platforms (Tag Manager, future ad platforms).',
      learnMore: 'Privacy policy',
      privacyUrl: '/about/#privacy',
      footerSettings: 'Cookie settings'
    },
    de: {
      heading: 'Wir respektieren Ihre Privatsphäre',
      body: 'Wir verwenden Cookies und ähnliche Technologien, um die Seite zu betreiben, die Nutzung zu messen und Inhalte zu verbessern. Sie können alle akzeptieren, nicht-wesentliche ablehnen oder Kategorien wählen.',
      acceptAll: 'Alle akzeptieren',
      rejectAll: 'Nicht-wesentliche ablehnen',
      customize: 'Anpassen',
      save: 'Auswahl speichern',
      catNecessaryName: 'Unbedingt erforderlich',
      catNecessaryDesc: 'Erforderlich für den Betrieb der Website (Cookie-Consent-Status, Sprache). Immer aktiv.',
      catAnalyticsName: 'Analyse',
      catAnalyticsDesc: 'Hilft uns zu verstehen, wie Besucher die Seite nutzen (Google Analytics, Ahrefs Analytics, Apollo B2B-Tracking).',
      catMarketingName: 'Marketing',
      catMarketingDesc: 'Wird verwendet, um die Werbewirkung zu messen und Sie plattformübergreifend mit relevanten Inhalten zu erreichen (Tag Manager, zukünftige Werbeplattformen).',
      learnMore: 'Datenschutzerklärung',
      privacyUrl: '/de/ueber-uns/#datenschutz',
      footerSettings: 'Cookie-Einstellungen'
    }
  };
  var t = T[LANG] || T.en;

  // -------------------------------------------------------------------
  // Storage
  // -------------------------------------------------------------------
  function readChoice() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var c = JSON.parse(raw);
      if (!c || !c.expiry || Date.now() > c.expiry) return null;
      return c;
    } catch (e) {
      return null;
    }
  }
  function writeChoice(analytics, marketing) {
    var c = {
      necessary: true,
      analytics: !!analytics,
      marketing: !!marketing,
      timestamp: Date.now(),
      expiry: Date.now() + EXPIRY_DAYS * 24 * 60 * 60 * 1000
    };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(c)); } catch (e) {}
    return c;
  }

  // -------------------------------------------------------------------
  // Tracker activation (called after consent is granted)
  // -------------------------------------------------------------------
  var activated = { ga: false, ahrefs: false, apollo: false, gtm: false, hotjar: false };

  function loadScript(src, attrs) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    if (attrs) Object.keys(attrs).forEach(function (k) { s.setAttribute(k, attrs[k]); });
    document.head.appendChild(s);
    return s;
  }

  function activateGtag() {
    if (activated.ga || !GA_ID) return;
    activated.ga = true;
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = window.gtag || gtag;
    loadScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID));
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  function updateGtagConsent(analytics, marketing) {
    if (!window.gtag) return;
    window.gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: marketing ? 'granted' : 'denied',
      ad_user_data: marketing ? 'granted' : 'denied',
      ad_personalization: marketing ? 'granted' : 'denied'
    });
  }

  function activateGTM() {
    if (activated.gtm || !GTM_ID) return;
    activated.gtm = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    loadScript('https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(GTM_ID));
  }

  function activateAhrefs() {
    if (activated.ahrefs || !AHREFS_KEY) return;
    activated.ahrefs = true;
    loadScript('https://analytics.ahrefs.com/analytics.js', { 'data-key': AHREFS_KEY });
  }

  function activateApollo() {
    if (activated.apollo || !APOLLO_APP_ID) return;
    activated.apollo = true;
    var n = Math.random().toString(36).substring(7);
    var s = document.createElement('script');
    s.src = 'https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=' + n;
    s.async = true;
    s.defer = true;
    s.onload = function () {
      if (window.trackingFunctions && window.trackingFunctions.onLoad) {
        window.trackingFunctions.onLoad({ appId: APOLLO_APP_ID });
      }
    };
    document.head.appendChild(s);
  }

  function activateHotjar() {
    if (activated.hotjar || !HOTJAR_ID) return;
    activated.hotjar = true;
    /* eslint-disable */
    (function (h, o, t, j, a, r) {
      h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments); };
      h._hjSettings = { hjid: parseInt(HOTJAR_ID, 10), hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script'); r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    /* eslint-enable */
  }

  function applyChoice(c) {
    if (!c) return;
    updateGtagConsent(c.analytics, c.marketing);
    if (c.analytics) {
      activateGtag();
      activateAhrefs();
      activateApollo();
    }
    if (c.marketing) {
      activateGTM();
      activateHotjar();
    }
    document.dispatchEvent(new CustomEvent('aenix:consent-changed', { detail: c }));
  }

  // -------------------------------------------------------------------
  // Default consent state — Consent Mode v2 "denied" before banner choice
  // -------------------------------------------------------------------
  window.dataLayer = window.dataLayer || [];
  function gtagDefault() { window.dataLayer.push(arguments); }
  gtagDefault('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });

  // -------------------------------------------------------------------
  // Banner UI
  // -------------------------------------------------------------------
  function buildBanner() {
    var html = ''
      + '<div class="aenix-consent-banner" role="dialog" aria-labelledby="aenix-consent-heading" aria-describedby="aenix-consent-body">'
      +   '<div class="aenix-consent-banner__inner">'
      +     '<div class="aenix-consent-banner__intro">'
      +       '<h2 id="aenix-consent-heading">' + t.heading + '</h2>'
      +       '<p id="aenix-consent-body">' + t.body + ' <a href="' + t.privacyUrl + '">' + t.learnMore + '</a>.</p>'
      +     '</div>'
      +     '<div class="aenix-consent-banner__actions">'
      +       '<button type="button" class="aenix-consent-btn aenix-consent-btn--secondary" data-action="customize">' + t.customize + '</button>'
      +       '<button type="button" class="aenix-consent-btn aenix-consent-btn--secondary" data-action="reject">' + t.rejectAll + '</button>'
      +       '<button type="button" class="aenix-consent-btn aenix-consent-btn--primary" data-action="accept">' + t.acceptAll + '</button>'
      +     '</div>'
      +     '<div class="aenix-consent-banner__settings" hidden>'
      +       '<div class="aenix-consent-cat">'
      +         '<label><input type="checkbox" checked disabled> <strong>' + t.catNecessaryName + '</strong></label>'
      +         '<p>' + t.catNecessaryDesc + '</p>'
      +       '</div>'
      +       '<div class="aenix-consent-cat">'
      +         '<label><input type="checkbox" id="aenix-consent-analytics" checked> <strong>' + t.catAnalyticsName + '</strong></label>'
      +         '<p>' + t.catAnalyticsDesc + '</p>'
      +       '</div>'
      +       '<div class="aenix-consent-cat">'
      +         '<label><input type="checkbox" id="aenix-consent-marketing"> <strong>' + t.catMarketingName + '</strong></label>'
      +         '<p>' + t.catMarketingDesc + '</p>'
      +       '</div>'
      +       '<button type="button" class="aenix-consent-btn aenix-consent-btn--primary" data-action="save">' + t.save + '</button>'
      +     '</div>'
      +   '</div>'
      + '</div>';
    root.innerHTML = html;
  }

  function showBanner() {
    if (!root.firstChild) buildBanner();
    root.style.display = '';
  }
  function hideBanner() {
    root.style.display = 'none';
  }

  // -------------------------------------------------------------------
  // Wire interactions
  // -------------------------------------------------------------------
  root.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-action]');
    if (!btn) return;
    var action = btn.getAttribute('data-action');
    if (action === 'accept') {
      var c = writeChoice(true, true);
      applyChoice(c);
      hideBanner();
    } else if (action === 'reject') {
      var c2 = writeChoice(false, false);
      applyChoice(c2);
      hideBanner();
    } else if (action === 'customize') {
      var settings = root.querySelector('.aenix-consent-banner__settings');
      if (settings) settings.hidden = false;
      btn.style.display = 'none';
    } else if (action === 'save') {
      var a = !!document.getElementById('aenix-consent-analytics').checked;
      var m = !!document.getElementById('aenix-consent-marketing').checked;
      var c3 = writeChoice(a, m);
      applyChoice(c3);
      hideBanner();
    }
  });

  // -------------------------------------------------------------------
  // Public API
  // -------------------------------------------------------------------
  window.AenixConsent = {
    openSettings: function () {
      buildBanner();
      var settings = root.querySelector('.aenix-consent-banner__settings');
      if (settings) settings.hidden = false;
      var customizeBtn = root.querySelector('[data-action="customize"]');
      if (customizeBtn) customizeBtn.style.display = 'none';
      root.style.display = '';
    },
    getChoice: readChoice,
    reset: function () {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      showBanner();
    }
  };

  // Footer "Cookie settings" link wiring
  document.querySelectorAll('[data-aenix-consent-open]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      window.AenixConsent.openSettings();
    });
  });

  // -------------------------------------------------------------------
  // Boot: apply saved choice OR show banner
  // -------------------------------------------------------------------
  var existing = readChoice();
  if (existing) {
    applyChoice(existing);
  } else {
    showBanner();
  }
})();
