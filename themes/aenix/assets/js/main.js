/* Aenix — Main JS */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile menu toggle ---- */
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuToggle && mobileMenu) {
    const setMenu = (open) => {
      mobileMenu.classList.toggle('open', open);
      menuToggle.setAttribute('aria-expanded', open);
      mobileMenu.setAttribute('aria-hidden', !open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    menuToggle.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) setMenu(false);
    });
    // Close when a nav link is tapped (so in-page navigation feels right)
    mobileMenu.querySelectorAll('a[href]').forEach(a => {
      a.addEventListener('click', () => setMenu(false));
    });
  }

  /* ---- Mobile submenu toggles ---- */
  document.querySelectorAll('.mobile-nav-item.has-children > button').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.mobile-nav-item');
      item.classList.toggle('open');
      btn.setAttribute('aria-expanded', item.classList.contains('open'));
    });
  });

  /* ---- Header scroll state ---- */
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('header-scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  /* ---- Hero blueprint cloud ---- */
  const heroCloud = document.querySelector('.hero-cloud');
  const heroCloudSvg = heroCloud && heroCloud.querySelector('.hero-cloud-svg');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (heroCloudSvg) {
    const groups = [
      { sel: '.hc-grid line',  delay: 0,    dur: 900,  step: 30 },
      { sel: '.hc-dims path',  delay: 300,  dur: 800,  step: 40 },
      { sel: '.hc-cloud path', delay: 700,  dur: 1800, step: 400 },
      { sel: '.hc-seams path', delay: 2200, dur: 700,  step: 80 },
      { sel: '.hc-back path',  delay: 2200, dur: 700,  step: 0 },
      { sel: '.hc-hatch line', delay: 2600, dur: 500,  step: 40 },
    ];
    groups.forEach(g => {
      heroCloudSvg.querySelectorAll(g.sel).forEach((el, i) => {
        let len = 100;
        try { len = el.getTotalLength() || 100; } catch (_) {}
        el.style.setProperty('--hc-len', `${len}px`);
        if (!prefersReduced) {
          el.style.transition = `stroke-dashoffset ${g.dur}ms ease-out ${g.delay + i * g.step}ms`;
        }
      });
    });
    if (prefersReduced) {
      heroCloudSvg.classList.add('hc-animate');
      heroCloudSvg.querySelectorAll('.hc-labels text').forEach(t => t.classList.add('visible'));
    } else {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        heroCloudSvg.classList.add('hc-animate');
      }));
      setTimeout(() => {
        heroCloudSvg.querySelectorAll('.hc-labels text').forEach(t => t.classList.add('visible'));
      }, 1300);
    }

    const hero = document.getElementById('hero');
    if (hero && !prefersReduced) {
      let raf = 0, px = 0, py = 0;
      const apply = () => {
        raf = 0;
        const r = heroCloud.getBoundingClientRect();
        heroCloud.style.setProperty('--mx', `${px - r.left}px`);
        heroCloud.style.setProperty('--my', `${py - r.top}px`);
      };
      hero.addEventListener('mousemove', (e) => {
        px = e.clientX; py = e.clientY;
        if (!raf) raf = requestAnimationFrame(apply);
      });
      hero.addEventListener('mouseleave', () => {
        heroCloud.style.removeProperty('--mx');
        heroCloud.style.removeProperty('--my');
      });
    }
  }

  /* ---- Reveal animations on scroll ---- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => revealObs.observe(el));
  }

  /* ---- Image lightbox ---- */
  const lightboxSelector = '.page-content img, .two-cols-image img';
  const lightboxTargets = document.querySelectorAll(lightboxSelector);
  if (lightboxTargets.length > 0) {
    // Build overlay once
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img class="lightbox-image" alt="">';
    document.body.appendChild(overlay);
    const overlayImg = overlay.querySelector('.lightbox-image');
    const close = () => {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    };
    overlay.addEventListener('click', e => { if (e.target === overlay || e.target.classList.contains('lightbox-close')) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    lightboxTargets.forEach(img => {
      img.classList.add('lightbox-trigger');
      img.addEventListener('click', () => {
        overlayImg.src = img.src;
        overlayImg.alt = img.alt || '';
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
  }
});
