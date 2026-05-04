/* Aenix — Interactive 3D Hero Scene
   Phase 1: wireframe terrain with simplex-noise displacement,
   camera parallax on mouse, reduced-motion + offscreen pause.
   Phase 2+ will add: central chip, energy flows, annotations, bloom. */

import * as THREE from 'three';

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

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 4.5, 9);
  camera.lookAt(0, 0.2, 0);

  /* ── Terrain ──────────────────────────────────────────────────
     Plane subdivided into a grid. Vertex shader displaces Y based
     on multi-octave fbm noise. Fragment shader paints lines blue
     with edge-fade for a "horizon" feel.                          */

  const TERRAIN_W = 32;
  const TERRAIN_H = 22;
  const SEG_X = 160;
  const SEG_Y = 110;

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
        float nearFade = smoothstep(2.5, 5.5, length(vWorldPos.xz));

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
        // central purple hint
        vec3 col = mix(vec3(0.4,0.1,0.9), vec3(0.0,0.1,0.4), smoothstep(0.0,0.6,d));
        float a = smoothstep(0.55, 0.05, d) * 0.18;
        gl_FragColor = vec4(col, a);
      }
    `,
  });
  const glow = new THREE.Mesh(glowGeo, glowMat);
  glow.position.set(0, 0.3, -4);
  scene.add(glow);

  /* ── Resize ──────────────────────────────────────────────── */
  function resize() {
    const r = canvas.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    renderer.setSize(r.width, r.height, false);
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

    camera.position.x = smoothed.x * 0.6;
    camera.position.y = 4.5 + smoothed.y * -0.4;
    camera.lookAt(0, 0.2 + smoothed.y * 0.1, 0);

    if (!reduceMotion) {
      terrainMat.uniforms.uTime.value = t;
    }

    renderer.render(scene, camera);
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
