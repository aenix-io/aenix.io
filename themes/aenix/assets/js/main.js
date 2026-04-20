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

    const generateCloud = () => {
      const baseY = 465 + rand(-6, 6);
      const leftX = 90 + rand(-6, 6);
      const rightX = 710 + rand(-6, 6);
      const pillH = 110 + rand(-6, 6);
      const topLine = baseY - pillH;
      const cornerR = pillH / 2;
      const N = 4;

      // Four overlapping circles on top of a pill-shaped base. Radii follow
      // a small → medium → BIG → medium-small profile, matching the classic
      // cartoon cloud reference. The base is a rectangle with fully rounded
      // left/right sides (semicircular end caps, radius cornerR).
      const radii = [
        58 + rand(-6, 6),
        82 + rand(-8, 8),
        125 + rand(-10, 10),
        72 + rand(-8, 8),
      ];
      const xRatios = [0.12, 0.32, 0.62, 0.88];

      // The top of the pill runs between (leftX + cornerR, topLine) and
      // (rightX - cornerR, topLine); humps sit on this flat segment.
      const humpLeftX = leftX + cornerR;
      const humpRightX = rightX - cornerR;
      const humpSpan = humpRightX - humpLeftX;

      const circles = xRatios.map((t, i) => ({
        cx: humpLeftX + t * humpSpan + rand(-5, 5),
        cy: topLine, // all on the top line for clean merge with pill
        r: radii[i],
      }));
      // Lock first/last circle positions so their left/right extents
      // coincide exactly with the pill's flat-top ends.
      circles[0].cx = humpLeftX + circles[0].r;
      circles[N - 1].cx = humpRightX - circles[N - 1].r;

      // Traverse the silhouette clockwise on screen. Every arc uses
      // sweep-flag=0 (counter-clockwise on screen when walked forward),
      // which is what "bulging outward" means at every point on a convex
      // outer boundary.
      const fmt = (n) => n.toFixed(1);
      let d = `M ${fmt(humpLeftX)} ${fmt(baseY)}`;
      // Flat bottom
      d += ` L ${fmt(humpRightX)} ${fmt(baseY)}`;
      // Right rounded end cap (bottom-right → top-right via rightX)
      d += ` A ${fmt(cornerR)} ${fmt(cornerR)} 0 0 0 ${fmt(humpRightX)} ${fmt(topLine)}`;
      // Humps, walked right → left over the top
      for (let i = N - 1; i >= 0; i--) {
        const c = circles[i];
        let ex, ey;
        if (i === 0) {
          ex = humpLeftX;
          ey = topLine;
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
        d += ` A ${fmt(c.r)} ${fmt(c.r)} 0 0 0 ${fmt(ex)} ${fmt(ey)}`;
      }
      // Left rounded end cap (top-left → bottom-left via leftX)
      d += ` A ${fmt(cornerR)} ${fmt(cornerR)} 0 0 0 ${fmt(humpLeftX)} ${fmt(baseY)}`;
      d += ` Z`;

      const mainCloudPaths = heroCloudSvg.querySelectorAll('.hc-cloud path');
      if (mainCloudPaths[0]) mainCloudPaths[0].setAttribute('d', d);
      if (mainCloudPaths[1]) mainCloudPaths[1].setAttribute('d', d);

      // Decorative inner curls between adjacent domes.
      const backPaths = heroCloudSvg.querySelectorAll('.hc-back path');
      for (let j = 0; j < backPaths.length; j++) {
        if (j >= N - 1) {
          backPaths[j].setAttribute('d', '');
          continue;
        }
        const p1 = circles[j];
        const p2 = circles[j + 1];
        const vx = (p1.cx + p2.cx) / 2 + rand(-6, 6);
        const vy = Math.max(p1.cy, p2.cy) + 35 + rand(0, 8);
        const half = Math.min(26, (p2.cx - p1.cx) / 3) + rand(-4, 4);
        const dPath = `M ${fmt(vx - half)} ${fmt(vy - 8)} Q ${fmt(vx)} ${fmt(vy + 22)} ${fmt(vx + half)} ${fmt(vy - 8)}`;
        backPaths[j].setAttribute('d', dPath);
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
            y: baseY - 40 + rand(-10, 10),
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
