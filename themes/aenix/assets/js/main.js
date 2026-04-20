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

    const smoothClosed = (pts) => {
      const n = pts.length;
      const mx0 = (pts[n-1].x + pts[0].x) / 2;
      const my0 = (pts[n-1].y + pts[0].y) / 2;
      let d = `M ${mx0.toFixed(1)} ${my0.toFixed(1)}`;
      for (let i = 0; i < n; i++) {
        const cur = pts[i];
        const nxt = pts[(i + 1) % n];
        const ex = (cur.x + nxt.x) / 2;
        const ey = (cur.y + nxt.y) / 2;
        d += ` Q ${cur.x.toFixed(1)} ${cur.y.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
      }
      return d + ' Z';
    };

    const smoothOpen = (pts) => {
      if (pts.length < 2) return '';
      let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
      for (let i = 1; i < pts.length - 1; i++) {
        const cur = pts[i], nxt = pts[i+1];
        const ex = (cur.x + nxt.x) / 2;
        const ey = (cur.y + nxt.y) / 2;
        d += ` Q ${cur.x.toFixed(1)} ${cur.y.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
      }
      const last = pts[pts.length - 1];
      d += ` L ${last.x.toFixed(1)} ${last.y.toFixed(1)}`;
      return d;
    };

    const DRAW_GROUPS = [
      { sel: '.hc-grid line',  delay: 0,    dur: 900,  step: 30 },
      { sel: '.hc-dims path',  delay: 300,  dur: 800,  step: 40 },
      { sel: '.hc-cloud path', delay: 700,  dur: 1800, step: 400 },
      { sel: '.hc-seams path', delay: 2200, dur: 700,  step: 80 },
      { sel: '.hc-back path',  delay: 2200, dur: 700,  step: 0 },
      { sel: '.hc-hatch line', delay: 2600, dur: 500,  step: 40 },
    ];
    const DRAW_TOTAL = 3200;
    const ERASE_DUR = 900;

    const generateCloud = () => {
      const baseY = 465 + rand(-10, 10);
      const leftX = 80 + rand(-10, 10);
      const rightX = 720 + rand(-10, 10);
      const minY = 155 + rand(-20, 35);
      const N = 3 + Math.floor(Math.random() * 3);

      const cloudPts = [];
      cloudPts.push({x: leftX, y: baseY + rand(-5, 5)});
      cloudPts.push({x: leftX - 25, y: baseY - 90 + rand(-15, 15)});
      cloudPts.push({x: leftX + 20, y: baseY - 175 + rand(-30, 30)});
      const spanLeft = leftX + 80;
      const spanRight = rightX - 80;
      const span = spanRight - spanLeft;
      for (let i = 0; i < N; i++) {
        const t = (i + 0.5) / N;
        const x = spanLeft + t * span + rand(-15, 15);
        const y = minY + rand(0, 55);
        cloudPts.push({x, y});
        if (i < N - 1) {
          const vt = (i + 1) / N;
          const vx = spanLeft + vt * span + rand(-10, 10);
          const vy = y + 30 + rand(0, 25);
          cloudPts.push({x: vx, y: vy});
        }
      }
      cloudPts.push({x: rightX - 20, y: baseY - 175 + rand(-30, 30)});
      cloudPts.push({x: rightX + 25, y: baseY - 90 + rand(-15, 15)});
      cloudPts.push({x: rightX, y: baseY + rand(-5, 5)});

      const cloudD = smoothClosed(cloudPts);
      const ghostD = smoothClosed(cloudPts.map(p => ({x: p.x + rand(-3, 3), y: p.y + rand(-3, 3)})));
      const mainCloudPaths = heroCloudSvg.querySelectorAll('.hc-cloud path');
      if (mainCloudPaths[0]) mainCloudPaths[0].setAttribute('d', cloudD);
      if (mainCloudPaths[1]) mainCloudPaths[1].setAttribute('d', ghostD);

      const backPaths = heroCloudSvg.querySelectorAll('.hc-back path');
      if (backPaths.length) {
        const bN = 3 + Math.floor(Math.random() * 3);
        const bStart = leftX + 160 + rand(-20, 20);
        const bEnd = rightX - 160 + rand(-20, 20);
        const bSpan = bEnd - bStart;
        const bMinY = minY + 30;
        const backPts = [];
        backPts.push({x: bStart, y: baseY - 130 + rand(-10, 10)});
        for (let i = 0; i < bN; i++) {
          const t = (i + 0.5) / bN;
          const x = bStart + t * bSpan + rand(-10, 10);
          const y = bMinY + rand(0, 50);
          backPts.push({x, y});
          if (i < bN - 1) {
            const vt = (i + 1) / bN;
            backPts.push({x: bStart + vt * bSpan, y: y + 25 + rand(0, 15)});
          }
        }
        backPts.push({x: bEnd, y: baseY - 130 + rand(-10, 10)});
        backPaths[0].setAttribute('d', smoothOpen(backPts));
        for (let i = 1; i < backPaths.length; i++) backPaths[i].setAttribute('d', '');
      }

      const seamPath = heroCloudSvg.querySelector('.hc-seam path');
      if (seamPath) {
        const seamPts = [];
        const sStart = leftX + 60 + rand(-10, 10);
        const sEnd = rightX - 60 + rand(-10, 10);
        const steps = 5 + Math.floor(Math.random() * 3);
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          seamPts.push({
            x: sStart + t * (sEnd - sStart),
            y: baseY - 65 + rand(-20, 20),
          });
        }
        seamPath.setAttribute('d', smoothOpen(seamPts));
      }

      heroCloudSvg.querySelectorAll('.hc-hatch line').forEach(el => {
        el.style.removeProperty('display');
        const x = (+el.getAttribute('x1') + +el.getAttribute('x2')) / 2;
        const y = (+el.getAttribute('y1') + +el.getAttribute('y2')) / 2;
        el.setAttribute('transform', `rotate(${rand(-8, 8)} ${x} ${y}) translate(${rand(-3, 3)} ${rand(-3, 3)})`);
      });
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
