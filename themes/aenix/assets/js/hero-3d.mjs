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
  scene.fog = new THREE.Fog(0x0b0f1a, 14, 38);

  // Camera looks forward into a valley — placed slightly above the floor,
  // tilted just enough to see the distant mountains rise.
  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
  camera.position.set(0, 1.6, 9.0);
  camera.lookAt(0, 1.0, -2.0);

  /* ── Valley terrain ──────────────────────────────────────────
     Big plane lying flat, displaced by simplex noise. A "valley
     mask" suppresses height around x=0 so the centre is flat and
     the text sits cleanly. Mountains rise on the left and right,
     fading to fog at the back.                                   */

  const TERRAIN_W = 50;
  const TERRAIN_D = 38;
  const SEG_X = 180;
  const SEG_Y = 120;

  const terrainGeo = new THREE.PlaneGeometry(TERRAIN_W, TERRAIN_D, SEG_X, SEG_Y);
  terrainGeo.rotateX(-Math.PI / 2);

  const terrainMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime:    { value: 0 },
      uColorLo: { value: new THREE.Color(0x0971eb) }, // brand blue (low)
      uColorHi: { value: new THREE.Color(0x01a5ff) }, // brand cyan (high)
      uAccent:  { value: new THREE.Color(0x661be1) }, // brand purple (peak accent)
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
        // FOREGROUND BOOST — peaks closer to the camera (positive p.z)
        // rise higher than distant ones, so the silhouette feels grounded.
        float frontBoost = smoothstep(-12.0, 6.0, p.z) * 0.5;

        // amplitude in metres
        float amp = 4.6;
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
      uniform vec3 uAccent;
      varying vec3 vWorldPos;
      varying float vElevation;

      void main(){
        // colour by elevation
        float t = clamp(vElevation / 4.0, 0.0, 1.0);
        vec3 col = mix(uColorLo, uColorHi, t);

        // subtle purple bleed on the very tallest peaks
        col = mix(col, uAccent, pow(t, 2.2) * 0.35);

        // ridge accent — extra brightness on tall peaks
        col += pow(max(vElevation - 1.5, 0.0) * 0.5, 1.6) * vec3(0.4, 0.7, 1.0);

        // distance fade toward the back (foggy horizon)
        float distFade = smoothstep(-18.0, 0.0, vWorldPos.z);

        // valley reveal — keep the centre band quiet
        float valleyDim = smoothstep(0.0, 3.0, abs(vWorldPos.x));
        valleyDim = mix(0.18, 1.0, valleyDim);

        // softly fade the very front edge so the hero copy never fights wires
        float frontFade = 1.0 - smoothstep(2.0, 9.5, vWorldPos.z);
        // when frontFade is high we are NEAR the camera ⇒ dim
        float nearDim = mix(0.25, 1.0, smoothstep(0.0, 1.0, 1.0 - frontFade));

        float alpha = distFade * valleyDim * nearDim * 0.85;
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

  /* ── Postprocessing — UnrealBloom (skipped on low-end CPUs) */
  const lowEnd = (navigator.hardwareConcurrency || 4) < 4;
  let composer = null;
  if (!lowEnd) {
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(canvas.clientWidth, canvas.clientHeight),
      0.55, // strength
      0.50, // radius
      0.82  // threshold
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
    const t = (performance.now() - start) * 0.001;

    smoothed.x += (target.x - smoothed.x) * 0.04;
    smoothed.y += (target.y - smoothed.y) * 0.04;

    // very subtle camera parallax — keep the valley framing stable
    camera.position.x = smoothed.x * 0.35;
    camera.position.y = 1.6 + smoothed.y * -0.20;
    camera.lookAt(smoothed.x * 0.05, 1.0 + smoothed.y * 0.05, -2.0);

    if (composer) composer.render();
    else renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  }

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
