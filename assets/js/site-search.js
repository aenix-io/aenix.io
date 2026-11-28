/* Site search: a <dialog> over Pagefind's static index.
 *
 * The index is built after Hugo (`npx pagefind --site public`) and loaded
 * only when the dialog first opens, so pages that never search pay nothing.
 * Markup: layouts/partials/site-search.html. Keyboard: "/" or Cmd/Ctrl+K
 * opens, arrows move through results, Enter opens, Esc closes.
 */
(() => {
  const dlg = document.getElementById('site-search');
  if (!dlg || typeof dlg.showModal !== 'function') return;

  const input = dlg.querySelector('#site-search-input');
  const list = dlg.querySelector('#site-search-results');
  const start = dlg.querySelector('[data-search-start]');
  const message = dlg.querySelector('[data-search-message]');
  const status = dlg.querySelector('[data-search-status]');
  let t = {};
  try { t = JSON.parse(dlg.dataset.i18n || '{}'); } catch (e) { /* keep defaults */ }
  const fill = (s, map) => String(s || '').replace(/\{(\w+)\}/g, (_, k) => (k in map ? map[k] : ''));

  // Header-menu pages, matched by name and shown above the full-text hits.
  const words = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  let pages = [];
  try { pages = JSON.parse(dlg.dataset.pages || '[]'); } catch (e) { /* none */ }
  // `a` holds extra words from the menu entry's `also` param (Customers → "case studies").
  pages.forEach((p, i) => { p.nw = words(p.n); p.w = p.nw.concat(words(p.a)); p.i = i; });
  const menuMatches = (q) => {
    const qs = words(q);
    if (!qs.length || q.trim().length < 2) return [];
    const seen = new Set();
    const hits = [];
    pages.forEach((p) => {
      if (seen.has(p.u) || !qs.every((t) => p.w.some((w) => w.startsWith(t)))) return;
      seen.add(p.u);
      // Exact name first, then names that start with the query, then menu order.
      const rank = p.nw.join(' ') === qs.join(' ') ? 0 : p.nw[0].startsWith(qs[0]) ? 1 : 2;
      hits.push({ p, rank });
    });
    return hits.sort((a, b) => a.rank - b.rank || a.p.i - b.p.i).slice(0, 4).map((h) => h.p);
  };

  let loading = null;
  let options = [];
  let active = -1;
  let query = '';
  let opener = null;

  const load = () => {
    if (!loading) {
      loading = import(dlg.dataset.pagefind)
        .then(async (pf) => {
          await pf.options({ excerptLength: 24 });
          pf.init();
          return pf;
        })
        .catch((err) => { loading = null; throw err; });
    }
    return loading;
  };

  const setActive = (i, scroll) => {
    options.forEach((o, j) => o.setAttribute('aria-selected', String(j === i)));
    active = i;
    if (i >= 0 && options[i]) {
      input.setAttribute('aria-activedescendant', options[i].id);
      if (scroll) options[i].scrollIntoView({ block: 'nearest' });
    } else {
      input.removeAttribute('aria-activedescendant');
    }
  };

  const view = (state) => {
    start.hidden = state !== 'start';
    list.hidden = state !== 'results';
    message.hidden = state !== 'message';
    input.setAttribute('aria-expanded', String(state === 'results'));
  };

  const reset = () => {
    list.replaceChildren();
    options = [];
    setActive(-1);
    status.textContent = '';
    view('start');
  };

  const showMessage = (lines, link) => {
    message.replaceChildren();
    lines.forEach((text, i) => {
      const p = document.createElement('p');
      if (i === 0) p.className = 'site-search__message-lead';
      p.textContent = text;
      message.append(p);
    });
    if (link) {
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text;
      message.append(a);
    }
    status.textContent = lines[0];
    list.replaceChildren();
    options = [];
    setActive(-1);
    view('message');
  };

  // Pagefind escapes page text and wraps hits in <mark>; keep only <mark>.
  const cleanExcerpt = (html) => String(html || '').replace(/<(?!\/?mark>)[^>]*>/g, '');

  const option = (href, type, title, excerpt, sub) => {
    const li = document.createElement('li');
    li.className = 'site-search__item' + (sub ? ' site-search__item--sub' : '');
    li.id = 'site-search-opt-' + options.length;
    li.setAttribute('role', 'option');
    li.setAttribute('aria-selected', 'false');
    const a = document.createElement('a');
    a.href = href;
    a.tabIndex = -1;
    if (type) {
      const k = document.createElement('span');
      k.className = 'site-search__type';
      k.textContent = type;
      a.append(k);
    }
    const h = document.createElement('span');
    h.className = 'site-search__title';
    h.textContent = title;
    a.append(h);
    if (excerpt) {
      const p = document.createElement('span');
      p.className = 'site-search__excerpt';
      p.innerHTML = cleanExcerpt(excerpt);
      a.append(p);
    }
    li.append(a);
    li.addEventListener('pointermove', () => {
      const i = options.indexOf(li);
      if (i !== active) setActive(i, false);
    });
    options.push(li);
    return li;
  };

  const run = async (q) => {
    query = q;
    if (!q.trim()) { reset(); return; }
    const menu = menuMatches(q);
    const shown = new Set(menu.map((p) => p.u));
    let data = [];
    let total = 0;
    try {
      const pf = await load();
      status.textContent = t.loading;
      const search = await pf.debouncedSearch(q, {}, 160);
      if (search === null || q !== query) return; // a newer keystroke won
      data = (await Promise.all(search.results.slice(0, 10).map((r) => r.data())))
        .filter((d) => !shown.has(d.url)).slice(0, 8);
      total = search.results.length;
    } catch (e) {
      // No index (e.g. a local `hugo server`): menu matches still work.
      if (!menu.length) { showMessage([t.error]); return; }
    }
    if (q !== query) return;
    if (!menu.length && !data.length) {
      showMessage([fill(t.none, { q: q.trim() }), t.hint], { href: t.askUrl, text: t.ask });
      return;
    }
    list.replaceChildren();
    options = [];
    menu.forEach((p) => list.append(option(p.u, p.t, p.n, '', false)));
    data.forEach((d, i) => {
      list.append(option(d.url, d.meta && d.meta.type, (d.meta && d.meta.title) || d.url, d.excerpt, false));
      // Long landings: point straight at the matching section, top hits only.
      if (i < 3 && Array.isArray(d.sub_results)) {
        d.sub_results
          .filter((s) => s.url && s.url !== d.url && s.url.indexOf('#') > -1 && s.title)
          .slice(0, 2)
          .forEach((s) => list.append(option(s.url, '', s.title, '', true)));
      }
    });
    view('results');
    setActive(0, false);
    const n = Math.max(total, menu.length + data.length);
    status.textContent = n === 1 ? t.one : fill(t.many, { n });
  };

  const open = () => {
    if (dlg.open) return;
    opener = document.activeElement;
    const menuToggle = document.querySelector('.mobile-menu-toggle[aria-expanded="true"]');
    if (menuToggle) menuToggle.click();
    dlg.showModal();
    document.documentElement.classList.add('is-search-open');
    input.focus();
    input.select();
    load().catch(() => {}); // warm the index while the user types
  };

  const close = () => { if (dlg.open) dlg.close(); };

  dlg.addEventListener('close', () => {
    document.documentElement.classList.remove('is-search-open');
    // The opener may sit in the mobile menu, which is closed by now.
    let target = opener;
    if (!target || !target.isConnected || target.offsetParent === null) {
      target = Array.from(document.querySelectorAll('[data-search-open]')).find((b) => b.offsetParent !== null);
    }
    if (target && target.focus) target.focus({ preventScroll: true });
  });

  document.querySelectorAll('[data-search-open]').forEach((b) => b.addEventListener('click', open));
  dlg.querySelectorAll('[data-search-close]').forEach((b) => b.addEventListener('click', close));
  // A click on the dimmed area outside the panel closes the dialog.
  dlg.addEventListener('click', (e) => { if (e.target === dlg) close(); });
  // Same-page anchors would otherwise leave the dialog open over the target.
  dlg.addEventListener('click', (e) => { if (e.target.closest('a[href]')) close(); });

  input.addEventListener('input', () => run(input.value));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (!options.length) return;
      e.preventDefault();
      const n = options.length;
      setActive(e.key === 'ArrowDown' ? (active + 1) % n : (active - 1 + n) % n, true);
    } else if (e.key === 'Enter') {
      const o = options[active];
      if (!o) return;
      e.preventDefault();
      const href = o.querySelector('a').href;
      if (e.metaKey || e.ctrlKey) {
        window.open(href, '_blank', 'noopener');
      } else {
        close();
        window.location.assign(href);
      }
    } else if (e.key === 'Escape') {
      // In a search field Esc would first clear the text; close in one press.
      e.preventDefault();
      close();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (dlg.open || e.defaultPrevented || e.altKey) return;
    const typing = e.target.closest && e.target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])');
    if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      open();
    } else if (e.key === '/' && !typing && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      open();
    }
  });
})();
