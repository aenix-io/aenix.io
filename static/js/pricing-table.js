/*
  pricing-table.js — billing-period toggle for the pricing table.

  Progressive enhancement ONLY. The table, the cards, the tier names, the prices
  and the whole SLA matrix are rendered server-side by
  layouts/shortcodes/pricing-table.html from data/pricing.yaml, so the page is
  complete and indexable without this file. Previously this script owned the
  data and injected everything at runtime, which hid the only published price
  list from Google, from AI search engines and from no-JS clients.

  All this does now is swap each price between the two figures already present
  in the markup as data-annual / data-monthly, and update the "billed …" label.
  Do not reintroduce pricing data here — data/pricing.yaml is the source of
  truth, and a second copy would drift.
*/
(() => {
  const toggle = document.getElementById('cpBillingToggle');
  if (!toggle) return;

  const setMode = (mode) => {
    document.querySelectorAll('.cozy-pricing .cp-amount').forEach((el) => {
      const next = el.dataset[mode];
      if (next) el.textContent = next;
    });
    document.querySelectorAll('.cozy-pricing .cp-billed-word').forEach((el) => {
      el.textContent = mode === 'annual' ? 'annually' : 'monthly';
    });
    toggle.querySelectorAll('.cp-tbtn').forEach((b) => {
      const active = b.dataset.mode === mode;
      b.classList.toggle('cp-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
  };

  toggle.addEventListener('click', (e) => {
    const btn = e.target.closest('.cp-tbtn');
    if (btn) setMode(btn.dataset.mode);
  });
})();
