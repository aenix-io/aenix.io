/* Aenix — Interactive 3D Hero Scene
   "Valley" composition: text sits in the centre, mountains rise on
   either side, peak labels point to mountain summits like a
   topographic map. Bloom only — no chip, no orbs, no abstract blobs. */

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass }     from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass }      from 'three/addons/postprocessing/OutputPass.js';

(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.getElementById('hero-3d-canvas');
  if (!canvas) return;

  // WebGL availability check — fall back silently to orb.js if unsupported
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
  } catch (e) {
    console.warn('[hero-3d] WebGL unavailable, falling back', e);
    canvas.style.display = 'none';
    return;
  }

  // Hide 2D fallback canvas so orb.js never starts its raf loop
  const flowCanvas = document.getElementById('flow-canvas');
  if (flowCanvas) flowCanvas.style.display = 'none';

  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  renderer.setPixelRatio(DPR);
  renderer.setClearColor(0x000000, 0);

  /* ── Scene ────────────────────────────────────────────────── */
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0b0f1a, 22, 60);

  // Camera elevated and tilted further down so the back ridges
  // actually fill the upper part of the viewport — no dark sky band
  // between the header and the wireframe.
  const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 100);
  camera.position.set(0, 5.0, 9.5);
  camera.lookAt(0, -0.6, -4.0);

  /* ── Valley terrain ──────────────────────────────────────────
     Big plane lying flat, displaced by simplex noise. A "valley
     mask" suppresses height around x=0 so the centre is flat and
     the text sits cleanly. Mountains rise on the left and right,
     fading to fog at the back.                                   */

  const TERRAIN_W = 56;
  const TERRAIN_D = 54;
  const SEG_X = 200;
  const SEG_Y = 160;

  const terrainGeo = new THREE.PlaneGeometry(TERRAIN_W, TERRAIN_D, SEG_X, SEG_Y);
  terrainGeo.rotateX(-Math.PI / 2);

  const terrainMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime:    { value: 0 },
      uColorLo: { value: new THREE.Color(0x0971eb) }, // brand blue (low)
      uColorHi: { value: new THREE.Color(0x01a5ff) }, // brand cyan (high)
    },
    transparent: true,
    wireframe: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */`
      uniform float uTime;
      varying vec3 vWorldPos;
      varying float vElevation;

      // 2D simplex noise — Ashima/IQ
      vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
      vec2 mod289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}
      vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
      float snoise(vec2 v){
        const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
        vec2 i=floor(v+dot(v,C.yy));
        vec2 x0=v-i+dot(i,C.xx);
        vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
        vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1;
        i=mod289(i);
        vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
        vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
        m=m*m; m=m*m;
        vec3 x=2.0*fract(p*C.www)-1.0;
        vec3 h=abs(x)-0.5;
        vec3 ox=floor(x+0.5);
        vec3 a0=x-ox;
        m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
        vec3 g;
        g.x=a0.x*x0.x+h.x*x0.y;
        g.yz=a0.yz*x12.xz+h.yz*x12.yw;
        return 130.0*dot(m,g);
      }
      // Lower-octave fbm: only 3 octaves so we get a few large
      // peaks instead of dense noise.
      float fbm(vec2 p){
        float a=0.5, sum=0.0;
        for(int i=0;i<3;i++){ sum += a*snoise(p); p *= 2.05; a *= 0.5; }
        return sum;
      }

      void main(){
        vec3 p = position;
        // Lower-frequency sampling — broader, calmer mountain forms
        // (roughly 2–3 big peaks per side instead of jagged noise).
        vec2 uv2 = vec2(p.x * 0.055, p.z * 0.07);

        float h = fbm(uv2) * 1.4 + 0.20 * fbm(uv2 * 2.4);
        // soften the secondary ridge term — less spiky tops
        h = h * 0.60 + 0.30 * abs(snoise(uv2 * 0.45));

        // Wider, sharper V-valley so the centre stays fully open for
        // the hero copy. Mask is 0 at |x|<3, full at |x|>=11.
        float vmask = smoothstep(3.0, 11.0, abs(p.x));
        float frontBoost = smoothstep(-12.0, 6.0, p.z) * 0.5;

        float amp = 7.5;
        h = h * vmask * (1.0 + frontBoost);

        p.y += h * amp;

        vElevation = h * amp;
        vec4 worldPos = modelMatrix * vec4(p, 1.0);
        vWorldPos = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: /* glsl */`
      uniform vec3 uColorLo;
      uniform vec3 uColorHi;
      varying vec3 vWorldPos;
      varying float vElevation;

      void main(){
        // Inverted lighting hierarchy: low-elevation slopes (near the
        // valley) are brighter; high peaks are DARKER + less saturated.
        // No more white blow-out on summits.
        float t = clamp(vElevation / 4.0, 0.0, 1.0);
        // mix from bright cyan at base to a darker, desaturated blue at peak
        vec3 baseCol = mix(uColorHi, uColorLo * 0.45, t);
        // pull saturation down at the highest peaks
        float lum = dot(baseCol, vec3(0.299, 0.587, 0.114));
        vec3 col  = mix(baseCol, vec3(lum), t * 0.45);

        // Far-back fade so the deepest ridges dissolve into bg.
        float distFade = smoothstep(-34.0, -22.0, vWorldPos.z);

        // Valley alpha reveal — keep the centre band quiet so the
        // hero copy never fights wires.
        float valleyDim = smoothstep(0.0, 3.0, abs(vWorldPos.x));
        valleyDim = mix(0.16, 1.0, valleyDim);

        float frontEdge = smoothstep(2.0, 9.5, vWorldPos.z);
        float nearDim = mix(1.0, 0.40, frontEdge);

        // Ground-haze: low-altitude wires get a very gentle white
        // tint, simulating valley fog and lifting the centre as the
        // brightest reading.
        float groundFog = smoothstep(0.5, -1.4, vWorldPos.y);
        col = mix(col, vec3(0.78, 0.88, 1.00), groundFog * 0.35);

        float alpha = distFade * valleyDim * nearDim * 0.70;
        gl_FragColor = vec4(col, alpha);
      }
    `,
  });

  const terrain = new THREE.Mesh(terrainGeo, terrainMat);
  terrain.position.set(0, -1.2, -3.0);
  scene.add(terrain);

  /* ── Soft horizon glow plane far back ────────────────────── */
  const horizonGeo = new THREE.PlaneGeometry(80, 18);
  const horizonMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {},
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
    fragmentShader: `
      varying vec2 vUv;
      void main(){
        // brighter near the centre band, fading up & out
        float dx = abs(vUv.x - 0.5);
        float dy = vUv.y;
        float a = smoothstep(0.6, 0.0, dx) * smoothstep(0.0, 0.4, dy) * 0.20;
        // brand cyan core fading to deep blue
        vec3 col = mix(vec3(0.0,0.20,0.55), vec3(0.10,0.55,0.95), 1.0 - dx);
        gl_FragColor = vec4(col, a);
      }
    `,
  });
  const horizon = new THREE.Mesh(horizonGeo, horizonMat);
  horizon.position.set(0, 1.5, -22);
  scene.add(horizon);

  /* ── Energy flow lines ───────────────────────────────────────
     Two-stage flow that visualises chaos → control → order:
     - INPUT: scattered curves from many left-ridge points, slightly
       chaotic high on the slope, converging smoothly toward a small
       control "core" near the valley floor (x≈0, y≈-0.3).
     - OUTPUT: organised parallel rails leaving the core toward the
       right edge — slightly brighter than input.
     Both use vertex-colour gradients (purple→cyan for input, pure
     cyan for output) and additive blending.                         */
  const flowGroup = new THREE.Group();
  const cPurple = new THREE.Color(0x661be1);
  const cCyan   = new THREE.Color(0x01a5ff);
  const cWhite  = new THREE.Color(0xb0e5ff);

  // Single "core" position the input collapses to and the output emerges from.
  const CORE = new THREE.Vector3(0.0, -0.35, 1.0);

  function addCurve(curve, colorStart, colorEnd, opacity, segments = 38) {
    const pts = curve.getPoints(segments);
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const colors = new Float32Array(pts.length * 3);
    const mixed = new THREE.Color();
    for (let i = 0; i < pts.length; i++) {
      const t = i / (pts.length - 1);
      mixed.copy(colorStart).lerp(colorEnd, Math.pow(t, 0.85));
      colors[i * 3]     = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    flowGroup.add(new THREE.Line(geo, mat));
  }

  // ── FLOWS (both ridges → centre valley) ──
  // Symmetric, very subtle. Same count and opacity on both sides so
  // the scene stays balanced (no single bright side). Left curves
  // get a small chaos offset; right curves are slightly smoother as
  // they approach the centre. Lines are 1 px and barely visible.
  const FLOW_HALF = [
    // [x, y, z, chaos]   x is the left-side magnitude; we mirror for right
    [ 8.5, 4.4,  -6, 1.10],
    [ 6.5, 4.0,  -2, 1.00],
    [ 7.5, 4.2, -10, 1.15],
    [ 5.5, 3.6,   2, 0.95],
    [ 4.5, 3.2,   5, 0.90],
  ];
  function addFlow(side, [mag, sy, sz, chaos]) {
    const sx = side * mag;
    const start = new THREE.Vector3(sx, sy, sz);
    // Control points placed near a straight line from start→CORE, with
    // a bias to STAY LOW (closer to the slope surface) and a tiny X
    // jitter for organic feel. Keeps the line hugging the terrain
    // instead of bowing through the air.
    const dx = CORE.x - sx, dy = CORE.y - sy, dz = CORE.z - sz;
    const mid1 = new THREE.Vector3(
      sx + dx * 0.34 + sx * 0.04 * chaos,
      sy + dy * 0.55,                         // descend faster — hug slope
      sz + dz * 0.34
    );
    const mid2 = new THREE.Vector3(
      sx + dx * 0.72 + sx * 0.02,
      sy + dy * 0.86,                         // already nearly at floor
      sz + dz * 0.72
    );
    const curve = new THREE.CubicBezierCurve3(start, mid1, mid2, CORE);
    addCurve(curve, cPurple, cCyan, 0.18);
  }
  FLOW_HALF.forEach(p => addFlow(-1, p)); // left
  FLOW_HALF.forEach(p => addFlow( 1, p)); // right (mirror)

  scene.add(flowGroup);

  /* ── Peak label anchors ──────────────────────────────────────
     Six fixed 3D points on the ridges. Each frame we project them
     to screen space and write the result to CSS variables on the
     matching .peak--<id> label, so the label and its leader line
     visually anchor to a specific peak (no 3D meshes — just a CSS
     dot at the projected coordinate). Positions chosen so the six
     screen projections spread across the viewport without stacking. */
  const PEAK_DEFS = [
    // [id, x, y, z] — Y values picked so the projected dot lands on
    // the visible ridge silhouette under the down-tilted camera.
    // Inner pair pushed further out on X to keep their labels clear
    // of the centred title.
    ['kubernetes',    -11.0, 2.0, -10],
    ['vms',            -7.5, 1.4,  -8],
    ['databases',      -5.5, 0.8,  -6],
    ['storage',         11.0, 2.0, -10],
    ['networking',       7.5, 1.4,  -8],
    ['observability',    5.5, 0.8,  -6],
  ];
  const peakAnchors = PEAK_DEFS.map(([id, x, y, z]) => ({
    id,
    pos: new THREE.Vector3(x, y, z),
    el:  document.querySelector('.peak--' + id),
  }));
  const annotationsEl = document.querySelector('.hero-3d-annotations');
  const projVec = new THREE.Vector3();
  let annotationsReady = false;
  // Each label is anchored to its peak point: CSS positions the label
  // (peak-x, peak-y) and shifts it just above the dot via transform.
  function projectPeakLabels() {
    const r = canvas.getBoundingClientRect();
    if (r.width === 0) return;
    for (const a of peakAnchors) {
      if (!a.el) continue;
      projVec.copy(a.pos).project(camera);
      const sx = (projVec.x * 0.5 + 0.5) * r.width;
      const sy = (-projVec.y * 0.5 + 0.5) * r.height;
      a.el.style.setProperty('--peak-x', sx + 'px');
      a.el.style.setProperty('--peak-y', sy + 'px');
    }
    if (!annotationsReady && annotationsEl) {
      annotationsEl.classList.add('peaks-ready');
      annotationsReady = true;
    }
  }

  /* ── Postprocessing — UnrealBloom (skipped on low-end CPUs) */
  const lowEnd = (navigator.hardwareConcurrency || 4) < 4;
  let composer = null;
  if (!lowEnd) {
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(canvas.clientWidth, canvas.clientHeight),
      0.32, // strength — kept low so flows don't smear into streaks
      0.40, // radius
      0.85  // threshold
    );
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
  }

  /* ── Resize ──────────────────────────────────────────────── */
  function resize() {
    const r = canvas.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    renderer.setSize(r.width, r.height, false);
    if (composer) composer.setSize(r.width, r.height);
    camera.aspect = r.width / r.height;
    camera.updateProjectionMatrix();
  }
  resize();
  let resizeT;
  window.addEventListener('resize', () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(resize, 150);
  });

  /* ── Mouse parallax ──────────────────────────────────────── */
  const target = { x: 0, y: 0 };
  const smoothed = { x: 0, y: 0 };
  const heroEl = document.getElementById('hero');
  if (heroEl && !reduceMotion) {
    heroEl.addEventListener('mousemove', (e) => {
      const r = heroEl.getBoundingClientRect();
      target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    });
    heroEl.addEventListener('mouseleave', () => {
      target.x = 0; target.y = 0;
    });
  }

  /* ── Render loop ─────────────────────────────────────────── */
  let raf = null;
  const start = performance.now();

  function frame() {
    smoothed.x += (target.x - smoothed.x) * 0.04;
    smoothed.y += (target.y - smoothed.y) * 0.04;

    // very subtle camera parallax — keep the valley framing stable
    camera.position.x = smoothed.x * 0.35;
    camera.position.y = 5.0 + smoothed.y * -0.20;
    camera.lookAt(smoothed.x * 0.05, -0.6 + smoothed.y * 0.05, -4.0);

    if (composer) composer.render();
    else renderer.render(scene, camera);
    projectPeakLabels();
    raf = requestAnimationFrame(frame);
  }
  // run one synchronous projection pass at init so labels never wait
  // for the first rAF tick (which can be delayed in some browsers)
  camera.updateMatrixWorld(true);
  projectPeakLabels();

  /* ── Pause when offscreen ────────────────────────────────── */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !raf) raf = requestAnimationFrame(frame);
      else if (!e.isIntersecting && raf) { cancelAnimationFrame(raf); raf = null; }
    });
  }, { threshold: 0.05 });
  obs.observe(canvas);

  raf = requestAnimationFrame(frame);
})();
