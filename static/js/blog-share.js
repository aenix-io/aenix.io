/* blog-share.js — copy-link button. Other share links are plain
 * anchors (open in new tab) and don't need JS.
 */
(function () {
  var btn = document.querySelector('[data-share="copy"]');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var url = btn.dataset.shareUrl || window.location.href;
    var done = function () {
      var prev = btn.textContent;
      btn.textContent = '✓';
      btn.classList.add('blog-share__link--copied');
      setTimeout(function () {
        btn.textContent = prev;
        btn.classList.remove('blog-share__link--copied');
      }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(done).catch(function () {});
    } else {
      // Legacy fallback
      var ta = document.createElement('textarea');
      ta.value = url;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch (e) {}
      document.body.removeChild(ta);
    }
  });
})();
