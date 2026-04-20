/* Aenix — Blog RSS loader (client-side) */

(function () {
  const PROXY = 'https://api.rss2json.com/v1/api.json?rss_url=';
  const MAX_ITEMS = 12;
  const EXCERPT_LEN = 180;

  const root = document.querySelector('[data-blog-feed]');
  if (!root) return;

  const feedUrl = root.getAttribute('data-blog-feed');
  const sourceLabel = root.getAttribute('data-blog-source-label') || 'Medium';

  const statusEl = root.querySelector('[data-blog-status]');
  const gridEl = root.querySelector('[data-blog-grid]');
  const fallbackEl = root.querySelector('[data-blog-fallback]');
  const footerEl = root.querySelector('[data-blog-footer]');

  const show = (el) => el && el.removeAttribute('hidden');
  const hide = (el) => el && el.setAttribute('hidden', '');

  const formatDate = (raw) => {
    const d = new Date(raw);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html || '';
    return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
  };

  const extractImage = (item) => {
    if (item.thumbnail && /^https?:\/\//.test(item.thumbnail)) return item.thumbnail;
    const match = /<img[^>]+src=["']([^"']+)["']/i.exec(item.content || item.description || '');
    return match ? match[1] : '';
  };

  const buildExcerpt = (item) => {
    const text = stripHtml(item.description || item.content || '');
    if (!text) return '';
    if (text.length <= EXCERPT_LEN) return text;
    return text.slice(0, EXCERPT_LEN).replace(/\s+\S*$/, '') + '…';
  };

  const placeholderSvg = `
    <div class="card-image card-image--placeholder" aria-hidden="true">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    </div>`;

  const renderCard = (item) => {
    const title = item.title || 'Untitled';
    const link = item.link || '#';
    const date = formatDate(item.pubDate);
    const author = item.author ? item.author.replace(/^.*<|>.*$/g, '').trim() : '';
    const excerpt = buildExcerpt(item);
    const image = extractImage(item);

    const article = document.createElement('article');
    article.className = 'card blog-card';

    const imageHtml = image
      ? `<a class="blog-card-image-link" href="${link}" target="_blank" rel="noopener">
           <div class="card-image"><img src="${image}" alt="" loading="lazy" referrerpolicy="no-referrer"></div>
         </a>`
      : `<a class="blog-card-image-link" href="${link}" target="_blank" rel="noopener">${placeholderSvg}</a>`;

    article.innerHTML = `
      ${imageHtml}
      <div class="card-body blog-card-body">
        ${date || author ? `<div class="blog-card-meta">
          ${date ? `<time datetime="${new Date(item.pubDate).toISOString()}">${date}</time>` : ''}
          ${author ? `<span class="blog-card-author">${author}</span>` : ''}
        </div>` : ''}
        <h2 class="card-title blog-card-title">
          <a href="${link}" target="_blank" rel="noopener">${title}</a>
        </h2>
        ${excerpt ? `<p class="card-description blog-card-excerpt">${excerpt}</p>` : ''}
        <a class="blog-card-cta" href="${link}" target="_blank" rel="noopener">
          Read on ${sourceLabel}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3.5 1.5h7v7M10.5 1.5L1.5 10.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>`;

    return article;
  };

  const renderItems = (items) => {
    gridEl.innerHTML = '';
    items.slice(0, MAX_ITEMS).forEach((item) => {
      gridEl.appendChild(renderCard(item));
    });
    hide(statusEl);
    show(gridEl);
    show(footerEl);
  };

  const fail = () => {
    hide(statusEl);
    hide(gridEl);
    show(fallbackEl);
  };

  const url = PROXY + encodeURIComponent(feedUrl);

  fetch(url, { headers: { Accept: 'application/json' } })
    .then((res) => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then((data) => {
      if (!data || data.status !== 'ok' || !Array.isArray(data.items) || data.items.length === 0) {
        throw new Error('Invalid feed response');
      }
      renderItems(data.items);
    })
    .catch(fail);
})();
