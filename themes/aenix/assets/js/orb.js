/* Aenix — Flow Field v9
   Dense, layered, living infrastructure background.
   Three depth layers. Density variation. Directional flow. */

(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.getElementById('flow-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let lines = [];
  let raf = null;
  let time = 0;

  /* Palette */
  const PAL = [
    [1, 165, 255],
    [9, 113, 235],
    [102, 27, 225],
    [60, 180, 255],
    [140, 100, 255],
    [190, 200, 255],
  ];

  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function rand(a, b) { return a + Math.random() * (b - a); }

  /* Density map: more lines in center-left, fewer at edges */
  function densityBias() {
    // Weight toward center and left (behind text area)
    const x = Math.random();
    const y = Math.random();
    // Gaussian-ish toward center vertically
    const vy = 0.5 + (Math.random() + Math.random() + Math.random() - 1.5) * 0.4;
    return Math.max(0.05, Math.min(0.95, vy));
  }

  /* ============================================================
     FlowLine — a smooth directional curve across the viewport.
     Has a depth layer (far/mid/near) affecting blur and alpha.
     ============================================================ */
  class FlowLine {
    constructor(layer) {
      this.layer = layer; // 0=far, 1=mid, 2=near

      // Vertical position with density clustering
      this.y = densityBias();

      // Wave shape
      this.amp = layer === 0 ? rand(0.03, 0.10) : layer === 1 ? rand(0.02, 0.08) : rand(0.01, 0.06);
      this.freq = rand(0.4, 1.8);
      this.phase = rand(0, Math.PI * 2);

      // Horizontal flow speed
      this.scrollSpeed = rand(0.01, 0.04);

      // Slight diagonal
      this.tilt = rand(-0.05, 0.05);

      // Color
      const c = pick(PAL);
      this.cr = c[0]; this.cg = c[1]; this.cb = c[2];

      // Layer-based visual properties
      if (layer === 0) {
        // Far: soft, wide, subdued
        this.alpha = rand(0.008, 0.022);
        this.width = rand(1.5, 3.5);
      } else if (layer === 1) {
        // Mid: moderate, pulled back
        this.alpha = rand(0.015, 0.05);
        this.width = rand(0.5, 1.5);
      } else {
        // Near: sharper but still restrained
        this.alpha = rand(0.03, 0.10);
        this.width = rand(0.3, 0.9);
      }

      // Some accent lines (near layer only, 10%)
      if (layer === 2 && Math.random() < 0.10) {
        this.alpha = rand(0.10, 0.22);
        this.width = rand(0.6, 1.4);
        const bright = pick([[1,165,255],[60,180,255],[190,200,255]]);
        this.cr = bright[0]; this.cg = bright[1]; this.cb = bright[2];
      }

      // Travelling pulse
      this.pulseSpeed = rand(0.02, 0.06);
      this.pulsePhase = rand(0, 1);
      this.pulseWidth = layer === 0 ? rand(0.15, 0.35) : rand(0.08, 0.22);
    }

    draw(t) {
      const segs = 80;
      const scroll = t * this.scrollSpeed;

      // Pulse
      const pulse = ((t * this.pulseSpeed + this.pulsePhase) % 1.0);

      ctx.lineCap = 'round';

      let px, py;

      for (let i = 0; i <= segs; i++) {
        const f = i / segs;

        const x = f * W;
        const wave = Math.sin(f * this.freq * Math.PI * 2 + this.phase + scroll) * this.amp;
        const tiltOff = (f - 0.5) * this.tilt;
        const y = (this.y + wave + tiltOff) * H;

        if (i > 0) {
          // Pulse
          const pd = Math.min(Math.abs(f - pulse), Math.abs(f - pulse + 1), Math.abs(f - pulse - 1));
          const pb = Math.max(0, 1 - pd / this.pulseWidth);
          const pf = pb * pb;

          // Horizontal edge fade
          const edgeX = Math.min(f * 4, (1 - f) * 4, 1);

          // Vertical edge fade (darker at top/bottom edges)
          const yNorm = this.y + wave + tiltOff;
          const edgeY = Math.min(yNorm * 5, (1 - yNorm) * 5, 1);

          const a = (this.alpha + this.alpha * pf * 2.5) * edgeX * Math.max(edgeY, 0);
          const w = this.width * (0.7 + pf * 0.6) * dpr;

          if (a > 0.002) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(x, y);
            ctx.strokeStyle = `rgba(${this.cr},${this.cg},${this.cb},${a})`;
            ctx.lineWidth = w;
            ctx.stroke();
          }
        }

        px = x;
        py = y;
      }
    }
  }

  /* --- Glow spots (painted once per frame) --- */
  function drawGlowSpots() {
    // Very subtle atmospheric glow only — focal CSS element handles main glow
    const g1 = ctx.createRadialGradient(W * 0.4, H * 0.45, 0, W * 0.4, H * 0.45, W * 0.35);
    g1.addColorStop(0, 'rgba(1,165,255,0.012)');
    g1.addColorStop(0.5, 'rgba(9,113,235,0.006)');
    g1.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g1;
    ctx.fillRect(0, 0, W, H);

    const g2 = ctx.createRadialGradient(W * 0.7, H * 0.55, 0, W * 0.7, H * 0.55, W * 0.25);
    g2.addColorStop(0, 'rgba(102,27,225,0.01)');
    g2.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, W, H);
  }

  /* --- Edge darkening --- */
  function drawEdges() {
    // Top fade
    const gt = ctx.createLinearGradient(0, 0, 0, H * 0.15);
    gt.addColorStop(0, 'rgba(11,15,26,0.4)');
    gt.addColorStop(1, 'rgba(11,15,26,0)');
    ctx.fillStyle = gt;
    ctx.fillRect(0, 0, W, H * 0.15);

    // Bottom fade
    const gb = ctx.createLinearGradient(0, H * 0.85, 0, H);
    gb.addColorStop(0, 'rgba(11,15,26,0)');
    gb.addColorStop(1, 'rgba(11,15,26,0.5)');
    ctx.fillStyle = gb;
    ctx.fillRect(0, H * 0.85, W, H * 0.15);

    // Left fade
    const gl = ctx.createLinearGradient(0, 0, W * 0.08, 0);
    gl.addColorStop(0, 'rgba(11,15,26,0.3)');
    gl.addColorStop(1, 'rgba(11,15,26,0)');
    ctx.fillStyle = gl;
    ctx.fillRect(0, 0, W * 0.08, H);

    // Right fade
    const gr = ctx.createLinearGradient(W * 0.92, 0, W, 0);
    gr.addColorStop(0, 'rgba(11,15,26,0)');
    gr.addColorStop(1, 'rgba(11,15,26,0.3)');
    ctx.fillStyle = gr;
    ctx.fillRect(W * 0.92, 0, W * 0.08, H);
  }

  /* --- Setup --- */
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
    lines = [];

    // Layer 0 — far: fewer, wider, blurry feel
    for (let i = 0; i < 20; i++) lines.push(new FlowLine(0));
    // Layer 1 — mid
    for (let i = 0; i < 35; i++) lines.push(new FlowLine(1));
    // Layer 2 — near: most lines, sharpest
    for (let i = 0; i < 40; i++) lines.push(new FlowLine(2));

    // Sort by layer (far drawn first)
    lines.sort((a, b) => a.layer - b.layer);
  }

  function frame() {
    time += 0.008;
    ctx.clearRect(0, 0, W, H);

    // Glow spots first (under lines)
    drawGlowSpots();

    // Far layer lines
    for (const l of lines) {
      if (l.layer === 0) l.draw(time);
    }

    // Mid layer
    for (const l of lines) {
      if (l.layer === 1) l.draw(time);
    }

    // Near layer (on top)
    for (const l of lines) {
      if (l.layer === 2) l.draw(time);
    }

    // Edge darkening on top
    drawEdges();

    raf = requestAnimationFrame(frame);
  }

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
