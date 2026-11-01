import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Gamepad2, Play, Sparkles, Activity, Layers, RotateCcw } from 'lucide-react';

export const InteractiveLab3D: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<'pbr' | 'wireframe' | 'particles'>('pbr');
  const [fps, setFps] = useState(60);
  const [particleCount, setParticleCount] = useState(1200);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = 400;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x100D0C);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.replaceChildren(renderer.domElement);

    // Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0x241B17, 1.5);
    scene.add(ambientLight);

    const orangeLight = new THREE.PointLight(0xFF941F, 3, 10);
    orangeLight.position.set(2, 2, 2);
    scene.add(orangeLight);

    const blueLight = new THREE.PointLight(0x4080FF, 2, 10);
    blueLight.position.set(-2, -2, 2);
    scene.add(blueLight);

    // 1. Core Geometric Shape (3D Polyhedron / Dodecahedron)
    const coreGeo = new THREE.DodecahedronGeometry(1.2, 0);
    const pbrMat = new THREE.MeshStandardMaterial({
      color: 0x1E1714,
      roughness: 0.2,
      metalness: 0.85,
    });
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xFF941F,
      wireframe: true,
    });

    const coreMesh = new THREE.Mesh<THREE.BufferGeometry, THREE.Material>(coreGeo, pbrMat);
    scene.add(coreMesh);

    // Floating Rings
    const ringGeo = new THREE.TorusGeometry(1.7, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xFF941F });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring1);
    scene.add(ring2);

    // 2. Custom Particle Field (1200 particles)
    const pGeo = new THREE.BufferGeometry();
    const pCount = 1200;
    const pPositions = new Float32Array(pCount * 3);
    const pVelocities = new Float32Array(pCount * 3);

    for (let i = 0; i < pCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 6;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 6;

      pVelocities[i * 3] = (Math.random() - 0.5) * 0.02;
      pVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      pVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xFFB347,
      size: 0.035,
      transparent: true,
      opacity: 0.8,
    });
    const particleField = new THREE.Points(pGeo, pMat);
    scene.add(particleField);

    // Mode updater
    const setMode = (mode: 'pbr' | 'wireframe' | 'particles') => {
      if (mode === 'pbr') {
        coreMesh.material = pbrMat;
        coreMesh.visible = true;
        particleField.visible = true;
      } else if (mode === 'wireframe') {
        coreMesh.material = wireMat;
        coreMesh.visible = true;
        particleField.visible = false;
      } else if (mode === 'particles') {
        coreMesh.visible = false;
        particleField.visible = true;
      }
    };

    (container as unknown as { __setMode: typeof setMode }).__setMode = setMode;

    // Mouse Interaction
    let targetRotX = 0;
    let targetRotY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 1.5;
      targetRotX = -y * 1.5;
    };
    container.addEventListener('mousemove', onMouseMove);

    // Burst particles on click
    const onClick = () => {
      const pos = pGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < pCount; i++) {
        pVelocities[i * 3] += (Math.random() - 0.5) * 0.08;
        pVelocities[i * 3 + 1] += (Math.random() - 0.5) * 0.08;
        pVelocities[i * 3 + 2] += (Math.random() - 0.5) * 0.08;
      }
    };
    container.addEventListener('click', onClick);

    // Render Loop & FPS calculation
    let frameId = 0;
    let frames = 0;
    let lastTime = performance.now();

    const animate = () => {
      coreMesh.rotation.x = THREE.MathUtils.damp(coreMesh.rotation.x, targetRotX, 4, 0.016);
      coreMesh.rotation.y = THREE.MathUtils.damp(coreMesh.rotation.y, targetRotY, 4, 0.016);
      coreMesh.rotation.z += 0.003;

      ring1.rotation.x += 0.008;
      ring1.rotation.y += 0.005;
      ring2.rotation.y -= 0.007;

      // Update particles
      const pos = pGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < pCount; i++) {
        pos[i * 3] += pVelocities[i * 3];
        pos[i * 3 + 1] += pVelocities[i * 3 + 1];
        pos[i * 3 + 2] += pVelocities[i * 3 + 2];

        // Bounds wrapping
        if (Math.abs(pos[i * 3]) > 3) pos[i * 3] *= -0.9;
        if (Math.abs(pos[i * 3 + 1]) > 3) pos[i * 3 + 1] *= -0.9;
        if (Math.abs(pos[i * 3 + 2]) > 3) pos[i * 3 + 2] *= -0.9;
      }
      pGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);

      frames++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frames * 1000) / (now - lastTime)));
        frames = 0;
        lastTime = now;
      }

      frameId = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
      renderer.setSize(w, height);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      coreGeo.dispose();
      pbrMat.dispose();
      wireMat.dispose();
      pGeo.dispose();
      container.replaceChildren();
    };
  }, []);

  const switchMode = (mode: 'pbr' | 'wireframe' | 'particles') => {
    setActiveMode(mode);
    const container = canvasRef.current as unknown as { __setMode?: (m: string) => void };
    if (container?.__setMode) {
      container.__setMode(mode);
    }
  };

  return (
    <section id="lab3d" className="py-24 relative bg-[#1B1411]/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241B17] border border-white/10 text-xs font-mono text-[#FF941F] mb-3">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Interactive Graphics Lab</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Game Development & 3D Web
            </h2>
            <p className="text-sm text-[#C9C2BC] mt-2 max-w-xl">
              Real-time WebGL canvas showcasing game loops, Three.js shaders, 3D math, and particle physics in browser runtime.
            </p>
          </div>

          {/* Interactive Mode Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#241B17] border border-white/10">
            <button
              onClick={() => switchMode('pbr')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeMode === 'pbr'
                  ? 'bg-[#FF941F] text-[#100D0C] font-semibold shadow-md'
                  : 'text-[#C9C2BC] hover:text-white'
              }`}
            >
              PBR Core
            </button>
            <button
              onClick={() => switchMode('wireframe')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeMode === 'wireframe'
                  ? 'bg-[#FF941F] text-[#100D0C] font-semibold shadow-md'
                  : 'text-[#C9C2BC] hover:text-white'
              }`}
            >
              Wireframe
            </button>
            <button
              onClick={() => switchMode('particles')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeMode === 'particles'
                  ? 'bg-[#FF941F] text-[#100D0C] font-semibold shadow-md'
                  : 'text-[#C9C2BC] hover:text-white'
              }`}
            >
              Particles
            </button>
          </div>
        </div>

        {/* 3D Sandbox Container */}
        <div className="relative rounded-2xl overflow-hidden border border-white/12 bg-[#100D0C] shadow-2xl">
          <div ref={canvasRef} className="w-full h-[400px] cursor-crosshair" />

          {/* Real-time HUD Telemetry */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-3 p-2 rounded-xl bg-[#1B1411]/90 backdrop-blur-md border border-white/10 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-[#70D6A3]">
              <Activity className="w-3.5 h-3.5" />
              <span>{fps} FPS</span>
            </div>
            <div className="text-white/20">|</div>
            <div className="text-[#C9C2BC]">
              Particles: <span className="text-[#FF941F]">{particleCount}</span>
            </div>
            <div className="text-white/20">|</div>
            <div className="text-[#C9C2BC]">WebGL 2.0</div>
          </div>

          {/* Click prompt overlay */}
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1B1411]/80 backdrop-blur-md border border-white/10 text-xs text-[#C9C2BC] font-mono pointer-events-none">
            <Sparkles className="w-3.5 h-3.5 text-[#FF941F]" />
            <span>Click canvas to trigger impulse shockwave</span>
          </div>
        </div>

        {/* 3D Competencies Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-[#241B17] border border-white/10">
            <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#FF941F]" />
              <span>Game Loops & State Management</span>
            </h4>
            <p className="text-xs text-[#C9C2BC] leading-relaxed">
              Delta-time synchronization, continuous Euler rotations, dynamic bounding-box frustum calculations, and frame pacing.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#241B17] border border-white/10">
            <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF941F]" />
              <span>Three.js PBR & Materials</span>
            </h4>
            <p className="text-xs text-[#C9C2BC] leading-relaxed">
              MeshStandardMaterial, roughness/metalness maps, HDR studio environment reflections via PMREMGenerator, and soft shadow mapping.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#241B17] border border-white/10">
            <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-[#FF941F]" />
              <span>Animation Pipelines</span>
            </h4>
            <p className="text-xs text-[#C9C2BC] leading-relaxed">
              Integration of GSAP timelines, Framer Motion spring physics, and canvas-driven cursor damping for responsive web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
