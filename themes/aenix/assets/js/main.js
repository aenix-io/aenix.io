/* Aenix — Main JS v2 */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile menu ---- */
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  document.querySelectorAll('.mobile-nav-item.has-children > button').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.mobile-nav-item');
      item.classList.toggle('open');
      btn.setAttribute('aria-expanded', item.classList.contains('open'));
    });
  });

  /* ---- Hero parallax — slow, layered, premium ---- */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const hero = document.getElementById('hero');
  if (!hero) return;

  const layers = hero.querySelectorAll('[data-parallax]');
  if (!layers.length) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let active = false;
  let rafId = null;

  /* Very slow lerp = expensive, premium feel */
  const LERP = 0.035;
  const RANGE = 30;

  function tick() {
    currentX += (targetX - currentX) * LERP;
    currentY += (targetY - currentY) * LERP;

    /* Stop ticking when close enough */
    const dx = Math.abs(targetX - currentX);
    const dy = Math.abs(targetY - currentY);

    layers.forEach(el => {
      const d = parseFloat(el.dataset.parallax) || 0;
      if (d === 0) return;
      const tx = currentX * d * RANGE;
      const ty = currentY * d * RANGE;
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    });

    if (dx > 0.001 || dy > 0.001 || active) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = null;
    }
  }

  function ensureTicking() {
    if (!rafId) rafId = requestAnimationFrame(tick);
  }

  function onMove(e) {
    const rect = hero.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    ensureTicking();
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        active = true;
        hero.addEventListener('mousemove', onMove);
        ensureTicking();
      } else {
        active = false;
        hero.removeEventListener('mousemove', onMove);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(hero);
});
