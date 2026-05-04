/* Aenix — Interactive 3D Hero Scene
   Phase 1: wireframe terrain (simplex displacement), parallax, fog.
   Phase 2: central isometric Æ chip + edge glow + components +
            UnrealBloomPass postprocessing.
   Phase 3+ will add: energy flows, HTML annotations. */

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

  // 3D succeeded → hide the 2D fallback canvas so orb.js's IntersectionObserver
  // never starts its raf loop (display:none ⇒ never intersecting).
  const flowCanvas = document.getElementById('flow-canvas');
  if (flowCanvas) flowCanvas.style.display = 'none';

  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  renderer.setPixelRatio(DPR);
  renderer.setClearColor(0x000000, 0);

  /* ── Scene ────────────────────────────────────────────────── */
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0b0f1a, 12, 32);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0.6, 1.9, 5.6);
  camera.lookAt(0.8, 0.5, 0);

  /* ── Terrain ──────────────────────────────────────────────────
     Plane subdivided into a grid. Vertex shader displaces Y based
     on multi-octave fbm noise. Fragment shader paints lines blue
     with edge-fade for a "horizon" feel.                          */

  const TERRAIN_W = 32;
  const TERRAIN_H = 22;
  const SEG_X = 110; // sparser wireframe → cleaner read against the chip
  const SEG_Y = 76;

  const terrainGeo = new THREE.PlaneGeometry(TERRAIN_W, TERRAIN_H, SEG_X, SEG_Y);
  terrainGeo.rotateX(-Math.PI / 2);

  const terrainMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime:      { value: 0 },
      uColorA:    { value: new THREE.Color(0x01a5ff) }, // brand cyan
      uColorB:    { value: new THREE.Color(0x0971eb) }, // brand blue
      uColorEdge: { value: new THREE.Color(0x0b0f1a) }, // bg fade
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

      // multi-octave fbm
      float fbm(vec2 p){
        float a=0.5, sum=0.0;
        for(int i=0;i<5;i++){
          sum += a*snoise(p);
          p *= 2.02;
          a *= 0.5;
        }
        return sum;
      }

      void main(){
        vec3 p = position;
        vec2 uv2 = p.xz * 0.18;
        // slow drift through the noise field
        uv2.y += uTime * 0.04;
        float h = fbm(uv2);
        // amplify peaks, soften valleys
        h = h * 1.6;
        h = h + 0.25 * fbm(uv2 * 3.1);
        // ridge bias
        h = h * 0.55 + 0.25 * abs(snoise(uv2 * 0.7));
        p.y += h;

        vElevation = h;
        vec4 worldPos = modelMatrix * vec4(p, 1.0);
        vWorldPos = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: /* glsl */`
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform vec3 uColorEdge;
      varying vec3 vWorldPos;
      varying float vElevation;

      void main(){
        // mix two brand blues by elevation
        float t = clamp(vElevation * 0.5 + 0.5, 0.0, 1.0);
        vec3 col = mix(uColorB, uColorA, t);

        // brighten ridges
        col += pow(max(vElevation, 0.0), 2.0) * vec3(0.25, 0.55, 1.0);

        // radial vignette toward horizon
        float dist = length(vWorldPos.xz) / 16.0;
        float fade = smoothstep(1.05, 0.25, dist);

        // also fade closer to the camera edge so the chip area reads cleanly
        float nearFade = smoothstep(3.5, 7.0, length(vWorldPos.xz));

        float alpha = fade * nearFade * 0.85;
        gl_FragColor = vec4(col, alpha);
      }
    `,
  });

  const terrain = new THREE.Mesh(terrainGeo, terrainMat);
  terrain.position.y = -1.0;
  scene.add(terrain);

  /* ── Subtle backdrop glow plane ──────────────────────────── */
  const glowGeo = new THREE.PlaneGeometry(40, 24);
  const glowMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {},
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
    fragmentShader: `
      varying vec2 vUv;
      void main(){
        vec2 c = vUv - 0.5;
        float d = length(c);
        // soft purple hint, very low intensity
        vec3 col = mix(vec3(0.3,0.1,0.7), vec3(0.0,0.05,0.3), smoothstep(0.0,0.6,d));
        float a = smoothstep(0.55, 0.05, d) * 0.07;
        gl_FragColor = vec4(col, a);
      }
    `,
  });
  const glow = new THREE.Mesh(glowGeo, glowMat);
  glow.position.set(0, 0.3, -4);
  scene.add(glow);

  /* ── Central chip ────────────────────────────────────────────
     Isometric thin board with the Æ glyph rasterised onto its top
     face, glowing rim, and a few small "component" cubes scattered
     around it that bob slowly on Y.                              */

  const chipGroup = new THREE.Group();
  // Offset right so the hero text on the LEFT reads clean
  const CHIP_X = 1.6;
  chipGroup.position.set(CHIP_X, 0.5, 0);
  chipGroup.rotation.x = -0.21; // ~12° forward tilt
  chipGroup.rotation.y = 0.10;
  scene.add(chipGroup);

  // 1. Body (dark slab)
  const CHIP_W = 2.8, CHIP_T = 0.12, CHIP_D = 1.85;
  const chipBodyGeo = new THREE.BoxGeometry(CHIP_W, CHIP_T, CHIP_D);
  const chipBodyMat = new THREE.MeshBasicMaterial({ color: 0x0a1530 });
  chipGroup.add(new THREE.Mesh(chipBodyGeo, chipBodyMat));

  // 2. Edges — bright cyan lines, additive (bloom turns this into a glow).
  //    Drawn twice for a thicker visual line: outer offset slightly larger.
  const chipEdgesGeo = new THREE.EdgesGeometry(chipBodyGeo);
  const chipEdgesMat = new THREE.LineBasicMaterial({
    color: 0x4ec1ff,
    transparent: true,
    opacity: 1.0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  chipGroup.add(new THREE.LineSegments(chipEdgesGeo, chipEdgesMat));

  // Big bright pad UNDER the chip — extends well beyond on each side so its
  // edges peek out around the chip body and bloom into a strong halo.
  const rimGeo = new THREE.PlaneGeometry(CHIP_W * 2.4, CHIP_D * 2.2);
  const rimMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {},
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
    fragmentShader: `
      varying vec2 vUv;
      void main(){
        vec2 c = vUv - 0.5;
        // anisotropic — wider in X for the horizontal-streak look
        float d = length(c * vec2(0.55, 1.4));
        float a = smoothstep(0.55, 0.0, d) * 0.55;
        gl_FragColor = vec4(0.10, 0.7, 1.0, a);
      }
    `,
  });
  const rim = new THREE.Mesh(rimGeo, rimMat);
  rim.rotation.x = -Math.PI / 2;
  rim.position.y = -CHIP_T / 2 - 0.01;
  chipGroup.add(rim);

  // 3. Top face plane with Æ logo (rasterised SVG → CanvasTexture)
  const TEX_SIZE = 512;
  const logoCanvas = document.createElement('canvas');
  logoCanvas.width = logoCanvas.height = TEX_SIZE;
  const lctx = logoCanvas.getContext('2d');

  function drawLogoCanvas(img) {
    // Background — chip surface
    lctx.fillStyle = '#0a1530';
    lctx.fillRect(0, 0, TEX_SIZE, TEX_SIZE);

    // Subtle circuit hint: faint grid
    lctx.strokeStyle = 'rgba(1,165,255,0.10)';
    lctx.lineWidth = 1;
    for (let x = 32; x < TEX_SIZE; x += 32) {
      lctx.beginPath(); lctx.moveTo(x, 0); lctx.lineTo(x, TEX_SIZE); lctx.stroke();
    }
    for (let y = 32; y < TEX_SIZE; y += 32) {
      lctx.beginPath(); lctx.moveTo(0, y); lctx.lineTo(TEX_SIZE, y); lctx.stroke();
    }

    // Inner border — glowing
    lctx.shadowColor = '#01a5ff';
    lctx.shadowBlur = 24;
    lctx.strokeStyle = '#01a5ff';
    lctx.lineWidth = 3;
    lctx.strokeRect(28, 28, TEX_SIZE - 56, TEX_SIZE - 56);
    lctx.shadowBlur = 0;

    // Æ glyph centred
    if (img && img.complete && img.naturalWidth > 0) {
      const W = 240;
      const H = W * (img.naturalHeight / img.naturalWidth);
      lctx.shadowColor = '#01a5ff';
      lctx.shadowBlur = 18;
      lctx.drawImage(img, (TEX_SIZE - W) / 2, (TEX_SIZE - H) / 2, W, H);
      lctx.shadowBlur = 0;
    } else {
      // Fallback Æ (text)
      lctx.font = 'bold 220px Inter, sans-serif';
      lctx.fillStyle = '#01a5ff';
      lctx.textAlign = 'center';
      lctx.textBaseline = 'middle';
      lctx.shadowColor = '#01a5ff';
      lctx.shadowBlur = 18;
      lctx.fillText('Æ', TEX_SIZE / 2, TEX_SIZE / 2);
      lctx.shadowBlur = 0;
    }
  }

  // Initial draw with placeholder; refresh once SVG loads
  drawLogoCanvas(null);
  const logoTex = new THREE.CanvasTexture(logoCanvas);
  logoTex.colorSpace = THREE.SRGBColorSpace;
  logoTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

  const logoImg = new Image();
  logoImg.onload = () => {
    drawLogoCanvas(logoImg);
    logoTex.needsUpdate = true;
  };
  logoImg.onerror = () => { /* keep fallback */ };
  logoImg.src = '/images/logo-icon.svg';

  const topPlaneGeo = new THREE.PlaneGeometry(CHIP_W * 0.96, CHIP_D * 0.96);
  const topPlaneMat = new THREE.MeshBasicMaterial({
    map: logoTex,
    transparent: true,
  });
  const topPlane = new THREE.Mesh(topPlaneGeo, topPlaneMat);
  topPlane.rotation.x = -Math.PI / 2;
  topPlane.position.y = CHIP_T / 2 + 0.001;
  chipGroup.add(topPlane);

  // 4. Outer halo plane behind chip (additive radial gradient, subtle)
  const haloGeo = new THREE.PlaneGeometry(4.4, 3.0);
  const haloMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
    fragmentShader: `
      uniform float uTime;
      varying vec2 vUv;
      void main(){
        vec2 c = vUv - 0.5;
        float d = length(c * vec2(1.0, 1.5));
        float pulse = 0.90 + 0.10 * sin(uTime * 1.2);
        float a = smoothstep(0.5, 0.0, d) * 0.18 * pulse;
        // brand cyan core, fading to deep blue at edge (no purple here)
        vec3 col = mix(vec3(0.0,0.65,1.0), vec3(0.05,0.15,0.6), smoothstep(0.0, 0.5, d));
        gl_FragColor = vec4(col, a);
      }
    `,
  });
  const halo = new THREE.Mesh(haloGeo, haloMat);
  halo.rotation.x = -Math.PI / 2;
  halo.position.y = -CHIP_T / 2 - 0.02;
  chipGroup.add(halo);

  // 5. Surrounding components — small bobbing cubes
  const components = [];
  const componentColors = [0x01a5ff, 0x0971eb, 0x661be1, 0x94dee0];
  const positions = [
    [-0.95, -0.65], [ 0.85, -0.55], [ 1.10,  0.50],
    [-1.10,  0.45], [ 0.45,  0.70], [-0.40, -0.70],
  ];
  for (let i = 0; i < positions.length; i++) {
    const [px, pz] = positions[i];
    const size = 0.16 + Math.random() * 0.10;
    const compGeo = new THREE.BoxGeometry(size, size * 0.45, size);
    const compMat = new THREE.MeshBasicMaterial({
      color: componentColors[i % componentColors.length],
    });
    const cube = new THREE.Mesh(compGeo, compMat);
    cube.position.set(px, CHIP_T / 2 + size * 0.45 / 2 + 0.005, pz);
    // glowing edge wireframe
    const edgeGeo = new THREE.EdgesGeometry(compGeo);
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x01a5ff,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    cube.add(new THREE.LineSegments(edgeGeo, edgeMat));
    cube.userData.bobPhase = Math.random() * Math.PI * 2;
    cube.userData.bobAmp   = 0.025 + Math.random() * 0.025;
    cube.userData.baseY    = cube.position.y;
    chipGroup.add(cube);
    components.push(cube);
  }

  /* ── Energy flows ────────────────────────────────────────────
     Left lane: turbulent purple particles drifting toward the chip,
                their velocity perturbed by sin/cos curl-noise.
     Right lane: organised cyan particles flowing outward in 5 fixed
                 horizontal "lanes", giving a beam-stream feel.
     Both use additive Points; bloom lifts them to glowing beads.   */

  // Soft sprite texture (radial gradient → punch-out instead of square pixels)
  function makeSpriteTex() {
    const S = 64;
    const cv = document.createElement('canvas');
    cv.width = cv.height = S;
    const cx = cv.getContext('2d');
    const g = cx.createRadialGradient(S/2, S/2, 0, S/2, S/2, S/2);
    g.addColorStop(0.0, 'rgba(255,255,255,1.0)');
    g.addColorStop(0.4, 'rgba(255,255,255,0.6)');
    g.addColorStop(1.0, 'rgba(255,255,255,0.0)');
    cx.fillStyle = g;
    cx.fillRect(0, 0, S, S);
    const t = new THREE.CanvasTexture(cv);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }
  const spriteTex = makeSpriteTex();

  // ── LEFT FLOW (turbulent purple) ─────────────────────────────
  const LEFT_COUNT = 600;
  const LEFT_SPAWN_X = -6.0;          // far left
  const LEFT_END_X   = CHIP_X - 1.6;  // re-spawn just before chip
  const leftPos = new Float32Array(LEFT_COUNT * 3);
  const leftSpawn = (i) => {
    leftPos[i*3]   = LEFT_SPAWN_X - Math.random() * 2.5;     // x ∈ [-8.5, -6.0]
    leftPos[i*3+1] = (Math.random() - 0.5) * 2.4 + 0.4;
    leftPos[i*3+2] = (Math.random() - 0.5) * 2.0;
  };
  for (let i = 0; i < LEFT_COUNT; i++) leftSpawn(i);
  const leftGeo = new THREE.BufferGeometry();
  leftGeo.setAttribute('position', new THREE.BufferAttribute(leftPos, 3));
  const leftMat = new THREE.PointsMaterial({
    color: 0xb070ff,
    size: 0.10,
    map: spriteTex,
    alphaTest: 0.001,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const leftPoints = new THREE.Points(leftGeo, leftMat);
  scene.add(leftPoints);

  // ── RIGHT FLOW (ordered cyan beams) ──────────────────────────
  const RIGHT_LANES = 5;
  const RIGHT_PER_LANE = 80;
  const RIGHT_COUNT = RIGHT_LANES * RIGHT_PER_LANE;
  const RIGHT_START_X = CHIP_X + 1.5; // start just past chip right edge
  const RIGHT_END_X   = 8.5;
  const rightPos = new Float32Array(RIGHT_COUNT * 3);
  const rightLane = new Int8Array(RIGHT_COUNT);
  for (let l = 0; l < RIGHT_LANES; l++) {
    for (let j = 0; j < RIGHT_PER_LANE; j++) {
      const i = l * RIGHT_PER_LANE + j;
      rightPos[i*3]   = RIGHT_START_X + Math.random() * (RIGHT_END_X - RIGHT_START_X);
      rightPos[i*3+1] = 0.55 + (l - (RIGHT_LANES - 1) / 2) * 0.16;
      rightPos[i*3+2] = (l - (RIGHT_LANES - 1) / 2) * 0.18 + (Math.random() - 0.5) * 0.05;
      rightLane[i] = l;
    }
  }
  const rightGeo = new THREE.BufferGeometry();
  rightGeo.setAttribute('position', new THREE.BufferAttribute(rightPos, 3));
  const rightMat = new THREE.PointsMaterial({
    color: 0x01a5ff,
    size: 0.07,
    map: spriteTex,
    alphaTest: 0.001,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const rightPoints = new THREE.Points(rightGeo, rightMat);
  scene.add(rightPoints);

  /* ── Postprocessing — UnrealBloom (skipped on low-end CPUs) */
  const lowEnd = (navigator.hardwareConcurrency || 4) < 4;
  let composer = null;
  if (!lowEnd) {
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(canvas.clientWidth, canvas.clientHeight),
      0.85, // strength
      0.55, // radius
      0.78  // threshold — chip edges, halo, sprites bloom; HTML text doesn't
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
  let visible = true;
  const start = performance.now();

  function frame() {
    const t = (performance.now() - start) * 0.001;

    // smooth mouse
    smoothed.x += (target.x - smoothed.x) * 0.04;
    smoothed.y += (target.y - smoothed.y) * 0.04;

    camera.position.x = 0.6 + smoothed.x * 0.40;
    camera.position.y = 1.9 + smoothed.y * -0.25;
    camera.lookAt(0.8, 0.5 + smoothed.y * 0.06, 0);

    if (!reduceMotion) {
      terrainMat.uniforms.uTime.value = t;
      haloMat.uniforms.uTime.value = t;

      // gentle chip rotation drift
      chipGroup.rotation.y = 0.06 + Math.sin(t * 0.25) * 0.05;

      // bob each component
      for (const c of components) {
        c.position.y = c.userData.baseY + Math.sin(t * 1.2 + c.userData.bobPhase) * c.userData.bobAmp;
        c.rotation.y = t * 0.3 + c.userData.bobPhase;
      }

      /* Energy flows */
      // Left turbulent: drift toward chip with sin/cos perturbation
      const lp = leftGeo.attributes.position.array;
      for (let i = 0; i < LEFT_COUNT; i++) {
        const ix = i * 3;
        const x = lp[ix], y = lp[ix+1], z = lp[ix+2];
        // pseudo curl-noise: perpendicular pair of sin fields
        const nx =  Math.sin(y * 1.6 + t * 0.45) + Math.cos(z * 1.3 - t * 0.22);
        const ny =  Math.cos(x * 1.4 + t * 0.30) - Math.sin(z * 1.7 + t * 0.18);
        const nz =  Math.sin(x * 1.2 - t * 0.25) + Math.cos(y * 1.1 + t * 0.32);
        lp[ix]   += 0.030 + nx * 0.008;
        lp[ix+1] += ny * 0.006;
        lp[ix+2] += nz * 0.006;
        // re-spawn just before the chip
        if (lp[ix] > LEFT_END_X) {
          lp[ix]   = LEFT_SPAWN_X - Math.random() * 2.5;
          lp[ix+1] = (Math.random() - 0.5) * 2.4 + 0.4;
          lp[ix+2] = (Math.random() - 0.5) * 2.0;
        }
      }
      leftGeo.attributes.position.needsUpdate = true;

      // Right organised: steady rightward, thin lane wobble
      const rp = rightGeo.attributes.position.array;
      for (let i = 0; i < RIGHT_COUNT; i++) {
        const ix = i * 3;
        rp[ix] += 0.045;
        rp[ix+1] += Math.sin(t * 3.0 + i) * 0.0008;
        if (rp[ix] > RIGHT_END_X) {
          rp[ix] = RIGHT_START_X;
        }
      }
      rightGeo.attributes.position.needsUpdate = true;
    }

    if (composer) composer.render();
    else renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  }

  /* ── Pause when offscreen ────────────────────────────────── */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      visible = e.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(frame);
      else if (!visible && raf) { cancelAnimationFrame(raf); raf = null; }
    });
  }, { threshold: 0.05 });
  obs.observe(canvas);

  // Kick off
  raf = requestAnimationFrame(frame);
})();
