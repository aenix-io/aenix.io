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

  /* ---- Reveal-on-scroll tagging ---- */
  // Structural content blocks get the theme .reveal treatment. Classes
  // are added here (not in markup), so without JS everything stays
  // visible; the reveal observer below picks them up.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealTargets = document.querySelectorAll([
      '.page-content > h2',
      '.band > h2',
      '.page-content > table',
      '.page-content > blockquote',
      '.seo-quick-facts',
      '.faq-item',
      '.trust-badges',
      '.pricing-cards-2', '.pricing-cards-3',
      '.capability-grid-3x3', '.trigger-grid-2x2', '.capability-grid',
      '.fit-grid', '.timeline-horizontal', '.lead-magnet-form',
      '.grid-2x2', '.gap-cards-2', '.cta-cards', '.cs-stats',
      '.replace-group', '.edition-selector', '.open-core-split',
      '.engagement-steps', '.cta-final', '.related-pages__card',
      '.landing-cta'
    ].join(','));
    revealTargets.forEach(el => el.classList.add('reveal'));
    // Observe here as well (the theme observer runs later; if anything
    // between fails, or IO never fires — throttled/headless contexts —
    // the failsafe below still un-gates every block).
    try {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
      revealTargets.forEach(el => obs.observe(el));
    } catch (e) { /* fall through to the failsafe */ }
    setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible'));
    }, 1800);
  }

  /* ---- Trust badge pills ---- */
  // Progressive enhancement: the markdown keeps the credentials as one
  // plain "A · B · C" line (SEO text untouched); JS splits it into
  // icon pills. Without JS the line renders as quiet centered text.
  (() => {
    const icon = (paths) =>
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
    const ICONS = {
      hex: icon('<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>'),
      shield: icon('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
      award: icon('<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>'),
      file: icon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>'),
      globe: icon('<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'),
      lock: icon('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),
      check: icon('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.27"/>')
    };
    const PICK = [
      [/cncf/i, 'hex'],
      [/openssf|best practices|soc\s?2|iso\s?\d|complian/i, 'shield'],
      [/kubernetes|certified|distribution/i, 'award'],
      [/apache|license|\bmit\b|\bgpl\b/i, 'file'],
      [/gdpr|sovereign|residenc|\beu\b|nis\s?2|dora/i, 'globe'],
      [/secur|encrypt|ssl|air.?gap/i, 'lock']
    ];
    document.querySelectorAll('.trust-badges').forEach(el => {
      const text = el.textContent;
      if (!text || !text.includes('·')) return;
      const parts = text.split('·').map(s => s.trim()).filter(Boolean);
      if (parts.length < 2) return;
      el.textContent = '';
      parts.forEach(label => {
        const pill = document.createElement('span');
        pill.className = 'trust-badge';
        const hit = PICK.find(([re]) => re.test(label));
        pill.innerHTML = ICONS[hit ? hit[1] : 'check'];
        pill.appendChild(document.createTextNode(label));
        el.appendChild(pill);
      });
    });
  })();

  /* ---- Answer clamp (Show more) ---- */
  // Progressive enhancement: the full GEO answer is always in the DOM
  // (crawlers and no-JS visitors read all of it). Only when the text
  // actually overflows ~7 lines do we clamp it and reveal a toggle.
  document.querySelectorAll('.answer-clamp').forEach(clamp => {
    const body = clamp.querySelector('.answer-clamp__body');
    const btn = clamp.querySelector('.answer-clamp__toggle');
    if (!body || !btn) return;
    clamp.classList.add('is-clampable');
    requestAnimationFrame(() => {
      // If clamping does not actually hide anything, drop it and show full text.
      if (body.scrollHeight - body.clientHeight < 6) {
        clamp.classList.remove('is-clampable');
        return;
      }
      const label = btn.querySelector('.answer-clamp__label');
      btn.addEventListener('click', () => {
        const open = clamp.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (label) label.textContent = open ? 'Show less' : 'Show more';
      });
    });
  });

  /* ---- Desktop dropdown keyboard support ---- */
  // Panels open via :focus-within (CSS); Escape moves focus back to the
  // toggle and drops it so the panel closes without tabbing through
  // every remaining link.
  document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
    item.addEventListener('keydown', e => {
      if (e.key === 'Escape' && item.contains(document.activeElement)) {
        const toggle = item.querySelector('.dropdown-toggle');
        e.stopPropagation();
        if (toggle) toggle.focus();
        document.activeElement.blur();
      }
    });
  });

  /* ---- Edition selector tabs (homepage) ---- */
  // Progressive enhancement: without JS the six edition cards render as
  // a stacked grid; with JS the list becomes a vertical tablist showing
  // one card at a time. All card content stays in the DOM.
  document.querySelectorAll('[data-edition-tabs]').forEach(root => {
    const tabs = [...root.querySelectorAll('[role="tab"]')];
    const panels = [...root.querySelectorAll('[role="tabpanel"]')];
    if (!tabs.length || tabs.length !== panels.length) return;
    root.classList.add('is-tabbed');
    const select = (i, focus) => {
      tabs.forEach((t, j) => {
        t.setAttribute('aria-selected', j === i);
        t.tabIndex = j === i ? 0 : -1;
        panels[j].hidden = j !== i;
      });
      if (focus) tabs[i].focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', e => {
        const dir = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
        if (dir) { e.preventDefault(); select((i + dir + tabs.length) % tabs.length, true); }
        else if (e.key === 'Home') { e.preventDefault(); select(0, true); }
        else if (e.key === 'End') { e.preventDefault(); select(tabs.length - 1, true); }
      });
    });
    select(0);
  });

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

    const VIEWBOX_W = 1600;

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
      regenerateCallouts(circles, baseY);

      heroCloudSvg.querySelectorAll('.hc-grid line').forEach(el => {
        el.style.removeProperty('display');
        if (Math.random() < 0.18) el.style.display = 'none';
        else el.style.opacity = rand(0.55, 1);
      });
      heroCloudSvg.style.removeProperty('transform');
    };

    // Leader-line callouts: dot inside a dome, bent stick out to a label.
    const CALLOUT_LABELS = ['kubernetes', 'databases', 'virtualization', 'billing', 'AI'];
    const regenerateCallouts = (circles, baseY) => {
      const g = heroCloudSvg.querySelector('.hc-callouts');
      if (!g) return;
      g.innerHTML = '';
      const SVG = 'http://www.w3.org/2000/svg';
      const fmt = (n) => n.toFixed(1);

      const minY = Math.min(...circles.map((c) => c.cy - c.r));
      const cy = (minY + baseY) / 2;

      // Five slots spread around the cloud: two on the left, one up top,
      // two on the right — drawn as L-shaped leader lines with a knee.
      // slot.side: 'left' | 'top' | 'right'.
      const topY = Math.max(30, minY - 80);
      // Top callouts anchor above a real dome (not at the midpoint between
      // two domes), so the vertical leader never lines up with a top-chain
      // dimension label (which live at the midpoints).
      const topDome = circles[Math.floor(rand(0, circles.length))];
      const jx = () => rand(-25, 25);
      const jy = () => rand(-15, 15);
      const jSeg = () => 80 + Math.random() * 120; // 80..200
      // Keep left/right slots out of the mid-y band where the vertical
      // dimension labels sit (roughly midY ± 50).
      const upperY = () => Math.max(topY + 10, cy - 110 + jy());
      const lowerY = () => Math.min(baseY - 50, cy + 110 + jy());
      const slots = [
        { side: 'left',  lx: 220             + jx(), ly: upperY(),        seg: jSeg() },
        { side: 'left',  lx: 240             + jx(), ly: lowerY(),        seg: jSeg() },
        { side: 'top',   lx: topDome.cx      + jx(), ly: topY + jy() * 0.5, seg: jSeg() },
        { side: 'right', lx: VIEWBOX_W - 240 + jx(), ly: upperY(),        seg: jSeg() },
        { side: 'right', lx: VIEWBOX_W - 220 + jx(), ly: lowerY(),        seg: jSeg() },
      ];
      // Shuffle the labels so the order of names around the cloud varies.
      const shuffled = CALLOUT_LABELS.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      shuffled.forEach((name, i) => {
        const slot = slots[i];

        // Pick the dome whose centre is nearest to the label endpoint so
        // the dot lands inside an actually-cloudy part of the shape.
        let best = circles[0];
        let bestDist = Infinity;
        for (const c of circles) {
          const d = Math.hypot(c.cx - slot.lx, c.cy - slot.ly);
          if (d < bestDist) { bestDist = d; best = c; }
        }
        // Dot: offset from dome centre, toward the label, but kept inside.
        const vX = slot.lx - best.cx;
        const vY = slot.ly - best.cy;
        const vLen = Math.hypot(vX, vY) || 1;
        const dotOff = best.r * (0.25 + rand(0, 0.2));
        const dotX = best.cx + (vX / vLen) * dotOff;
        const dotY = best.cy + (vY / vLen) * dotOff;

        // Knee: elbow point. The terminal segment is horizontal (for
        // left/right slots) or vertical (for the top slot). Clamp the
        // segment length so the knee always sits on the LABEL side of
        // the dot — this keeps the angle at the elbow obtuse (>90°)
        // instead of collapsing into an acute V.
        let kneeX, kneeY;
        let seg = slot.seg;
        if (slot.side === 'left') {
          // Knee must be left of the dot; keep a ≥20px gap for a clearly
          // obtuse angle.
          const maxSeg = dotX - slot.lx - 20;
          seg = Math.max(30, Math.min(seg, maxSeg));
          kneeX = slot.lx + seg;
          kneeY = slot.ly;
        } else if (slot.side === 'right') {
          const maxSeg = slot.lx - dotX - 20;
          seg = Math.max(30, Math.min(seg, maxSeg));
          kneeX = slot.lx - seg;
          kneeY = slot.ly;
        } else {
          // Top slot: knee sits below the label, but must stay above the dot.
          const maxSeg = dotY - slot.ly - 20;
          seg = Math.max(30, Math.min(seg, maxSeg));
          kneeX = slot.lx;
          kneeY = slot.ly + seg;
        }

        // Leader path: dot → knee → label endpoint.
        const line = document.createElementNS(SVG, 'path');
        line.setAttribute('d', `M ${fmt(dotX)} ${fmt(dotY)} L ${fmt(kneeX)} ${fmt(kneeY)} L ${fmt(slot.lx)} ${fmt(slot.ly)}`);
        g.appendChild(line);

        // Dot at the inside end
        const dot = document.createElementNS(SVG, 'circle');
        dot.setAttribute('cx', fmt(dotX));
        dot.setAttribute('cy', fmt(dotY));
        dot.setAttribute('r', '3.5');
        dot.setAttribute('fill', 'currentColor');
        dot.setAttribute('stroke', 'none');
        g.appendChild(dot);

        // Label text at the outer endpoint, sitting next to the terminal segment.
        const anchor = slot.side === 'left' ? 'end' : slot.side === 'right' ? 'start' : 'middle';
        const offX = slot.side === 'left' ? -8 : slot.side === 'right' ? 8 : 0;
        const offY = slot.side === 'top' ? -8 : 6;
        const t = document.createElementNS(SVG, 'text');
        t.setAttribute('x', fmt(slot.lx + offX));
        t.setAttribute('y', fmt(slot.ly + offY));
        t.setAttribute('text-anchor', anchor);
        t.setAttribute('fill', 'currentColor');
        t.setAttribute('stroke', 'none');
        t.setAttribute('font-family', "'JetBrains Mono', 'Inter', system-ui, sans-serif");
        t.setAttribute('font-size', '18');
        t.setAttribute('font-weight', '500');
        t.setAttribute('letter-spacing', '1');
        t.textContent = name.toUpperCase();
        g.appendChild(t);
      });
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

    // Size and visibility sync with the hero title. The cloud silhouette
    // (without callouts) must stay narrower than "We build clouds!"; if
    // there isn't enough vertical room above the title, hide the cloud.
    const heroTitle = document.querySelector('.hero-title');
    const syncCloudSize = () => {
      if (!heroTitle) return;
      const titleWidth = heroTitle.offsetWidth;
      if (!titleWidth) return;
      // Cloud silhouette ≈ 700 of 1600 viewBox units (≈ 0.44 of container).
      // Picking container = 1.9 × title width keeps cloud ≈ 0.83 × title.
      const containerW = Math.round(titleWidth * 1.9);
      heroCloud.style.width = `${containerW}px`;

      // Measure and hide if the cloud would punch through the top of the viewport.
      // Temporarily ensure it's visible to measure.
      const wasHidden = heroCloud.style.display === 'none';
      if (wasHidden) heroCloud.style.display = '';
      const rect = heroCloud.getBoundingClientRect();
      const overflow = rect.top < 20;
      heroCloud.style.display = overflow ? 'none' : '';
    };
    syncCloudSize();
    window.addEventListener('resize', syncCloudSize, { passive: true });

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

/* Quote carousel — rotate testimonials, dots, pause on hover/focus, respect reduced-motion */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cars = document.querySelectorAll('[data-quote-carousel]');
  Array.prototype.forEach.call(cars, function (car) {
    var slides = Array.prototype.slice.call(car.querySelectorAll('.quote-carousel__slide'));
    var dots = Array.prototype.slice.call(car.querySelectorAll('.quote-carousel__dot'));
    if (slides.length < 2) return;
    var i = 0, timer = null, delay = parseInt(car.getAttribute('data-autoplay'), 10) || 6500;
    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) {
        var on = k === i;
        s.classList.toggle('is-active', on);
        if (on) { s.removeAttribute('aria-hidden'); } else { s.setAttribute('aria-hidden', 'true'); }
      });
      dots.forEach(function (d, k) {
        var on = k === i;
        d.classList.toggle('is-active', on);
        d.setAttribute('aria-selected', on ? 'true' : 'false');
      });
    }
    function start() { if (reduce || timer) return; timer = setInterval(function () { show(i + 1); }, delay); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    dots.forEach(function (d) {
      d.addEventListener('click', function () { show(parseInt(d.getAttribute('data-goto'), 10)); stop(); start(); });
    });
    car.addEventListener('mouseenter', stop);
    car.addEventListener('mouseleave', start);
    car.addEventListener('focusin', stop);
    car.addEventListener('focusout', start);
    show(0); /* always lead with the first testimonial in data order */
    start();
  });
})();
