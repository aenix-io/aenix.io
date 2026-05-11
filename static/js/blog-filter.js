/* blog-filter.js — client-side filter for /blog/ listing.
 * Reads data-post-type and data-post-topics on .blog-card; toggles via
 * data-filter-group + data-filter-value chips. AND-logic across groups.
 */
(function () {
  var filters = document.querySelector('[data-blog-filters]');
  if (!filters) return;

  var grid = document.querySelector('[data-blog-grid]');
  var empty = document.querySelector('[data-blog-empty]');
  var cards = grid ? grid.querySelectorAll('.blog-card') : [];

  // Active filter values per group
  var active = { type: '', topic: '' };

  function applyFilters() {
    var visible = 0;
    cards.forEach(function (card) {
      var typeOk = !active.type || card.dataset.postType === active.type;
      var topics = (card.dataset.postTopics || '').split(/\s+/).filter(Boolean);
      var topicOk = !active.topic || topics.indexOf(active.topic) !== -1;
      var show = typeOk && topicOk;
      card.hidden = !show;
      if (show) visible++;
    });
    if (empty) empty.hidden = visible !== 0;
  }

  filters.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-filter-group]');
    if (!btn) return;
    var group = btn.dataset.filterGroup;
    var value = btn.dataset.filterValue;
    active[group] = value;
    // Toggle active chip in this group
    filters.querySelectorAll('[data-filter-group="' + group + '"]').forEach(function (b) {
      b.classList.toggle('blog-chip--active', b === btn);
    });
    applyFilters();
  });
})();
