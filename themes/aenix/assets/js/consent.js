(function () {
  'use strict';

  var STORAGE_KEY = 'aenix_consent_v1';

  // Injected by baseof.html
  var GA_ID      = window.AENIX_GA_ID      || '';
  var AHREFS_KEY = window.AENIX_AHREFS_KEY || '';
  var APOLLO_ID  = window.AENIX_APOLLO_ID  || '';

  /* ── Storage ────────────────────────────────────────────────────── */

  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function saveConsent(analytics, marketing) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        v: 1,
        ts: Date.now(),
        analytics: !!analytics,
        marketing: !!marketing
      }));
    } catch (e) {}
  }

  /* ── Script loaders ─────────────────────────────────────────────── */

  function loadGA() {
    if (!GA_ID) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  function loadAhrefs() {
    if (!AHREFS_KEY) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://analytics.ahrefs.com/analytics.js';
    s.setAttribute('data-key', AHREFS_KEY);
    document.head.appendChild(s);
  }

  function loadApollo() {
    if (!APOLLO_ID) return;
    var n = Math.random().toString(36).substring(7);
    var s = document.createElement('script');
    s.src = 'https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=' + n;
    s.async = true;
    s.defer = true;
    s.onload = function () {
      if (window.trackingFunctions) {
        window.trackingFunctions.onLoad({ appId: APOLLO_ID });
      }
    };
    document.head.appendChild(s);
  }

  function applyConsent(consent) {
    if (consent.analytics) {
      loadGA();
      loadAhrefs();
    }
    if (consent.marketing) {
      loadApollo();
    }
  }

  /* ── Banner / Modal UI ──────────────────────────────────────────── */

  function el(id) { return document.getElementById(id); }

  function showBanner() {
    var b = el('cookie-banner');
    if (b) { b.removeAttribute('hidden'); }
  }

  function hideBanner() {
    var b = el('cookie-banner');
    if (b) { b.setAttribute('hidden', ''); }
  }

  function openModal(analytics, marketing) {
    var m = el('cookie-modal');
    if (!m) return;
    var ca = el('pref-analytics');
    var cm = el('pref-marketing');
    if (ca) ca.checked = !!analytics;
    if (cm) cm.checked = !!marketing;
    m.removeAttribute('hidden');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    var m = el('cookie-modal');
    if (m) m.setAttribute('hidden', '');
    document.body.classList.remove('modal-open');
  }

  /* ── Actions ────────────────────────────────────────────────────── */

  function acceptAll() {
    saveConsent(true, true);
    applyConsent({ analytics: true, marketing: true });
    hideBanner();
    closeModal();
  }

  function rejectNonEssential() {
    saveConsent(false, false);
    hideBanner();
    closeModal();
  }

  function savePreferences() {
    var analytics = !!(el('pref-analytics') && el('pref-analytics').checked);
    var marketing = !!(el('pref-marketing') && el('pref-marketing').checked);
    saveConsent(analytics, marketing);
    applyConsent({ analytics: analytics, marketing: marketing });
    hideBanner();
    closeModal();
  }

  /* ── Public API (used by footer "Your Privacy Choices" link) ─────── */

  window.AenixConsent = {
    openPreferences: function () {
      var c = getConsent();
      openModal(c ? c.analytics : false, c ? c.marketing : false);
    }
  };

  /* ── Init ───────────────────────────────────────────────────────── */

  function init() {
    var consent = getConsent();

    if (consent) {
      // Already decided — apply silently
      applyConsent(consent);
    } else {
      // No decision yet — show banner
      showBanner();
    }

    // Banner buttons
    var btnAccept = el('cookie-accept-all');
    var btnReject = el('cookie-reject');
    var btnManage = el('cookie-manage');
    if (btnAccept) btnAccept.addEventListener('click', acceptAll);
    if (btnReject) btnReject.addEventListener('click', rejectNonEssential);
    if (btnManage) btnManage.addEventListener('click', function () {
      openModal(false, false);
    });

    // Modal buttons
    var btnAcceptModal = el('cookie-accept-all-modal');
    var btnSave        = el('cookie-save-prefs');
    var btnClose       = el('cookie-modal-close');
    var backdrop       = el('cookie-modal-backdrop');
    if (btnAcceptModal) btnAcceptModal.addEventListener('click', acceptAll);
    if (btnSave)        btnSave.addEventListener('click', savePreferences);
    if (btnClose)       btnClose.addEventListener('click', closeModal);
    if (backdrop)       backdrop.addEventListener('click', closeModal);

    // "Your Privacy Choices" links (data attribute or id)
    var privacyLinks = document.querySelectorAll('[data-cookie-preferences], #your-privacy-choices');
    for (var i = 0; i < privacyLinks.length; i++) {
      privacyLinks[i].addEventListener('click', function (e) {
        e.preventDefault();
        window.AenixConsent.openPreferences();
      });
    }

    // Escape closes modal
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
