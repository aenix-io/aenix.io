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
    const rand = (a, b) => a + Math.random() * (b - a);

    const DRAW_GROUPS = [
      { sel: '.hc-grid line',  delay: 0,    dur: 900,  step: 30 },
      { sel: '.hc-dims path',  delay: 300,  dur: 800,  step: 40 },
      { sel: '.hc-cloud path', delay: 700,  dur: 1800, step: 400 },
    ];
    const DRAW_TOTAL = 2600;
    const ERASE_DUR = 900;

    // Upper intersection point between two circles (smaller y in screen space).
    const upperIntersect = (c1, c2) => {
      const dx = c2.cx - c1.cx;
      const dy = c2.cy - c1.cy;
      const d = Math.hypot(dx, dy);
      if (d > c1.r + c2.r || d < Math.abs(c1.r - c2.r) || d === 0) return null;
      const a = (c1.r * c1.r - c2.r * c2.r + d * d) / (2 * d);
      const hSq = c1.r * c1.r - a * a;
      if (hSq < 0) return null;
      const h = Math.sqrt(hSq);
      const px = c1.cx + (a * dx) / d;
      const py = c1.cy + (a * dy) / d;
      // Perpendicular unit vector to the centerline
      const ux = -dy / d;
      const uy = dx / d;
      // Two candidates; pick the one with smaller y
      const y1 = py + h * uy;
      const y2 = py - h * uy;
      return y1 < y2
        ? { x: px + h * ux, y: y1 }
        : { x: px - h * ux, y: y2 };
    };

    const VIEWBOX_W = 800;

    const generateCloud = () => {
      const baseY = 465 + rand(-6, 6);
      const N = 3 + Math.floor(Math.random() * 4); // total domes 3..6

      // N distinct radii drawn from N non-overlapping size buckets. No
      // interior pinning, no peak ratio: any circle can be the biggest
      // and can sit anywhere in the chain.
      const rMin = 60;
      const rMax = [160, 145, 125, 110][Math.min(N - 3, 3)];
      const step = (rMax - rMin) / N;
      const radii = [];
      for (let i = 0; i < N; i++) {
        radii.push(rMin + i * step + rand(0, step * 0.6));
      }
      for (let i = radii.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [radii[i], radii[j]] = [radii[j], radii[i]];
      }

      // Every circle's BOTTOM sits exactly on baseY, so nothing can ever
      // extend past the base. Centre: (cx, baseY - r).
      const allCircles = radii.map((r) => ({ r, cy: baseY - r }));

      // Packing factors — tighter when there are more domes so the
      // overall width stays inside the viewBox.
      const GAP = [0.82, 0.78, 0.72, 0.68][Math.min(N - 3, 3)];

      const xPositions = [0];
      for (let i = 1; i < N; i++) {
        xPositions.push(xPositions[i - 1] + (allCircles[i - 1].r + allCircles[i].r) * GAP);
      }
      const totalW = xPositions[N - 1] + allCircles[0].r + allCircles[N - 1].r;

      const leftX = (VIEWBOX_W - totalW) / 2;
      const firstCx = leftX + allCircles[0].r;
      const circles = allCircles.map((c, i) => ({
        cx: firstCx + xPositions[i],
        cy: c.cy,
        r: c.r,
      }));

      // Outline traversal (clockwise on screen).
      //   flat bottom from the leftmost circle's 6 o'clock to the
      //   rightmost's 6 o'clock → arcs right-to-left over the top,
      //   ending back at the leftmost's 6 o'clock.
      // Edge circles (i = 0 or N-1) wrap >180° from baseY up past 12;
      // middle arcs stay <180° between neighbour intersections.
      const fmt = (n) => n.toFixed(1);
      let d = `M ${fmt(circles[0].cx)} ${fmt(baseY)}`;
      d += ` L ${fmt(circles[N - 1].cx)} ${fmt(baseY)}`;
      for (let i = N - 1; i >= 0; i--) {
        const c = circles[i];
        let ex, ey;
        if (i === 0) {
          ex = circles[0].cx;
          ey = baseY;
        } else {
          const inter = upperIntersect(circles[i - 1], c);
          if (inter) {
            ex = inter.x;
            ey = inter.y;
          } else {
            ex = c.cx - c.r;
            ey = c.cy;
          }
        }
        const isEdge = i === 0 || i === N - 1;
        const largeArc = isEdge ? 1 : 0;
        d += ` A ${fmt(c.r)} ${fmt(c.r)} 0 ${largeArc} 0 ${fmt(ex)} ${fmt(ey)}`;
      }
      d += ` Z`;

      const mainCloudPaths = heroCloudSvg.querySelectorAll('.hc-cloud path');
      if (mainCloudPaths[0]) mainCloudPaths[0].setAttribute('d', d);
      if (mainCloudPaths[1]) mainCloudPaths[1].setAttribute('d', d);

      heroCloudSvg.querySelectorAll('.hc-labels text').forEach(el => {
        const x = +el.getAttribute('x'), y = +el.getAttribute('y');
        el.setAttribute('transform', `rotate(${rand(-4, 4)} ${x} ${y})`);
      });
      heroCloudSvg.querySelectorAll('.hc-grid line').forEach(el => {
        el.style.removeProperty('display');
        if (Math.random() < 0.18) el.style.display = 'none';
        else el.style.opacity = rand(0.55, 1);
      });
      heroCloudSvg.querySelectorAll('.hc-ticks line').forEach(el => {
        el.style.removeProperty('display');
        if (Math.random() < 0.15) el.style.display = 'none';
      });
      heroCloudSvg.style.setProperty('transform', `rotate(${rand(-1.2, 1.2)}deg)`);
    };

    const setupDrawTransitions = () => {
      DRAW_GROUPS.forEach(g => {
        heroCloudSvg.querySelectorAll(g.sel).forEach((el, i) => {
          let len = 100;
          try { len = el.getTotalLength() || 100; } catch (_) {}
          el.style.setProperty('--hc-len', `${len}px`);
          if (!prefersReduced) {
            el.style.transition = `stroke-dashoffset ${g.dur}ms ease-out ${g.delay + i * g.step}ms`;
          }
        });
      });
    };

    const setupEraseTransitions = () => {
      heroCloudSvg.querySelectorAll('path, line').forEach(el => {
        el.style.transition = `stroke-dashoffset ${ERASE_DUR}ms ease-in`;
      });
    };

    const startDraw = () => {
      if (prefersReduced) {
        heroCloudSvg.classList.add('hc-animate');
        heroCloudSvg.querySelectorAll('.hc-labels text').forEach(t => t.classList.add('visible'));
        return;
      }
      setTimeout(() => {
        heroCloudSvg.classList.add('hc-animate');
      }, 50);
      setTimeout(() => {
        heroCloudSvg.querySelectorAll('.hc-labels text').forEach(t => t.classList.add('visible'));
      }, 1300);
    };

    generateCloud();
    setupDrawTransitions();
    startDraw();

    let busy = false;
    heroCloudSvg.addEventListener('click', () => {
      if (busy || prefersReduced) return;
      busy = true;
      setupEraseTransitions();
      heroCloudSvg.classList.remove('hc-animate');
      heroCloudSvg.querySelectorAll('.hc-labels text').forEach(t => t.classList.remove('visible'));
      setTimeout(() => {
        generateCloud();
        setupDrawTransitions();
        startDraw();
        setTimeout(() => { busy = false; }, DRAW_TOTAL);
      }, ERASE_DUR + 50);
    });

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
