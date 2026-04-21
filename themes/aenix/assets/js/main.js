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

    const VIEWBOX_W = 1000;

    const generateCloud = () => {
      const baseY = 465 + rand(-6, 6);
      const N = 4;

      // N distinct radii drawn from N non-overlapping size buckets.
      const rMin = 60;
      const rMax = [210, 175, 145, 125][Math.min(N - 3, 3)];
      const step = (rMax - rMin) / N;
      const radii = [];
      for (let i = 0; i < N; i++) {
        radii.push(rMin + i * step + rand(0, step * 0.6));
      }
      // Sort ascending, then pin the two smallest to the edges so every
      // interior dome comes out taller than both corner domes. Interior
      // radii are shuffled among themselves; the two edge slots swap
      // randomly as well.
      radii.sort((a, b) => a - b);
      const edgeA = radii[0];
      const edgeB = radii[1];
      const interior = radii.slice(2);
      for (let i = interior.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [interior[i], interior[j]] = [interior[j], interior[i]];
      }
      const [leftEdge, rightEdge] = Math.random() < 0.5 ? [edgeA, edgeB] : [edgeB, edgeA];
      radii.length = 0;
      radii.push(leftEdge, ...interior, rightEdge);

      // Every circle's BOTTOM sits exactly on baseY, so nothing can ever
      // extend past the base. Centre: (cx, baseY - r).
      const allCircles = radii.map((r) => ({ r, cy: baseY - r }));

      // Packing factors — tighter when there are more domes so the
      // overall width stays inside the viewBox.
      const GAP = [0.82, 0.78, 0.72, 0.66][Math.min(N - 3, 3)];

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

      regenerateDims(circles, baseY);

      heroCloudSvg.querySelectorAll('.hc-grid line').forEach(el => {
        el.style.removeProperty('display');
        if (Math.random() < 0.18) el.style.display = 'none';
        else el.style.opacity = rand(0.55, 1);
      });
      heroCloudSvg.style.removeProperty('transform');
    };

    // Rebuild dimension arrows + labels so they track the actual circle layout.
    const regenerateDims = (circles, baseY) => {
      const dimsG = heroCloudSvg.querySelector('.hc-dims');
      const labelsG = heroCloudSvg.querySelector('.hc-labels');
      const ticksG = heroCloudSvg.querySelector('.hc-ticks');
      if (!dimsG || !labelsG || !ticksG) return;
      dimsG.innerHTML = '';
      labelsG.innerHTML = '';
      ticksG.innerHTML = '';

      const SVG = 'http://www.w3.org/2000/svg';
      const fmt = (n) => n.toFixed(1);
      const SCALE = 25; // px per display unit
      const label = (n) => {
        const v = n / SCALE;
        return v >= 10 ? v.toFixed(0) : v.toFixed(1);
      };
      const addDim = (d, dashed = false) => {
        const p = document.createElementNS(SVG, 'path');
        p.setAttribute('d', d);
        if (dashed) p.setAttribute('stroke-dasharray', '3 3');
        else { p.setAttribute('marker-start', 'url(#hc-arr)'); p.setAttribute('marker-end', 'url(#hc-arr)'); }
        dimsG.appendChild(p);
      };
      const addLabel = (x, y, text, opts = {}) => {
        const t = document.createElementNS(SVG, 'text');
        t.setAttribute('x', fmt(x));
        t.setAttribute('y', fmt(y));
        if (opts.anchor) t.setAttribute('text-anchor', opts.anchor);
        if (opts.size) t.setAttribute('font-size', opts.size);
        const rot = (opts.rotate || 0) + rand(-3, 3);
        t.setAttribute('transform', `rotate(${rot.toFixed(2)} ${fmt(x)} ${fmt(y)})`);
        t.textContent = text;
        labelsG.appendChild(t);
      };

      const tall = circles.reduce((m, c) => ((c.cy - c.r) < (m.cy - m.r) ? c : m), circles[0]);
      const minY = tall.cy - tall.r;
      const left = circles[0];
      const right = circles[circles.length - 1];
      const leftMostX = left.cx - left.r;
      const rightMostX = right.cx + right.r;

      // Top chain: distances between neighbouring circle centres.
      // Extension lines start exactly at the top of each dome.
      const topLine = minY - 40;
      for (const c of circles) {
        addDim(`M ${fmt(c.cx)} ${fmt(c.cy - c.r)} L ${fmt(c.cx)} ${fmt(topLine - 6)}`, true);
      }
      for (let i = 0; i < circles.length - 1; i++) {
        const a = circles[i], b = circles[i + 1];
        addDim(`M ${fmt(a.cx)} ${fmt(topLine)} L ${fmt(b.cx)} ${fmt(topLine)}`);
        addLabel((a.cx + b.cx) / 2, topLine - 10, label(b.cx - a.cx), { anchor: 'middle' });
      }

      // One side shows the TOTAL cloud height (apex of the tallest dome
      // to the base), the other shows the HEIGHT of the larger edge
      // circle. The bigger-edge dim is placed on its own side so the
      // label points at the circle it measures.
      const biggerEdge = left.r >= right.r ? left : right;
      const edgeOnLeft = biggerEdge === left;

      // Edge-circle dim — on the side of the bigger edge circle.
      const edgeApexY = biggerEdge.cy - biggerEdge.r;
      const DIM_OFFSET = 20;
      if (edgeOnLeft) {
        const leftDimX = leftMostX - DIM_OFFSET;
        addDim(`M ${fmt(biggerEdge.cx)} ${fmt(edgeApexY)} L ${fmt(leftDimX - 6)} ${fmt(edgeApexY)}`, true);
        addDim(`M ${fmt(biggerEdge.cx)} ${fmt(baseY)} L ${fmt(leftDimX - 6)} ${fmt(baseY)}`, true);
        addDim(`M ${fmt(leftDimX)} ${fmt(edgeApexY)} L ${fmt(leftDimX)} ${fmt(baseY)}`);
        addLabel(leftDimX - 10, (edgeApexY + baseY) / 2, label(baseY - edgeApexY), { anchor: 'middle', rotate: 270 });
      } else {
        const rightDimX = rightMostX + DIM_OFFSET;
        addDim(`M ${fmt(biggerEdge.cx)} ${fmt(edgeApexY)} L ${fmt(rightDimX + 6)} ${fmt(edgeApexY)}`, true);
        addDim(`M ${fmt(biggerEdge.cx)} ${fmt(baseY)} L ${fmt(rightDimX + 6)} ${fmt(baseY)}`, true);
        addDim(`M ${fmt(rightDimX)} ${fmt(edgeApexY)} L ${fmt(rightDimX)} ${fmt(baseY)}`);
        addLabel(rightDimX + 10, (edgeApexY + baseY) / 2, label(baseY - edgeApexY), { anchor: 'middle', rotate: 270 });
      }

      // Total cloud height — on the opposite side from the edge-circle dim.
      const totalAnchor = edgeOnLeft ? right : left;
      if (edgeOnLeft) {
        const rightDimX = rightMostX + DIM_OFFSET;
        addDim(`M ${fmt(tall.cx)} ${fmt(minY)} L ${fmt(rightDimX + 6)} ${fmt(minY)}`, true);
        addDim(`M ${fmt(totalAnchor.cx)} ${fmt(baseY)} L ${fmt(rightDimX + 6)} ${fmt(baseY)}`, true);
        addDim(`M ${fmt(rightDimX)} ${fmt(minY)} L ${fmt(rightDimX)} ${fmt(baseY)}`);
        addLabel(rightDimX + 10, (minY + baseY) / 2, label(baseY - minY), { anchor: 'middle', rotate: 270 });
      } else {
        const leftDimX = leftMostX - DIM_OFFSET;
        addDim(`M ${fmt(tall.cx)} ${fmt(minY)} L ${fmt(leftDimX - 6)} ${fmt(minY)}`, true);
        addDim(`M ${fmt(totalAnchor.cx)} ${fmt(baseY)} L ${fmt(leftDimX - 6)} ${fmt(baseY)}`, true);
        addDim(`M ${fmt(leftDimX)} ${fmt(minY)} L ${fmt(leftDimX)} ${fmt(baseY)}`);
        addLabel(leftDimX - 10, (minY + baseY) / 2, label(baseY - minY), { anchor: 'middle', rotate: 270 });
      }

      // Bottom: the flat-bottom segment measured between the outer
      // circles' 6-o'clock points (where the silhouette sits on baseY).
      const bottomY = baseY + DIM_OFFSET;
      addDim(`M ${fmt(left.cx)} ${fmt(baseY)} L ${fmt(left.cx)} ${fmt(bottomY + 6)}`, true);
      addDim(`M ${fmt(right.cx)} ${fmt(baseY)} L ${fmt(right.cx)} ${fmt(bottomY + 6)}`, true);
      addDim(`M ${fmt(left.cx)} ${fmt(bottomY)} L ${fmt(right.cx)} ${fmt(bottomY)}`);
      addLabel((left.cx + right.cx) / 2, bottomY + 22, label(right.cx - left.cx), { anchor: 'middle' });
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
    startDraw();

    if (!prefersReduced) {
      let raf = 0, returnRaf = 0, px = 0, py = 0;
      let curMx = null, curMy = null;
      const apply = () => {
        raf = 0;
        if (returnRaf) { cancelAnimationFrame(returnRaf); returnRaf = 0; }
        const r = heroCloud.getBoundingClientRect();
        curMx = px - r.left;
        curMy = py - r.top;
        heroCloud.style.setProperty('--mx', `${curMx}px`);
        heroCloud.style.setProperty('--my', `${curMy}px`);
      };
      heroCloudSvg.addEventListener('mousemove', (e) => {
        px = e.clientX; py = e.clientY;
        if (!raf) raf = requestAnimationFrame(apply);
      });
      heroCloudSvg.addEventListener('mouseleave', () => {
        if (raf) { cancelAnimationFrame(raf); raf = 0; }
        if (curMx === null) return;
        const r = heroCloud.getBoundingClientRect();
        const tx = r.width / 2;
        const ty = r.height / 2;
        const sx = curMx, sy = curMy;
        const start = performance.now();
        const dur = 1350;
        const tween = (now) => {
          const t = Math.min(1, (now - start) / dur);
          const e = 1 - Math.pow(1 - t, 3); // ease-out cubic
          curMx = sx + (tx - sx) * e;
          curMy = sy + (ty - sy) * e;
          heroCloud.style.setProperty('--mx', `${curMx}px`);
          heroCloud.style.setProperty('--my', `${curMy}px`);
          if (t < 1) {
            returnRaf = requestAnimationFrame(tween);
          } else {
            heroCloud.style.removeProperty('--mx');
            heroCloud.style.removeProperty('--my');
            curMx = curMy = null;
            returnRaf = 0;
          }
        };
        returnRaf = requestAnimationFrame(tween);
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
