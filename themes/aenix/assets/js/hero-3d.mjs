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

  // WebGL availability check — hide canvas silently if unsupported
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
  } catch (e) {
    console.warn('[hero-3d] WebGL unavailable', e);
    canvas.style.display = 'none';
    return;
  }

  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  renderer.setPixelRatio(DPR);
  renderer.setClearColor(0x000000, 0);

  /* ── Scene ────────────────────────────────────────────────── */
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0b0f1a, 22, 60);

  // Camera elevated and tilted further down so the back ridges
  // actually fill the upper part of the viewport — no dark sky band
  // between the header and the wireframe.
  const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
  camera.position.set(0, 5.0, 9.5);
  camera.lookAt(0, -0.6, -4.0);

  /* ── Valley terrain ──────────────────────────────────────────
     Big plane lying flat, displaced by simplex noise. A "valley
     mask" suppresses height around x=0 so the centre is flat and
     the text sits cleanly. Mountains rise on the left and right,
     fading to fog at the back.                                   */

  const TERRAIN_W = 56;
  const TERRAIN_D = 54;
  const SEG_X = 60;
  const SEG_Y = 54;

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
      float fbm(vec2 p){
        float a=0.5, sum=0.0;
        for(int i=0;i<5;i++){ sum += a*snoise(p); p *= 2.05; a *= 0.5; }
        return sum;
      }

      void main(){
        vec3 p = position;
        // Static terrain — no time-based displacement. Uses a fixed seed.
        vec2 uv2 = vec2(p.x * 0.10, p.z * 0.12);

        // base ridged height
        float h = fbm(uv2) * 1.6 + 0.25 * fbm(uv2 * 2.4);
        h = h * 0.55 + 0.55 * abs(snoise(uv2 * 0.55));

        // VALLEY MASK — flatten the centre band so the hero copy reads.
        // mask is 0 at x=0, ramps to 1 by |x|=8.
        float vmask = smoothstep(2.0, 9.0, abs(p.x));
        // SIDE BOOST — exaggerate the V shape: outer flanks rise much
        // higher than the noise alone would give, so the silhouette
        // reads as two ridges with a clear valley between them.
        float sideBoost = smoothstep(4.0, 13.0, abs(p.x)) * 0.95;
        // FOREGROUND BOOST — peaks closer to the camera (positive p.z)
        // rise higher than distant ones, so the silhouette feels grounded.
        float frontBoost = smoothstep(-12.0, 6.0, p.z) * 0.4;
        // BACK RIDGE — close the far end of the valley with a low
        // ridge in the centre so the middle doesn't drop off into a
        // cliff/void. Only kicks in at the back and only in the centre.
        float backDist    = smoothstep(-4.0, -16.0, p.z);
        float centerBand  = 1.0 - smoothstep(2.0, 9.0, abs(p.x));
        float backRidge   = backDist * centerBand * 0.20;
        vmask = max(vmask, backRidge);

        // amplitude in metres — tall peaks so the silhouette reaches
        // up toward the header.
        float amp = 7.5;
        h = h * vmask * (1.0 + frontBoost + sideBoost);

        // CENTRE DIP — push the valley floor DOWN below the base level
        // so the V shape reads as a real depression, not just a flat
        // strip between ridges. Strongest at x=0, fades out by |x|=8.
        float dip = (1.0 - smoothstep(0.0, 8.0, abs(p.x))) * 2.5;

        p.y += h * amp - dip;

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
        // colour by elevation — pure brand blue → cyan
        float t = clamp(vElevation / 4.0, 0.0, 1.0);
        vec3 col = mix(uColorLo, uColorHi, t);

        // ridge accent — gentle extra brightness on tall peaks
        col += pow(max(vElevation - 2.2, 0.0) * 0.30, 1.8) * vec3(0.18, 0.32, 0.55);

        // Very gentle far-fade so the absolute back of the terrain
        // dissolves into the bg, but everything in the visible frame
        // stays fully rendered (no empty band under the header).
        float distFade = smoothstep(-34.0, -22.0, vWorldPos.z);

        // valley reveal — keep the centre band quiet
        float valleyDim = smoothstep(0.0, 3.0, abs(vWorldPos.x));
        valleyDim = mix(0.18, 1.0, valleyDim);

        // Softly fade only the very front edge so foreground wires don't
        // crowd the hero copy.
        float frontEdge = smoothstep(2.0, 9.5, vWorldPos.z);
        float nearDim = mix(1.0, 0.40, frontEdge);

        float alpha = distFade * valleyDim * nearDim * 0.35;
        gl_FragColor = vec4(col, alpha);
      }
    `,
  });

  const terrain = new THREE.Mesh(terrainGeo, terrainMat);
  terrain.position.set(0, -19.5, -3.0);
  scene.add(terrain);

  /* ── Solid fill behind the wireframe ────────────────────────
     50% black "glass" inside every triangle. Shares the same
     vertex shader so the displaced surface lines up with the
     wireframe; polygonOffset pushes it slightly back to avoid
     z-fighting with the glowing edges on top. Alpha also fades
     at the far back and near front so the panel boundaries
     mirror the wireframe's fade and don't appear as hard edges. */
  const terrainFillMat = new THREE.ShaderMaterial({
    uniforms: terrainMat.uniforms,
    transparent: true,
    depthWrite: true,
    polygonOffset: true,
    polygonOffsetFactor: 1.0,
    polygonOffsetUnits: 1.0,
    side: THREE.DoubleSide,
    vertexShader: terrainMat.vertexShader,
    fragmentShader: /* glsl */`
      varying vec3 vWorldPos;
      varying float vElevation;
      void main(){
        float distFade  = smoothstep(-34.0, -22.0, vWorldPos.z);
        float frontEdge = smoothstep(2.0, 9.5, vWorldPos.z);
        float nearDim   = mix(1.0, 0.40, frontEdge);
        float a = distFade * nearDim * 0.15;
        gl_FragColor = vec4(0.025, 0.08, 0.22, a);
      }
    `,
  });
  const terrainFill = new THREE.Mesh(terrainGeo, terrainFillMat);
  terrainFill.position.copy(terrain.position);
  terrainFill.renderOrder = -1;
  scene.add(terrainFill);

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
  const CORE = new THREE.Vector3(0.0, -20.5, 1.0);

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

  // ── INPUT FLOWS (left ridges → core) ──
  // Subtle thin lines descending from a few left-side ridge points
  // toward the central control core. Kept low-opacity and away from
  // the upper-left edge so UnrealBloom doesn't smear them into a
  // bright streak.
  const INPUT_ORIGINS = [
    [ -9.0, -11.7, -6], [-7.0, -12.1, -2], [-8.5, -11.9, -10],
    [ -6.0, -12.5,  2], [-5.0, -12.9,  5],
  ];
  INPUT_ORIGINS.forEach(([sx, sy, sz], i) => {
    const start = new THREE.Vector3(sx, sy, sz);
    const chaos = 1.0 + (i % 3) * 0.10;
    const mid1 = new THREE.Vector3(sx * 0.78 * chaos, sy * 0.55, sz * 0.85);
    const mid2 = new THREE.Vector3(sx * 0.12, -0.20, sz * 0.40 + 0.6);
    const curve = new THREE.CubicBezierCurve3(start, mid1, mid2, CORE);
    addCurve(curve, cPurple, cCyan, 0.16);
  });

  scene.add(flowGroup);

  /* ── Peak label anchors ──────────────────────────────────────
     Six fixed 3D points on the ridges. Each frame we project them
     to screen space and write the result to CSS variables on the
     matching .peak--<id> label, so the label and its leader line
     visually anchor to a specific peak (no 3D meshes — just a CSS
     dot at the projected coordinate). Positions chosen so the six
     screen projections spread across the viewport without stacking. */
  // Hand-picked peak coords (world x, y, z) via click-to-pick debug mode.
  // To re-pick: temporarily restore the click handler from git history.
  const PEAK_DEFS = [
    ['kubernetes',    -20.44, -6.70, -26.98],
    ['vms',           -13.03, -6.86, -15.07],
    ['databases',     -12.97, -12.38, -26.96],
    ['storage',        14.90, -6.44, -16.96],
    ['networking',     13.85, -9.01,  -7.70],
    ['observability',  24.10, -6.00, -27.97],
  ];
  const peakAnchors = PEAK_DEFS.map(([id, x, y, z]) => ({
    id,
    pos: new THREE.Vector3(x, y, z),
    el:  document.querySelector('.peak--' + id),
  }));

  /* ── DEBUG: type "move" anywhere on the page to reposition the peak
     labels by dragging. Each label becomes grab-able; its glowing dot
     snaps onto the terrain under the cursor (or floats at the same depth
     over open sky). A live panel prints the updated PEAK_DEFS — hit Copy
     and paste them over the array above. Zero overhead until triggered. */
  let debugDragging = false;
  {
    const SEQUENCE = 'move';
    let typed = '';
    let active = false;

    function _smoothstep(a, b, x) {
      const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
      return t * t * (3 - 2 * t);
    }
    function _mod289(v) { return v - Math.floor(v * (1 / 289)) * 289; }
    function _permute(v) { return _mod289(((v * 34) + 1) * v); }
    function _snoise2(vx, vy) {
      const C0 = 0.211324865405187, C1 = 0.366025403784439;
      const C2 = -0.577350269189626, C3 = 0.024390243902439;
      const s = (vx + vy) * C1;
      let ix = Math.floor(vx + s);
      let iy = Math.floor(vy + s);
      const t = (ix + iy) * C0;
      const x0x = vx - ix + t;
      const x0y = vy - iy + t;
      const i1x = x0x > x0y ? 1 : 0;
      const i1y = x0x > x0y ? 0 : 1;
      const x12_0 = x0x + C0 - i1x;
      const x12_1 = x0y + C0 - i1y;
      const x12_2 = x0x + C2;
      const x12_3 = x0y + C2;
      ix = _mod289(ix); iy = _mod289(iy);
      let p0 = _permute(_permute(iy) + ix);
      let p1 = _permute(_permute(iy + i1y) + ix + i1x);
      let p2 = _permute(_permute(iy + 1) + ix + 1);
      let m0 = Math.max(0.5 - (x0x * x0x + x0y * x0y), 0);
      let m1 = Math.max(0.5 - (x12_0 * x12_0 + x12_1 * x12_1), 0);
      let m2 = Math.max(0.5 - (x12_2 * x12_2 + x12_3 * x12_3), 0);
      m0 = m0 * m0; m0 = m0 * m0;
      m1 = m1 * m1; m1 = m1 * m1;
      m2 = m2 * m2; m2 = m2 * m2;
      const x_0 = 2 * (p0 * C3 - Math.floor(p0 * C3)) - 1;
      const x_1 = 2 * (p1 * C3 - Math.floor(p1 * C3)) - 1;
      const x_2 = 2 * (p2 * C3 - Math.floor(p2 * C3)) - 1;
      const h_0 = Math.abs(x_0) - 0.5;
      const h_1 = Math.abs(x_1) - 0.5;
      const h_2 = Math.abs(x_2) - 0.5;
      const a0_0 = x_0 - Math.floor(x_0 + 0.5);
      const a0_1 = x_1 - Math.floor(x_1 + 0.5);
      const a0_2 = x_2 - Math.floor(x_2 + 0.5);
      m0 *= 1.79284291400159 - 0.85373472095314 * (a0_0 * a0_0 + h_0 * h_0);
      m1 *= 1.79284291400159 - 0.85373472095314 * (a0_1 * a0_1 + h_1 * h_1);
      m2 *= 1.79284291400159 - 0.85373472095314 * (a0_2 * a0_2 + h_2 * h_2);
      const gx = a0_0 * x0x + h_0 * x0y;
      const gy = a0_1 * x12_0 + h_1 * x12_1;
      const gz = a0_2 * x12_2 + h_2 * x12_3;
      return 130 * (m0 * gx + m1 * gy + m2 * gz);
    }
    function _fbm2(px, py) {
      let a = 0.5, sum = 0, cx = px, cy = py;
      for (let i = 0; i < 5; i++) {
        sum += a * _snoise2(cx, cy);
        cx *= 2.05; cy *= 2.05; a *= 0.5;
      }
      return sum;
    }
    function terrainLocalY(x, z) {
      const ux = x * 0.10, uy = z * 0.12;
      let h = _fbm2(ux, uy) * 1.6 + 0.25 * _fbm2(ux * 2.4, uy * 2.4);
      h = h * 0.55 + 0.55 * Math.abs(_snoise2(ux * 0.55, uy * 0.55));
      const vmask     = _smoothstep(2.0, 9.0, Math.abs(x));
      const sideBoost = _smoothstep(4.0, 13.0, Math.abs(x)) * 0.95;
      const frontBoost = _smoothstep(-12.0, 6.0, z) * 0.4;
      const backDist  = _smoothstep(-4.0, -16.0, z);
      const centerBand = 1.0 - _smoothstep(2.0, 9.0, Math.abs(x));
      const backRidge = backDist * centerBand * 0.20;
      const vmF = Math.max(vmask, backRidge);
      const amp = 7.5;
      h = h * vmF * (1.0 + frontBoost + sideBoost);
      const dip = (1.0 - _smoothstep(0.0, 8.0, Math.abs(x))) * 2.5;
      return h * amp - dip;
    }

    /* Ray-march the cursor onto the terrain surface (re-uses the noise
       field above), returning the 3D hit point or null over open sky. */
    const _ray = new THREE.Vector3();
    function screenToTerrain(clientX, clientY) {
      const r = canvas.getBoundingClientRect();
      const ndcX = ((clientX - r.left) / r.width) * 2 - 1;
      const ndcY = -(((clientY - r.top) / r.height) * 2 - 1);
      _ray.set(ndcX, ndcY, 0.5).unproject(camera);
      const dx = _ray.x - camera.position.x;
      const dy = _ray.y - camera.position.y;
      const dz = _ray.z - camera.position.z;
      const dlen = Math.hypot(dx, dy, dz);
      const dirx = dx / dlen, diry = dy / dlen, dirz = dz / dlen;
      const STEP = 0.15, MAX_DIST = 80;
      for (let t = 0.5; t < MAX_DIST; t += STEP) {
        const rx = camera.position.x + dirx * t;
        const ry = camera.position.y + diry * t;
        const rz = camera.position.z + dirz * t;
        if (Math.abs(rx) > 30 || rz < -32 || rz > 22) continue;
        const lz = rz - terrain.position.z;
        const surfY = terrain.position.y + terrainLocalY(rx, lz);
        if (ry < surfY) return new THREE.Vector3(rx, surfY, rz);
      }
      return null;
    }

    /* Fallback for dragging over open sky: keep the anchor's current
       view-depth and just slide it within the screen plane. */
    const _depth = new THREE.Vector3();
    function screenAtDepth(clientX, clientY, refPos) {
      const r = canvas.getBoundingClientRect();
      _depth.copy(refPos).project(camera);
      const ndcX = ((clientX - r.left) / r.width) * 2 - 1;
      const ndcY = -(((clientY - r.top) / r.height) * 2 - 1);
      return new THREE.Vector3(ndcX, ndcY, _depth.z).unproject(camera);
    }

    function fmtLine(a) {
      const pad = ' '.repeat(Math.max(1, 16 - a.id.length));
      return `    ['${a.id}',${pad}${a.pos.x.toFixed(2)}, ` +
             `${a.pos.y.toFixed(2)}, ${a.pos.z.toFixed(2)}],`;
    }

    let listEl = null;
    function buildOverlay() {
      const box = document.createElement('div');
      box.style.cssText = [
        'position: fixed', 'top: 16px', 'right: 16px', 'z-index: 9999',
        'background: rgba(11, 15, 26, 0.94)',
        'border: 1px solid rgba(1, 165, 255, 0.5)', 'border-radius: 8px',
        'padding: 12px 14px',
        'font-family: "JetBrains Mono", ui-monospace, monospace',
        'font-size: 12px', 'line-height: 1.5', 'color: #b0e5ff',
        'max-width: 92vw', 'box-shadow: 0 4px 24px rgba(0,0,0,0.6)',
      ].join(';');

      const head = document.createElement('div');
      head.textContent = 'hero-3d · drag the labels to reposition';
      head.style.cssText = 'margin-bottom:8px;color:#7fd4ff;font-weight:600';

      listEl = document.createElement('pre');
      listEl.style.cssText = 'margin:0;white-space:pre;user-select:text';

      const btn = document.createElement('button');
      btn.textContent = 'Copy PEAK_DEFS';
      btn.style.cssText = [
        'margin-top:10px', 'cursor:pointer', 'width:100%',
        'background:rgba(1,165,255,0.15)', 'color:#dff3ff',
        'border:1px solid rgba(1,165,255,0.5)', 'border-radius:5px',
        'padding:6px 10px', 'font:inherit',
      ].join(';');
      btn.onclick = () => {
        const text = peakAnchors.map(fmtLine).join('\n');
        if (navigator.clipboard) navigator.clipboard.writeText(text);
        btn.textContent = 'Copied ✓';
        setTimeout(() => { btn.textContent = 'Copy PEAK_DEFS'; }, 1200);
      };

      box.append(head, listEl, btn);
      document.body.appendChild(box);
    }
    function refresh() {
      if (listEl) listEl.textContent = peakAnchors.map(fmtLine).join('\n');
    }

    let dragAnchor = null;
    function onMove(e) {
      if (!dragAnchor) return;
      const hit = screenToTerrain(e.clientX, e.clientY)
               || screenAtDepth(e.clientX, e.clientY, dragAnchor.pos);
      dragAnchor.pos.copy(hit);
      refresh();
    }
    function onUp() {
      if (dragAnchor && dragAnchor.el) dragAnchor.el.style.cursor = 'grab';
      dragAnchor = null;
      debugDragging = false;
      window.removeEventListener('pointermove', onMove);
    }

    function activate() {
      if (active) return;
      active = true;
      for (const a of peakAnchors) {
        if (!a.el) continue;
        // override any responsive `display:none` so all six are pickable
        a.el.style.setProperty('display', 'block', 'important');
        a.el.style.pointerEvents = 'auto';
        a.el.style.cursor = 'grab';
        a.el.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          dragAnchor = a;
          debugDragging = true;
          a.el.style.cursor = 'grabbing';
          window.addEventListener('pointermove', onMove);
          window.addEventListener('pointerup', onUp, { once: true });
        });
      }
      buildOverlay();
      refresh();
    }

    window.addEventListener('keydown', (e) => {
      // Ignore when typing into inputs
      const tag = (e.target && e.target.tagName) || '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target?.isContentEditable) return;
      const k = (e.key || '').toLowerCase();
      if (k.length !== 1) return;
      typed = (typed + k).slice(-SEQUENCE.length);
      if (typed === SEQUENCE) activate();
    });
  }
  const annotationsEl = document.querySelector('.hero-3d-annotations');
  const projVec = new THREE.Vector3();
  let annotationsReady = false;
  // Each label hovers a fixed distance ABOVE its own peak. Both --peak-x
  // and --peak-y are set per frame from the projected peak position;
  // the dotted leader line has a fixed short length so the dot lands
  // exactly on the peak.
  const LABEL_HEIGHT_APPROX = 50;
  const LEADER_LINE_H = 28;
  // A couple of peaks sit low on the ridge where the default short stem
  // buries the label against the terrain. Give them a taller leader line
  // so both the label and its "leg" lift clearly above the peak.
  const LEADER_LINE_OVERRIDES = { kubernetes: 78, vms: 100, networking: 380 };
  function projectPeakLabels() {
    const r = canvas.getBoundingClientRect();
    if (r.width === 0) return;
    for (const a of peakAnchors) {
      if (!a.el) continue;
      projVec.copy(a.pos).project(camera);
      const sx = (projVec.x * 0.5 + 0.5) * r.width;
      const sy = (-projVec.y * 0.5 + 0.5) * r.height;
      const lineH = LEADER_LINE_OVERRIDES[a.id] || LEADER_LINE_H;
      a.el.style.setProperty('--peak-x', sx + 'px');
      // Label top = peak screen Y minus (line + label height) so the
      // leader-line dot lands precisely on the peak.
      const topY = sy - lineH - LABEL_HEIGHT_APPROX;
      a.el.style.setProperty('--peak-y', topY + 'px');
      a.el.style.setProperty('--peak-line-h', lineH + 'px');
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
      0.09, // strength — halved, only faint glow around peaks
      0.40, // radius
      0.92  // threshold — only the brightest highlights bloom
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
      if (debugDragging) return;   // freeze camera while dragging a label
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
    smoothed.x += (target.x - smoothed.x) * 0.010;
    smoothed.y += (target.y - smoothed.y) * 0.010;

    // Camera arc — position swings further than the lookAt point so
    // the parallax reads as rotation around the valley rather than
    // a flat slide.
    camera.position.x = smoothed.x * 0.85;
    camera.position.y = 5.0 + smoothed.y * -0.50;
    camera.lookAt(smoothed.x * 0.08, -0.6 + smoothed.y * 0.08, -4.0);

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
