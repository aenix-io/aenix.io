/*
  pricing-table.js — progressive enhancement for the pricing table.

  The table, the cards, the tier names, the prices and the whole SLA matrix are
  rendered server-side by layouts/shortcodes/pricing-table.html from
  data/pricing.yaml, so the page is complete and indexable without this file.
  Do not reintroduce pricing data here — data/pricing.yaml is the source of
  truth, and a second copy would drift.

  This script does two things:
  - swaps every element carrying data-annual / data-monthly (the price and the
    "billed …" line) between the two texts already in the markup;
  - on phones, turns the stack of tier cards into a tier switcher that shows
    one card at a time (without JS every card stays visible).
*/
(() => {
  const root = document.querySelector('.cozy-pricing');
  if (!root) return;

  const billing = root.querySelector('#cpBillingToggle');
  const setMode = (mode) => {
    root.querySelectorAll('[data-annual][data-monthly]').forEach((el) => {
      el.textContent = el.dataset[mode];
    });
    billing.querySelectorAll('.cp-tbtn').forEach((b) => {
      const active = b.dataset.mode === mode;
      b.classList.toggle('cp-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
  };
  if (billing) {
    billing.addEventListener('click', (e) => {
      const btn = e.target.closest('.cp-tbtn');
      if (btn) setMode(btn.dataset.mode);
    });
  }

  const planSwitch = root.querySelector('#cpPlanSwitch');
  if (!planSwitch) return;
  root.classList.add('cp-js');
  planSwitch.hidden = false;
  const setPlan = (id) => {
    planSwitch.querySelectorAll('.cp-pbtn').forEach((b) => {
      const active = b.dataset.plan === id;
      b.classList.toggle('cp-active', active);
      b.setAttribute('aria-selected', String(active));
    });
    root.querySelectorAll('.cp-card').forEach((c) => {
      c.classList.toggle('cp-card--active', c.dataset.plan === id);
    });
  };
  planSwitch.addEventListener('click', (e) => {
    const btn = e.target.closest('.cp-pbtn');
    if (!btn) return;
    setPlan(btn.dataset.plan);
    const top = root.querySelector('.cp-cards').getBoundingClientRect().top + window.scrollY - 140;
    if (window.scrollY > top) window.scrollTo({ top, behavior: 'smooth' });
  });
})();
