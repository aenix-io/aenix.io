/* Aenix — Interactive Particle Field
   Noise-driven particles with cursor attraction,
   connection lines, and layered depth.
   Premium infrastructure feel. */

(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.getElementById('flow-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, dpr;
  let particles = [];
  let raf = null;
  let time = 0;

  /* Cursor state */
  let mx = -9999, my = -9999; // offscreen default
  let cmx = -9999, cmy = -9999; // smoothed
  let cursorActive = false;

  /* Detect mobile */
  const isMobile = window.innerWidth < 768;
  const PARTICLE_COUNT = isMobile ? 180 : 400;
  const CONNECT_DIST = isMobile ? 0 : 100; // no lines on mobile
  const CURSOR_RADIUS = 160;
  const CURSOR_FORCE = 0.6;
  const LERP_SPEED = 0.04;

  /* Palette — brand colors */
  const COLORS = [
    [1, 165, 255],     // #01A5FF primary
    [9, 113, 235],     // #0971EB secondary
    [102, 27, 225],    // #661BE1 accent
    [60, 190, 255],    // light cyan
    [140, 100, 255],   // light purple
    [200, 215, 255],   // near-white
  ];

  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function rand(a, b) { return a + Math.random() * (b - a); }

  /* ============================================================
     Simple 2D value noise (no dependencies)
     ============================================================ */
  const NOISE_SIZE = 256;
  const noiseTable = new Float32Array(NOISE_SIZE);
  for (let i = 0; i < NOISE_SIZE; i++) noiseTable[i] = Math.random();

  function noiseLerp(a, b, t) { return a + (b - a) * t; }

  function noise2d(x, y) {
    const xi = Math.floor(x) & (NOISE_SIZE - 1);
    const yi = Math.floor(y) & (NOISE_SIZE - 1);
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const sx = xf * xf * (3 - 2 * xf); // smoothstep
    const sy = yf * yf * (3 - 2 * yf);

    const i00 = noiseTable[(xi + yi * 7) & (NOISE_SIZE - 1)];
    const i10 = noiseTable[(xi + 1 + yi * 7) & (NOISE_SIZE - 1)];
    const i01 = noiseTable[(xi + (yi + 1) * 7) & (NOISE_SIZE - 1)];
    const i11 = noiseTable[(xi + 1 + (yi + 1) * 7) & (NOISE_SIZE - 1)];

    return noiseLerp(
      noiseLerp(i00, i10, sx),
      noiseLerp(i01, i11, sx),
      sy
    );
  }

  /* ============================================================
     Particle
     ============================================================ */
  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial) {
      // Layer: 0=far, 1=mid, 2=near
      this.layer = Math.random() < 0.3 ? 0 : Math.random() < 0.5 ? 1 : 2;

      this.x = rand(0, W);
      this.y = rand(0, H);
      this.vx = 0;
      this.vy = 0;

      // Noise sampling offset (unique per particle)
      this.noiseOffX = rand(0, 100);
      this.noiseOffY = rand(0, 100);

      // Base drift speed
      this.baseSpeed = this.layer === 0 ? rand(0.15, 0.4) : this.layer === 1 ? rand(0.3, 0.7) : rand(0.5, 1.0);

      // Visual
      const c = pick(COLORS);
      this.cr = c[0]; this.cg = c[1]; this.cb = c[2];

      if (this.layer === 0) {
        this.alpha = rand(0.08, 0.20);
        this.size = rand(1.2, 2.8);
      } else if (this.layer === 1) {
        this.alpha = rand(0.14, 0.32);
        this.size = rand(1.0, 2.0);
      } else {
        this.alpha = rand(0.20, 0.50);
        this.size = rand(0.7, 1.5);
      }

      // Bright accent particles (10%)
      if (Math.random() < 0.10) {
        this.alpha = rand(0.5, 0.8);
        this.size = rand(1.2, 2.2);
        const bright = pick([[1,165,255],[200,215,255],[60,190,255]]);
        this.cr = bright[0]; this.cg = bright[1]; this.cb = bright[2];
      }
    }

    update(t) {
      // Noise-driven flow
      const scale = 0.003;
      const n = noise2d(
        (this.x * scale + this.noiseOffX + t * 0.1),
        (this.y * scale + this.noiseOffY + t * 0.08)
      );
      const angle = n * Math.PI * 4; // noise → angle

      this.vx += Math.cos(angle) * this.baseSpeed * 0.15;
      this.vy += Math.sin(angle) * this.baseSpeed * 0.15;

      // Global drift (left to right + slight downward)
      this.vx += 0.12;
      this.vy += 0.02;

      // Cursor attraction
      if (cursorActive) {
        const dx = cmx - this.x;
        const dy = cmy - this.y;
        const distSq = dx * dx + dy * dy;
        const radius = CURSOR_RADIUS * dpr;
        if (distSq < radius * radius && distSq > 1) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / radius) * CURSOR_FORCE * this.baseSpeed;
          this.vx += (dx / dist) * force;
          this.vy += (dy / dist) * force;
        }
      }

      // Friction
      this.vx *= 0.92;
      this.vy *= 0.92;

      this.x += this.vx;
      this.y += this.vy;

      // Wrap around edges
      if (this.x > W + 20) this.x = -20;
      if (this.x < -20) this.x = W + 20;
      if (this.y > H + 20) this.y = -20;
      if (this.y < -20) this.y = H + 20;
    }

    draw() {
      const r = this.size * dpr;
      ctx.beginPath();
      ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.cr},${this.cg},${this.cb},${this.alpha})`;
      ctx.fill();

      // Soft glow on bright particles
      if (this.alpha > 0.3) {
        const gr = r * 4;
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, gr);
        g.addColorStop(0, `rgba(${this.cr},${this.cg},${this.cb},${this.alpha * 0.15})`);
        g.addColorStop(1, `rgba(${this.cr},${this.cg},${this.cb},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(this.x, this.y, gr, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  /* ============================================================
     Connection lines (near-layer only, spatial hashing)
     ============================================================ */
  const CELL_SIZE = 120; // px
  let grid = {};

  function buildGrid() {
    grid = {};
    for (const p of particles) {
      if (p.layer < 2) continue; // only near-layer connects
      const cx = Math.floor(p.x / (CELL_SIZE * dpr));
      const cy = Math.floor(p.y / (CELL_SIZE * dpr));
      const key = cx + ',' + cy;
      if (!grid[key]) grid[key] = [];
      grid[key].push(p);
    }
  }

  function drawConnections() {
    if (CONNECT_DIST === 0) return;

    const maxDist = CONNECT_DIST * dpr;
    const maxDistSq = maxDist * maxDist;

    ctx.lineCap = 'round';

    for (const key in grid) {
      const cell = grid[key];
      const [cx, cy] = key.split(',').map(Number);

      // Check this cell + 4 neighbors (right, bottom, bottom-right, bottom-left)
      const neighbors = [
        key,
        (cx + 1) + ',' + cy,
        cx + ',' + (cy + 1),
        (cx + 1) + ',' + (cy + 1),
        (cx - 1) + ',' + (cy + 1),
      ];

      for (const p of cell) {
        let connections = 0;
        for (const nk of neighbors) {
          const ncell = grid[nk];
          if (!ncell) continue;
          for (const q of ncell) {
            if (q === p || connections >= 3) continue;
            const dx = p.x - q.x;
            const dy = p.y - q.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < maxDistSq) {
              const alpha = (1 - Math.sqrt(distSq) / maxDist) * 0.18;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = `rgba(1,165,255,${alpha})`;
              ctx.lineWidth = 0.7 * dpr;
              ctx.stroke();
              connections++;
            }
          }
        }
      }
    }
  }

  /* ============================================================
     Cursor glow (canvas-drawn)
     ============================================================ */
  function drawCursorGlow() {
    if (!cursorActive) return;
    const r = 180 * dpr;
    const g = ctx.createRadialGradient(cmx, cmy, 0, cmx, cmy, r);
    g.addColorStop(0, 'rgba(1,165,255,0.06)');
    g.addColorStop(0.4, 'rgba(9,113,235,0.03)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cmx, cmy, r, 0, Math.PI * 2);
    ctx.fill();
  }

  /* ============================================================
     Ambient background
     ============================================================ */
  function drawAmbient() {
    // Center glow
    const g1 = ctx.createRadialGradient(W * 0.45, H * 0.5, 0, W * 0.45, H * 0.5, W * 0.4);
    g1.addColorStop(0, 'rgba(1,165,255,0.015)');
    g1.addColorStop(0.5, 'rgba(9,113,235,0.008)');
    g1.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g1;
    ctx.fillRect(0, 0, W, H);

    // Right purple
    const g2 = ctx.createRadialGradient(W * 0.8, H * 0.6, 0, W * 0.8, H * 0.6, W * 0.25);
    g2.addColorStop(0, 'rgba(102,27,225,0.012)');
    g2.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, W, H);
  }

  /* --- Edge darkening --- */
  function drawEdges() {
    const gt = ctx.createLinearGradient(0, 0, 0, H * 0.12);
    gt.addColorStop(0, 'rgba(11,15,26,0.5)');
    gt.addColorStop(1, 'rgba(11,15,26,0)');
    ctx.fillStyle = gt;
    ctx.fillRect(0, 0, W, H * 0.12);

    const gb = ctx.createLinearGradient(0, H * 0.88, 0, H);
    gb.addColorStop(0, 'rgba(11,15,26,0)');
    gb.addColorStop(1, 'rgba(11,15,26,0.5)');
    ctx.fillStyle = gb;
    ctx.fillRect(0, H * 0.88, W, H * 0.12);
  }

  /* ============================================================
     Setup & Loop
     ============================================================ */
  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = rect.width * dpr;
    H = rect.height * dpr;
    canvas.width = W;
    canvas.height = H;
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function frame() {
    time += 0.004;

    // Smooth cursor
    if (cursorActive) {
      cmx += (mx - cmx) * LERP_SPEED;
      cmy += (my - cmy) * LERP_SPEED;
    }

    ctx.clearRect(0, 0, W, H);

    drawAmbient();

    // Update & draw particles by layer
    for (const p of particles) p.update(time);

    // Build spatial grid for connections
    if (CONNECT_DIST > 0) buildGrid();

    // Draw far layer
    for (const p of particles) { if (p.layer === 0) p.draw(); }
    // Draw mid layer
    for (const p of particles) { if (p.layer === 1) p.draw(); }
    // Draw connections (near layer only)
    if (CONNECT_DIST > 0) drawConnections();
    // Draw near layer
    for (const p of particles) { if (p.layer === 2) p.draw(); }

    drawCursorGlow();
    drawEdges();

    raf = requestAnimationFrame(frame);
  }

  /* --- Cursor tracking --- */
  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mx = (e.clientX - rect.left) * dpr;
      my = (e.clientY - rect.top) * dpr;
      cursorActive = true;
    });
    hero.addEventListener('mouseleave', () => {
      cursorActive = false;
    });
  }

  /* --- Lifecycle --- */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { if (!raf) raf = requestAnimationFrame(frame); }
      else { if (raf) { cancelAnimationFrame(raf); raf = null; } }
    });
  }, { threshold: 0.05 });

  init();
  obs.observe(canvas);

  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(init, 250); });
})();
