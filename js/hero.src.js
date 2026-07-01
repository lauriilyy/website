/* ============================================================
   bios-Welt — interactive neural-network hero
   Three.js + GSAP ScrollTrigger + Lenis, with graceful fallbacks.
   ============================================================ */

import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const PILLARS = [
  { key: 'sicherheit', fx: 0.20, color: 0xB08D57 },
  { key: 'ki',         fx: 0.50, color: 0x3FA9F5 },
  { key: 'helpdesk',   fx: 0.80, color: 0x57B08D },
];
const HUB_FY = 0.56;

const $ = (s) => document.querySelector(s);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse = matchMedia('(pointer: coarse)').matches;
const isMobile = matchMedia('(max-width: 760px)').matches;

const el = {
  scene: $('#hero'),
  sticky: $('.scene__sticky'),
  mount: $('#scene-canvas'),
  poster: $('#scene-poster'),
  headline: $('#scene-headline'),
  pillarsWrap: $('#pillars'),
  pillars: Array.from(document.querySelectorAll('.pillar')),
};

/* -------------------------------------------------------------
   Pillar subpage overlay (works with or without WebGL)
   ------------------------------------------------------------- */
function setupSubpages() {
  const overlay = $('#subpage');
  const scaler = $('#subpage-scaler');
  const body = $('#subpage-body');
  const back = $('#subpage-back');
  let open = false;

  function openPage(key, originEl) {
    const tpl = document.getElementById('tpl-' + key);
    if (!tpl) return;
    body.innerHTML = '';
    body.appendChild(tpl.content.cloneNode(true));

    // Zoom origin = clicked pillar's screen position (fly-into-node feel)
    if (originEl) {
      const r = originEl.getBoundingClientRect();
      scaler.style.transformOrigin = `${r.left + r.width / 2}px ${r.top + r.height / 2}px`;
    } else {
      scaler.style.transformOrigin = '50% 50%';
    }

    overlay.hidden = false;
    scaler.scrollTop = 0;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => overlay.classList.add('is-open'));
    });
    document.body.style.overflow = 'hidden';
    open = true;
    back.focus();

    // Links marked data-close dismiss the overlay before jumping to #kontakt
    body.querySelectorAll('[data-close]').forEach((a) => {
      a.addEventListener('click', () => closePage());
    });
  }

  function closePage() {
    if (!open) return;
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    open = false;
    const done = () => { overlay.hidden = true; scaler.removeEventListener('transitionend', done); };
    scaler.addEventListener('transitionend', done);
    setTimeout(() => { if (!open) overlay.hidden = true; }, 700);
  }

  back.addEventListener('click', closePage);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) closePage(); });

  el.pillars.forEach((btn) => {
    btn.addEventListener('click', () => openPage(btn.dataset.pillar, btn));
  });

  return { openPage, closePage };
}

/* -------------------------------------------------------------
   Static fallback (reduced motion / no WebGL / import failure)
   ------------------------------------------------------------- */
function staticFallback() {
  el.pillarsWrap.classList.add('is-active');
  el.pillarsWrap.setAttribute('aria-hidden', 'false');
  el.pillars.forEach((btn, i) => {
    btn.style.left = (PILLARS[i].fx * 100) + '%';
    btn.style.top = '66%';
    btn.style.opacity = '1';
    btn.style.pointerEvents = 'auto';
  });
}

/* -------------------------------------------------------------
   Mobile menu bar background on scroll
   ------------------------------------------------------------- */
function setupTopbar() {
  const bar = $('.topbar');
  const onScroll = () => bar.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* -------------------------------------------------------------
   Main WebGL scene
   ------------------------------------------------------------- */
function initScene() {
  gsap.registerPlugin(ScrollTrigger);

  const NODE_COUNT = isMobile ? 44 : 72;
  const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);

  // ---- renderer / camera / scene ----
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(0x000000, 0);
  el.mount.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 1, 5000);
  camera.position.z = 900;

  let W = 0, H = 0, visW = 0, visH = 0;
  function computeView() {
    W = el.sticky.clientWidth; H = el.sticky.clientHeight;
    camera.aspect = W / H; camera.updateProjectionMatrix();
    renderer.setSize(W, H, false);
    visH = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    visW = visH * camera.aspect;
    mat.uniforms.uScale.value = H * dpr * 0.5;
  }
  const s2w = (fx, fy, z = 0) => new THREE.Vector3((fx - 0.5) * visW, (0.5 - fy) * visH, z);

  // ---- node shader material (per-point size + alpha + colour) ----
  const mat = new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 400 } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `
      attribute float aSize; attribute float aAlpha; attribute vec3 aColor;
      varying float vAlpha; varying vec3 vColor; uniform float uScale;
      void main(){
        vAlpha = aAlpha; vColor = aColor;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * (uScale / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      varying float vAlpha; varying vec3 vColor;
      void main(){
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        float a = pow(smoothstep(0.5, 0.0, d), 1.5);
        gl_FragColor = vec4(vColor, a * vAlpha);
      }`,
  });

  // ---- build nodes ----
  const GOLD = new THREE.Color(0xB08D57);
  const hubColors = PILLARS.map((p) => new THREE.Color(p.color));
  const nodes = [];
  // temp view for hub assignment (screen-fraction space; aspect-independent enough)
  for (let i = 0; i < NODE_COUNT; i++) {
    const fx = Math.random(), fy = Math.random();
    // assign to nearest hub by x-fraction
    let hub = 0, best = Infinity;
    PILLARS.forEach((p, hi) => { const d = Math.abs(fx - p.fx); if (d < best) { best = d; hub = hi; } });
    nodes.push({ fx, fy, fz: Math.random(), hub, phase: Math.random() * Math.PI * 2, spd: 0.5 + Math.random() * 0.8,
      home: new THREE.Vector3(), pos: new THREE.Vector3(), sig: Math.random() });
  }

  const posArr = new Float32Array(NODE_COUNT * 3);
  const sizeArr = new Float32Array(NODE_COUNT);
  const alphaArr = new Float32Array(NODE_COUNT);
  const colArr = new Float32Array(NODE_COUNT * 3);
  nodes.forEach((n, i) => {
    const base = i % 9 === 0 ? 9 : 4 + Math.random() * 3;
    sizeArr[i] = base; alphaArr[i] = 0.9;
    colArr[i * 3] = GOLD.r; colArr[i * 3 + 1] = GOLD.g; colArr[i * 3 + 2] = GOLD.b;
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizeArr, 1));
  geo.setAttribute('aAlpha', new THREE.BufferAttribute(alphaArr, 1));
  geo.setAttribute('aColor', new THREE.BufferAttribute(colArr, 3));
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  scene.add(points);

  // ---- idle connection pairs (nearest neighbours) ----
  const pairs = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const dists = [];
    for (let j = 0; j < NODE_COUNT; j++) if (j !== i) {
      const a = nodes[i], b = nodes[j];
      dists.push({ j, d: (a.fx - b.fx) ** 2 + (a.fy - b.fy) ** 2 });
    }
    dists.sort((x, y) => x.d - y.d);
    for (let k = 0; k < 3; k++) {
      const j = dists[k].j;
      if (i < j) pairs.push([i, j]); else if (!pairs.some(p => p[0] === j && p[1] === i)) pairs.push([j, i]);
    }
  }
  const linePos = new Float32Array(pairs.length * 6);
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
  const lineMat = new THREE.LineBasicMaterial({ color: 0x3FA9F5, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false });
  const idleLines = new THREE.LineSegments(lineGeo, lineMat);
  idleLines.frustumCulled = false;
  scene.add(idleLines);

  // ---- converging strands (node -> its hub) ----
  const strandPos = new Float32Array(NODE_COUNT * 6);
  const strandCol = new Float32Array(NODE_COUNT * 6);
  nodes.forEach((n, i) => {
    const c = hubColors[n.hub];
    for (const off of [0, 3]) { strandCol[i * 6 + off] = c.r; strandCol[i * 6 + off + 1] = c.g; strandCol[i * 6 + off + 2] = c.b; }
  });
  const strandGeo = new THREE.BufferGeometry();
  strandGeo.setAttribute('position', new THREE.BufferAttribute(strandPos, 3));
  strandGeo.setAttribute('color', new THREE.BufferAttribute(strandCol, 3));
  const strandMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  const strands = new THREE.LineSegments(strandGeo, strandMat);
  strands.frustumCulled = false;
  scene.add(strands);

  // ---- signals travelling inward along strands ----
  const sigPos = new Float32Array(NODE_COUNT * 3);
  const sigSize = new Float32Array(NODE_COUNT);
  const sigAlpha = new Float32Array(NODE_COUNT);
  const sigCol = new Float32Array(NODE_COUNT * 3);
  nodes.forEach((n, i) => { sigSize[i] = 5; const c = hubColors[n.hub]; sigCol[i * 3] = c.r; sigCol[i * 3 + 1] = c.g; sigCol[i * 3 + 2] = c.b; });
  const sigGeo = new THREE.BufferGeometry();
  sigGeo.setAttribute('position', new THREE.BufferAttribute(sigPos, 3));
  sigGeo.setAttribute('aSize', new THREE.BufferAttribute(sigSize, 1));
  sigGeo.setAttribute('aAlpha', new THREE.BufferAttribute(sigAlpha, 1));
  sigGeo.setAttribute('aColor', new THREE.BufferAttribute(sigCol, 3));
  const signals = new THREE.Points(sigGeo, mat);
  signals.frustumCulled = false;
  scene.add(signals);

  // ---- hub glow sprites ----
  const hubMeshes = PILLARS.map((p) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(3), 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(new Float32Array([26]), 1));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(new Float32Array([0]), 1));
    const c = new THREE.Color(p.color);
    g.setAttribute('aColor', new THREE.BufferAttribute(new Float32Array([c.r, c.g, c.b]), 3));
    const m = new THREE.Points(g, mat);
    m.frustumCulled = false; scene.add(m); return m;
  });

  // ---- cursor node + links ----
  const curGeo = new THREE.BufferGeometry();
  curGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(3), 3));
  curGeo.setAttribute('aSize', new THREE.BufferAttribute(new Float32Array([16]), 1));
  curGeo.setAttribute('aAlpha', new THREE.BufferAttribute(new Float32Array([0]), 1));
  curGeo.setAttribute('aColor', new THREE.BufferAttribute(new Float32Array([GOLD.r, GOLD.g, GOLD.b]), 3));
  const cursorNode = new THREE.Points(curGeo, mat);
  cursorNode.frustumCulled = false; scene.add(cursorNode);

  const CUR_LINKS = 7;
  const clPos = new Float32Array(CUR_LINKS * 6);
  const clGeo = new THREE.BufferGeometry();
  clGeo.setAttribute('position', new THREE.BufferAttribute(clPos, 3));
  const clMat = new THREE.LineBasicMaterial({ color: 0xE8C583, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  const cursorLinks = new THREE.LineSegments(clGeo, clMat);
  cursorLinks.frustumCulled = false; scene.add(cursorLinks);

  // ---- interaction / scroll state ----
  const hubsW = PILLARS.map(() => new THREE.Vector3());
  function layout() {
    computeView();
    nodes.forEach((n) => {
      n.home.set((n.fx - 0.5) * visW * 0.98, (0.5 - n.fy) * visH * 0.82, (n.fz - 0.5) * 520);
    });
    PILLARS.forEach((p, i) => hubsW[i].copy(s2w(p.fx, HUB_FY, 0)));
  }
  layout();

  const mouse = { x: 0, y: 0, tx: 0, ty: 0, vel: 0, has: false };
  const world = new THREE.Vector3();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const ray = new THREE.Raycaster();
  function onMove(e) {
    const r = renderer.domElement.getBoundingClientRect();
    mouse.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
    mouse.ty = -((e.clientY - r.top) / r.height) * 2 + 1;
    mouse.has = true;
  }
  if (!coarse) window.addEventListener('pointermove', onMove, { passive: true });

  let p = 0; // scroll progress 0..1
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  ScrollTrigger.create({ trigger: el.scene, start: 'top top', end: 'bottom bottom', scrub: true, onUpdate: (self) => { p = self.progress; } });

  // pause rendering when scene is off-screen
  let visible = true;
  new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; }, { threshold: 0 })
    .observe(el.scene);

  window.addEventListener('resize', layout);

  // reveal: swap poster to dim depth layer
  requestAnimationFrame(() => el.poster.classList.add('is-hidden'));

  // ---- render loop ----
  const tmp = new THREE.Vector3();
  const proj = new THREE.Vector3();
  let last = performance.now();

  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    lenis.raf(now);

    if (visible) {
      const t = now / 1000;
      const convergence = smoothstep(0.35, 0.8, p);
      const cursorFade = (1 - smoothstep(0.26, 0.42, p)) * (coarse ? 0 : 1);
      const pillarProg = smoothstep(0.56, 0.72, p);

      // cursor world position + velocity
      mouse.x += (mouse.tx - mouse.x) * 0.12;
      mouse.y += (mouse.ty - mouse.y) * 0.12;
      ray.setFromCamera({ x: mouse.x, y: mouse.y }, camera);
      ray.ray.intersectPlane(plane, world);
      const dvx = mouse.tx - mouse.x, dvy = mouse.ty - mouse.y;
      mouse.vel = lerp(mouse.vel, Math.min(1, Math.hypot(dvx, dvy) * 6), 0.2);

      // nodes
      const breathe = 1 + Math.sin(t * 0.6) * 0.015;
      for (let i = 0; i < NODE_COUNT; i++) {
        const n = nodes[i];
        // idle drift
        tmp.set(
          n.home.x + Math.sin(t * n.spd + n.phase) * 14,
          n.home.y + Math.cos(t * n.spd * 0.9 + n.phase) * 14,
          n.home.z + Math.sin(t * 0.4 + n.phase) * 20
        );
        // cursor attraction (State A)
        if (cursorFade > 0.01 && mouse.has) {
          const dx = world.x - tmp.x, dy = world.y - tmp.y, dz = world.z - tmp.z;
          const dist = Math.hypot(dx, dy, dz);
          const pull = Math.max(0, 1 - dist / 320) * 26 * cursorFade;
          if (pull > 0) { tmp.x += (dx / dist) * pull; tmp.y += (dy / dist) * pull; tmp.z += (dz / dist) * pull; }
        }
        // converge partway toward hub (State B)
        const hub = hubsW[n.hub];
        n.pos.set(
          lerp(tmp.x, hub.x, convergence * 0.62) * breathe,
          lerp(tmp.y, hub.y, convergence * 0.62) * breathe,
          lerp(tmp.z, hub.z, convergence * 0.62)
        );
        posArr[i * 3] = n.pos.x; posArr[i * 3 + 1] = n.pos.y; posArr[i * 3 + 2] = n.pos.z;

        // near-cursor brightness bump
        let a = 0.85;
        if (cursorFade > 0.01) {
          const d = Math.hypot(world.x - n.pos.x, world.y - n.pos.y);
          a += Math.max(0, 1 - d / 300) * 0.5 * cursorFade;
        }
        alphaArr[i] = a;

        // signal travels inward along strand
        n.sig += dt * (0.25 + n.spd * 0.35);
        if (n.sig > 1) n.sig -= 1;
        const f = n.sig;
        sigPos[i * 3] = lerp(n.pos.x, hub.x, f);
        sigPos[i * 3 + 1] = lerp(n.pos.y, hub.y, f);
        sigPos[i * 3 + 2] = lerp(n.pos.z, hub.z, f);
        sigAlpha[i] = convergence * Math.sin(f * Math.PI);
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.aAlpha.needsUpdate = true;
      sigGeo.attributes.position.needsUpdate = true;
      sigGeo.attributes.aAlpha.needsUpdate = true;

      // idle lines
      for (let k = 0; k < pairs.length; k++) {
        const a = nodes[pairs[k][0]].pos, b = nodes[pairs[k][1]].pos;
        linePos[k * 6] = a.x; linePos[k * 6 + 1] = a.y; linePos[k * 6 + 2] = a.z;
        linePos[k * 6 + 3] = b.x; linePos[k * 6 + 4] = b.y; linePos[k * 6 + 5] = b.z;
      }
      lineGeo.attributes.position.needsUpdate = true;
      lineMat.opacity = lerp(0.4, 0.08, convergence);

      // strands
      for (let i = 0; i < NODE_COUNT; i++) {
        const a = nodes[i].pos, hub = hubsW[nodes[i].hub];
        strandPos[i * 6] = a.x; strandPos[i * 6 + 1] = a.y; strandPos[i * 6 + 2] = a.z;
        strandPos[i * 6 + 3] = hub.x; strandPos[i * 6 + 4] = hub.y; strandPos[i * 6 + 5] = hub.z;
      }
      strandGeo.attributes.position.needsUpdate = true;
      strandMat.opacity = convergence * 0.5;

      // hubs
      hubMeshes.forEach((m, i) => {
        m.geometry.attributes.position.setXYZ(0, hubsW[i].x, hubsW[i].y, hubsW[i].z);
        m.geometry.attributes.position.needsUpdate = true;
        m.geometry.attributes.aSize.setX(0, 22 + convergence * 30 + Math.sin(t * 1.4 + i) * 3);
        m.geometry.attributes.aSize.needsUpdate = true;
        m.geometry.attributes.aAlpha.setX(0, convergence * 0.9);
        m.geometry.attributes.aAlpha.needsUpdate = true;
      });

      // cursor node + links
      curGeo.attributes.position.setXYZ(0, world.x, world.y, world.z);
      curGeo.attributes.position.needsUpdate = true;
      curGeo.attributes.aAlpha.setX(0, cursorFade * (0.5 + mouse.vel * 0.5));
      curGeo.attributes.aAlpha.needsUpdate = true;
      if (cursorFade > 0.01 && mouse.has) {
        const near = nodes.map((n, i) => ({ i, d: Math.hypot(world.x - n.pos.x, world.y - n.pos.y, world.z - n.pos.z) }))
          .sort((x, y) => x.d - y.d).slice(0, CUR_LINKS);
        for (let k = 0; k < CUR_LINKS; k++) {
          const n = nodes[near[k].i].pos;
          clPos[k * 6] = world.x; clPos[k * 6 + 1] = world.y; clPos[k * 6 + 2] = world.z;
          clPos[k * 6 + 3] = n.x; clPos[k * 6 + 4] = n.y; clPos[k * 6 + 5] = n.z;
        }
        clGeo.attributes.position.needsUpdate = true;
        clMat.opacity = cursorFade * (0.15 + mouse.vel * 0.75);
      } else {
        clMat.opacity = 0;
      }

      // headline fade/parallax
      const hOp = 1 - smoothstep(0.04, 0.28, p);
      el.headline.style.opacity = hOp;
      el.headline.style.transform = `translateY(calc(-50% - ${p * 40}px))`;
      el.headline.style.pointerEvents = hOp < 0.1 ? 'none' : 'auto';

      // pillars: project hubs -> screen, place DOM buttons
      el.pillarsWrap.classList.toggle('is-active', pillarProg > 0.5);
      el.pillarsWrap.setAttribute('aria-hidden', pillarProg > 0.5 ? 'false' : 'true');
      el.pillars.forEach((btn, i) => {
        proj.copy(hubsW[i]).project(camera);
        btn.style.left = ((proj.x * 0.5 + 0.5) * W) + 'px';
        btn.style.top = ((-proj.y * 0.5 + 0.5) * H) + 'px';
        btn.style.opacity = pillarProg;
        btn.style.pointerEvents = pillarProg > 0.6 ? 'auto' : 'none';
      });

      renderer.render(scene, camera);
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* -------------------------------------------------------------
   Boot
   ------------------------------------------------------------- */
setupSubpages();
setupTopbar();

if (reduceMotion || !window.WebGLRenderingContext) {
  staticFallback();
} else {
  try {
    initScene();
  } catch (err) {
    console.warn('bios-Welt: WebGL scene unavailable, using static fallback.', err);
    staticFallback();
  }
}
