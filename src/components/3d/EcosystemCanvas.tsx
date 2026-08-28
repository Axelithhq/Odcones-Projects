"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sprout } from "lucide-react";

export function EcosystemCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Check WebGL availability
    try {
      const canvasTest = document.createElement("canvas");
      const hasWebGL = !!(
        window.WebGLRenderingContext &&
        (canvasTest.getContext("webgl") || canvasTest.getContext("experimental-webgl"))
      );
      if (!hasWebGL) {
        setWebglSupported(false);
        return;
      }
    } catch (e) {
      setWebglSupported(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x52b788, 1.8);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xe9c46a, 1.5, 20);
    pointLight.position.set(-5, -5, -2);
    scene.add(pointLight);

    // Main Organic Mesh (Soil & Water Ecosystem Core)
    const geometry = new THREE.IcosahedronGeometry(1.4, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0x2d6a4f,
      roughness: 0.3,
      metalness: 0.2,
      wireframe: false,
    });
    const mainMesh = new THREE.Mesh(geometry, material);
    scene.add(mainMesh);

    // Outer Wireframe Halo
    const haloGeo = new THREE.IcosahedronGeometry(1.65, 12);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x52b788,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    scene.add(haloMesh);

    // Orbiting Satellite Spheres (Crops, Water, Livestock, Fish)
    const satelliteData = [
      { color: 0xd4a373, radius: 0.22, distance: 2.4, speed: 0.8, yOffset: 0.5 },
      { color: 0x149eca, radius: 0.25, distance: 2.1, speed: -1.1, yOffset: -0.4 },
      { color: 0x52b788, radius: 0.2, distance: 2.6, speed: 0.6, yOffset: 1.1 },
      { color: 0xe9c46a, radius: 0.28, distance: 2.2, speed: -0.7, yOffset: -0.9 },
    ];

    const satellites: { mesh: THREE.Mesh; data: typeof satelliteData[0] }[] = [];

    satelliteData.forEach((sat) => {
      const satGeo = new THREE.SphereGeometry(sat.radius, 24, 24);
      const satMat = new THREE.MeshStandardMaterial({
        color: sat.color,
        roughness: 0.2,
        metalness: 0.3,
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      scene.add(satMesh);
      satellites.push({ mesh: satMesh, data: sat });
    });

    // Particle Stars System
    const particlesCount = 80;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x74c69d,
      transparent: true,
      opacity: 0.6,
    });
    const particleMesh = new THREE.Points(particleGeo, particleMat);
    scene.add(particleMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;
    };
    container.addEventListener("mousemove", handleMouseMove);

    // Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate Main Core
      mainMesh.rotation.y = elapsedTime * 0.3;
      mainMesh.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15;
      haloMesh.rotation.y = -elapsedTime * 0.2;

      // Orbit Satellites
      satellites.forEach(({ mesh, data }) => {
        const angle = elapsedTime * data.speed;
        mesh.position.x = Math.cos(angle) * data.distance;
        mesh.position.z = Math.sin(angle) * data.distance;
        mesh.position.y = data.yOffset + Math.sin(elapsedTime * 1.5) * 0.15;
      });

      // Subtle Camera Parallax
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-full min-h-[350px] flex flex-col items-center justify-center bg-forest-950/80 border border-forest-800 rounded-2xl p-6 text-center space-y-3">
        <Sprout className="w-8 h-8 text-harvest-400" />
        <p className="text-xs text-sand-200/80">ODCONS Sustainable Ecosystem Visualizer</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[350px] relative rounded-2xl overflow-hidden bg-forest-950/60 border border-forest-700/40 cursor-grab active:cursor-grabbing"
    />
  );
}
