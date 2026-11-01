import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Camera, Code2, Eye, Sparkles, RefreshCw, Volume2 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Workspace3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePreset, setActivePreset] = useState<'default' | 'monitor' | 'keyboard'>('default');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Detect Software WebGL
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    // 2. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x100D0C);
    scene.fog = new THREE.FogExp2(0x100D0C, 0.05);

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 520;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 50);
    camera.position.set(2.8, 2.2, 3.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    container.replaceChildren(renderer.domElement);

    // 3. Studio Environment Map (PMREMGenerator + RoomEnvironment)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 4. Lighting Rig (Warm Orange Key + Ambient Cool Rim)
    const keyLight = new THREE.DirectionalLight(0xFF941F, 2.2);
    keyLight.position.set(3, 4, 2);
    keyLight.castShadow = !isSoftwareGl;
    if (!isSoftwareGl) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.camera.near = 0.5;
      keyLight.shadow.camera.far = 15;
      keyLight.shadow.bias = -0.0005;
    }
    scene.add(keyLight);

    const hemiLight = new THREE.HemisphereLight(0xFFB347, 0x1B1411, 0.8);
    scene.add(hemiLight);

    // Desk LED Light Bar (Warm Orange Glow)
    const deskGlowLight = new THREE.PointLight(0xFF941F, 3.0, 4.0, 1.2);
    deskGlowLight.position.set(0, 1.6, 0.3);
    scene.add(deskGlowLight);

    const screenLight = new THREE.PointLight(0x4080FF, 1.2, 3.0, 1.5);
    screenLight.position.set(0, 1.4, 0.6);
    scene.add(screenLight);

    // 5. Procedural Textures
    // Monitor Screen Canvas Texture (Animated Code Editor)
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1024;
    screenCanvas.height = 512;
    const ctx = screenCanvas.getContext('2d')!;

    const codeLines = [
      "// Vedant Dalvi — 3D Workspace Engine",
      "import { WebGLRenderer, Scene } from 'three';",
      "import { FullStackSystem } from '@/vedant-core';",
      "",
      "interface Developer {",
      "  name: 'Vedant Dalvi';",
      "  focus: 'Full-Stack' | '3D Web' | 'AI Forensics';",
      "  status: 'Building Impactful Real-World Solutions';",
      "}",
      "",
      "export async function runPortfolio() {",
      "  const workspace = new 3DDeveloperRoom();",
      "  await workspace.mountInteractiveCanvas();",
      "  console.log('✨ All systems operational | SLRTCE 2028');",
      "}"
    ];

    let cursorBlink = 0;
    const drawScreen = () => {
      ctx.fillStyle = "#120E0D";
      ctx.fillRect(0, 0, 1024, 512);

      // VS Code Header
      ctx.fillStyle = "#1E1714";
      ctx.fillRect(0, 0, 1024, 38);
      ctx.fillStyle = "#FF941F";
      ctx.font = "bold 14px 'JetBrains Mono', monospace";
      ctx.fillText("● Workspace3D.tsx — Vedant Dalvi", 24, 24);

      // Line Numbers & Code
      ctx.font = "15px 'JetBrains Mono', monospace";
      codeLines.forEach((line, idx) => {
        const y = 68 + idx * 26;
        // Line number
        ctx.fillStyle = "#5E4D43";
        ctx.fillText(String(idx + 1).padStart(2, '0'), 20, y);

        // Syntax highlighting
        if (line.startsWith("//")) {
          ctx.fillStyle = "#A89689";
        } else if (line.includes("import") || line.includes("export") || line.includes("interface")) {
          ctx.fillStyle = "#FF941F";
        } else if (line.includes("'")) {
          ctx.fillStyle = "#70D6A3";
        } else if (line.includes("async") || line.includes("await") || line.includes("const")) {
          ctx.fillStyle = "#63B3ED";
        } else {
          ctx.fillStyle = "#FFFFFF";
        }
        ctx.fillText(line, 58, y);
      });

      // Cursor
      cursorBlink += 0.05;
      if (Math.sin(cursorBlink) > 0) {
        ctx.fillStyle = "#FF941F";
        ctx.fillRect(490, 68 + 12 * 26 - 13, 8, 16);
      }

      // Status Bar
      ctx.fillStyle = "#FF941F";
      ctx.fillRect(0, 484, 1024, 28);
      ctx.fillStyle = "#100D0C";
      ctx.font = "bold 13px 'JetBrains Mono', monospace";
      ctx.fillText("⚡ READY · TypeScript 5.8 · WebGL Active · Port 3000", 20, 502);
    };

    drawScreen();
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.colorSpace = THREE.SRGBColorSpace;
    screenTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    // 6. Assemble Procedural Workspace (THREE.Group)
    const workspaceGroup = new THREE.Group();
    scene.add(workspaceGroup);

    // A. Desk Slab
    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x1E1714,
      roughness: 0.35,
      metalness: 0.2,
    });
    const deskGeo = new THREE.BoxGeometry(3.2, 0.08, 1.6);
    const deskMesh = new THREE.Mesh(deskGeo, deskMat);
    deskMesh.position.set(0, 0.9, 0);
    deskMesh.receiveShadow = !isSoftwareGl;
    deskMesh.castShadow = !isSoftwareGl;
    workspaceGroup.add(deskMesh);

    // Desk Frame & Legs (Matte Charcoal Steel)
    const legMat = new THREE.MeshStandardMaterial({
      color: 0x14100E,
      roughness: 0.6,
      metalness: 0.85,
    });
    const legGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.9, 16);
    const legPositions = [
      [-1.5, 0.45, -0.7],
      [1.5, 0.45, -0.7],
      [-1.5, 0.45, 0.7],
      [1.5, 0.45, 0.7],
    ];
    legPositions.forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(x, y, z);
      leg.castShadow = !isSoftwareGl;
      workspaceGroup.add(leg);
    });

    // Desk Pad
    const padMat = new THREE.MeshStandardMaterial({
      color: 0x181210,
      roughness: 0.8,
      metalness: 0.05,
    });
    const pad = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.01, 0.7), padMat);
    pad.position.set(0, 0.945, 0.2);
    pad.receiveShadow = !isSoftwareGl;
    workspaceGroup.add(pad);

    // Glowing Orange Desk Edge Neon
    const deskGlowGeo = new THREE.BoxGeometry(3.22, 0.015, 0.03);
    const deskGlowMat = new THREE.MeshBasicMaterial({ color: 0xFF941F });
    const deskGlowMesh = new THREE.Mesh(deskGlowGeo, deskGlowMat);
    deskGlowMesh.position.set(0, 0.94, 0.8);
    workspaceGroup.add(deskGlowMesh);

    // B. Ultrawide Curved Computer Monitor
    const monitorGroup = new THREE.Group();
    monitorGroup.position.set(0, 1.45, -0.3);

    // Monitor Stand
    const standBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.22, 0.02, 32),
      legMat
    );
    standBase.position.set(0, -0.5, 0);
    monitorGroup.add(standBase);

    const standArm = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.55, 0.08),
      legMat
    );
    standArm.position.set(0, -0.25, -0.05);
    monitorGroup.add(standArm);

    // Monitor Screen with Bezel
    const screenMesh = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 0.9, 0.04),
      new THREE.MeshStandardMaterial({
        map: screenTexture,
        roughness: 0.2,
        metalness: 0.1,
        emissive: 0xFFFFFF,
        emissiveMap: screenTexture,
        emissiveIntensity: 0.4,
      })
    );
    screenMesh.castShadow = !isSoftwareGl;
    monitorGroup.add(screenMesh);

    // Screen Back LED Strip (Ambient Wall Bounce)
    const monitorLed = new THREE.Mesh(
      new THREE.BoxGeometry(1.9, 0.8, 0.01),
      new THREE.MeshBasicMaterial({ color: 0xFF941F })
    );
    monitorLed.position.set(0, 0, -0.025);
    monitorGroup.add(monitorLed);

    workspaceGroup.add(monitorGroup);

    // C. Mechanical Keyboard with Orange LED Switches
    const kbGroup = new THREE.Group();
    kbGroup.position.set(-0.15, 0.96, 0.25);

    const kbBase = new THREE.Mesh(
      new THREE.BoxGeometry(0.72, 0.025, 0.24),
      new THREE.MeshStandardMaterial({ color: 0x1A1412, roughness: 0.4, metalness: 0.4 })
    );
    kbGroup.add(kbBase);

    // Glowing Keybed
    const kbGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(0.7, 0.22),
      new THREE.MeshBasicMaterial({ color: 0xFF941F })
    );
    kbGlow.rotation.x = -Math.PI / 2;
    kbGlow.position.y = 0.014;
    kbGroup.add(kbGlow);

    workspaceGroup.add(kbGroup);

    // D. Ergonomic Gaming Mouse
    const mouseGroup = new THREE.Group();
    mouseGroup.position.set(0.48, 0.97, 0.25);
    const mouseMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0x221A16, roughness: 0.3, metalness: 0.2 })
    );
    mouseMesh.scale.set(0.8, 0.5, 1.4);
    mouseGroup.add(mouseMesh);
    workspaceGroup.add(mouseGroup);

    // E. Studio Headphones on Wooden Stand
    const hpGroup = new THREE.Group();
    hpGroup.position.set(1.15, 1.15, -0.1);

    const hpStand = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.08, 0.5, 24),
      new THREE.MeshStandardMaterial({ color: 0x3A2518, roughness: 0.5 })
    );
    hpGroup.add(hpStand);

    const hpBand = new THREE.Mesh(
      new THREE.TorusGeometry(0.12, 0.018, 12, 24, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0x1A1412, roughness: 0.3, metalness: 0.8 })
    );
    hpBand.position.y = 0.25;
    hpGroup.add(hpBand);

    const cupMat = new THREE.MeshStandardMaterial({ color: 0x251B17, roughness: 0.4, metalness: 0.3 });
    const earCupL = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.04, 16), cupMat);
    earCupL.position.set(-0.12, 0.22, 0);
    earCupL.rotation.z = Math.PI / 2;
    hpGroup.add(earCupL);

    const earCupR = earCupL.clone();
    earCupR.position.set(0.12, 0.22, 0);
    hpGroup.add(earCupR);

    workspaceGroup.add(hpGroup);

    // F. Succulent Desk Plant in Terracotta Pot
    const plantGroup = new THREE.Group();
    plantGroup.position.set(-1.15, 1.05, -0.15);

    const potMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.09, 0.065, 0.16, 16),
      new THREE.MeshStandardMaterial({ color: 0x9E4B2B, roughness: 0.9 })
    );
    plantGroup.add(potMesh);

    // Succulent Leaves
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x387858, roughness: 0.6 });
    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * Math.PI * 2;
      const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.12, 8), leafMat);
      leaf.position.set(Math.cos(angle) * 0.04, 0.08, Math.sin(angle) * 0.04);
      leaf.rotation.x = Math.sin(angle) * 0.4;
      leaf.rotation.z = -Math.cos(angle) * 0.4;
      plantGroup.add(leaf);
    }
    workspaceGroup.add(plantGroup);

    // G. Acoustic Back Wall Panels with Neon Lines
    const backWallGroup = new THREE.Group();
    backWallGroup.position.set(0, 1.6, -0.9);

    const wallSlab = new THREE.Mesh(
      new THREE.PlaneGeometry(4.2, 2.6),
      new THREE.MeshStandardMaterial({ color: 0x16100E, roughness: 0.9 })
    );
    backWallGroup.add(wallSlab);

    // Geometric Acoustic Panels
    const panelMat = new THREE.MeshStandardMaterial({ color: 0x221A16, roughness: 0.8 });
    for (let x = -1.6; x <= 1.6; x += 0.8) {
      for (let y = -0.6; y <= 0.8; y += 0.7) {
        const panel = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.6, 0.03), panelMat);
        panel.position.set(x, y, 0.02);
        backWallGroup.add(panel);
      }
    }

    // Neon Accent Light Strip along Wall
    const wallNeon = new THREE.Mesh(
      new THREE.BoxGeometry(3.8, 0.025, 0.02),
      new THREE.MeshBasicMaterial({ color: 0xFF941F })
    );
    wallNeon.position.set(0, 0.85, 0.04);
    backWallGroup.add(wallNeon);

    workspaceGroup.add(backWallGroup);

    // H. Floating 3D Developer Tokens (React, 3D Icosahedron, Neural Node)
    const floatingTokens: { mesh: THREE.Mesh; speed: number; rotAxis: THREE.Vector3; initialY: number }[] = [];

    // 1. 3D Icosahedron (Three.js representation)
    const icoGeo = new THREE.IcosahedronGeometry(0.12, 0);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0xFF941F,
      wireframe: true,
      emissive: 0xFF941F,
      emissiveIntensity: 0.6
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(1.4, 1.9, 0.4);
    workspaceGroup.add(icoMesh);
    floatingTokens.push({ mesh: icoMesh, speed: 1.2, rotAxis: new THREE.Vector3(1, 1, 0).normalize(), initialY: 1.9 });

    // 2. Torus Knot (Math & Algorithms)
    const knotGeo = new THREE.TorusKnotGeometry(0.09, 0.025, 64, 8);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0xFFB347,
      roughness: 0.2,
      metalness: 0.8,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    knotMesh.position.set(-1.4, 2.0, 0.3);
    workspaceGroup.add(knotMesh);
    floatingTokens.push({ mesh: knotMesh, speed: 0.9, rotAxis: new THREE.Vector3(0, 1, 1).normalize(), initialY: 2.0 });

    // 3. Mini Neural Sphere
    const sphereGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0xFF941F, wireframe: true });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereMesh.position.set(0.8, 2.3, -0.1);
    workspaceGroup.add(sphereMesh);
    floatingTokens.push({ mesh: sphereMesh, speed: 1.5, rotAxis: new THREE.Vector3(1, 0, 0), initialY: 2.3 });

    // 7. Interactive Parallax & Animation Loop
    const targetCameraPos = new THREE.Vector3(2.8, 2.2, 3.8);
    const targetLookAt = new THREE.Vector3(0, 1.3, 0);
    const currentLookAt = new THREE.Vector3(0, 1.3, 0);

    const mouse = { x: 0, y: 0 };
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.x = THREE.MathUtils.clamp(nx, -1, 1);
      mouse.y = THREE.MathUtils.clamp(ny, -1, 1);
    };

    window.addEventListener('pointermove', handlePointerMove);

    let animationFrameId = 0;
    let lastTime = performance.now();
    const startTime = lastTime;
    let lastCodeRedraw = 0;

    const animate = () => {
      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      const elapsed = (now - startTime) / 1000;
      lastTime = now;

      // Redraw code screen cursor periodically
      if (elapsed - lastCodeRedraw > 0.08) {
        drawScreen();
        screenTexture.needsUpdate = true;
        lastCodeRedraw = elapsed;
      }

      // Animate floating tokens
      floatingTokens.forEach((item) => {
        item.mesh.position.y = item.initialY + Math.sin(elapsed * item.speed) * 0.08;
        item.mesh.rotateOnAxis(item.rotAxis, 0.015);
      });

      // Camera preset targets + subtle mouse parallax
      let desiredX = targetCameraPos.x + mouse.x * 0.35;
      let desiredY = targetCameraPos.y + mouse.y * 0.25;
      let desiredZ = targetCameraPos.z;

      camera.position.x = THREE.MathUtils.damp(camera.position.x, desiredX, 4, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, desiredY, 4, delta);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, desiredZ, 4, delta);

      currentLookAt.x = THREE.MathUtils.damp(currentLookAt.x, targetLookAt.x, 4, delta);
      currentLookAt.y = THREE.MathUtils.damp(currentLookAt.y, targetLookAt.y, 4, delta);
      currentLookAt.z = THREE.MathUtils.damp(currentLookAt.z, targetLookAt.z, 4, delta);
      camera.lookAt(currentLookAt);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    setIsLoaded(true);

    // Preset selection handler
    const updatePreset = (preset: typeof activePreset) => {
      setActivePreset(preset);
      if (preset === 'default') {
        targetCameraPos.set(2.8, 2.2, 3.8);
        targetLookAt.set(0, 1.3, 0);
      } else if (preset === 'monitor') {
        targetCameraPos.set(0, 1.45, 1.7);
        targetLookAt.set(0, 1.45, -0.3);
      } else if (preset === 'keyboard') {
        targetCameraPos.set(0.6, 1.8, 1.4);
        targetLookAt.set(-0.1, 1.0, 0.2);
      } else if (preset === 'wide') {
        targetCameraPos.set(3.8, 2.8, 4.6);
        targetLookAt.set(0, 1.2, -0.2);
      }
    };

    (container as unknown as { __setPreset: typeof updatePreset }).__setPreset = updatePreset;

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      deskGeo.dispose();
      deskMat.dispose();
      screenTexture.dispose();
      container.replaceChildren();
    };
  }, []);

  const changePreset = (preset: 'default' | 'monitor' | 'keyboard') => {
    setActivePreset(preset);
    const container = containerRef.current as unknown as { __setPreset?: (p: string) => void };
    if (container?.__setPreset) {
      container.__setPreset(preset);
    }
  };

  return (
    <div className="relative w-full h-[460px] md:h-[540px] lg:h-[620px] rounded-2xl overflow-hidden border border-white/10 bg-[#16100E] shadow-2xl flex flex-col items-center justify-center">
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Integrated Portrait Card Overlay (Top Right of Scene) */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-3 p-2 pr-4 rounded-xl bg-[#1B1411]/90 backdrop-blur-md border border-white/10 shadow-lg pointer-events-auto">
        <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-[#FF941F]/40 shadow-inner">
          <img
            src={personalInfo.images.portrait}
            alt="Vedant Dalvi"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className="text-left">
          <div className="text-xs font-semibold text-white tracking-tight">{personalInfo.fullName}</div>
          <div className="text-[11px] text-[#C9C2BC] font-mono">SLRTCE · 2028</div>
        </div>
      </div>

      {/* Live Scene Badge (Top Left) */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1B1411]/80 backdrop-blur-md border border-white/10 text-xs text-[#C9C2BC] font-mono">
        <Sparkles className="w-3.5 h-3.5 text-[#FF941F]" />
        <span>Interactive 3D Workspace</span>
      </div>

      {/* Unobstructed Center & Collapsible Bottom Control Dock */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 p-1.5 rounded-xl bg-[#1B1411]/90 backdrop-blur-md border border-white/12 shadow-2xl max-w-[94vw]">
        <button
          onClick={() => changePreset('default')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
            activePreset === 'default'
              ? 'bg-[#FF941F] text-[#100D0C] font-semibold shadow-md'
              : 'text-[#C9C2BC] hover:text-white hover:bg-white/5'
          }`}
          title="Default Cinematic View"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Cinematic</span>
        </button>

        <button
          onClick={() => changePreset('monitor')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
            activePreset === 'monitor'
              ? 'bg-[#FF941F] text-[#100D0C] font-semibold shadow-md'
              : 'text-[#C9C2BC] hover:text-white hover:bg-white/5'
          }`}
          title="Code Editor Focus"
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>IDE Focus</span>
        </button>

        <button
          onClick={() => changePreset('keyboard')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
            activePreset === 'keyboard'
              ? 'bg-[#FF941F] text-[#100D0C] font-semibold shadow-md'
              : 'text-[#C9C2BC] hover:text-white hover:bg-white/5'
          }`}
          title="Mechanical Keybed Angle"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Desk Gear</span>
        </button>
      </div>

      {/* Loading Fallback */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#100D0C] z-30">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-[#FF941F] border-t-transparent animate-spin" />
            <span className="text-xs font-mono text-[#C9C2BC]">Initializing 3D Workspace...</span>
          </div>
        </div>
      )}
    </div>
  );
};
