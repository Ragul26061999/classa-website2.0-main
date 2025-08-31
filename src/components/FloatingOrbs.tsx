"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const points = useRef<THREE.Points>(null);
  const particles = useRef<Float32Array>(new Float32Array(5000 * 3));

  // Initialize particles
  if (particles.current) {
    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3;
      particles.current[i3] = (Math.random() - 0.5) * 10;
      particles.current[i3 + 1] = (Math.random() - 0.5) * 10;
      particles.current[i3 + 2] = (Math.random() - 0.5) * 10;
    }
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      points.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Points ref={points} positions={particles.current} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3B82F6"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['#ffffff']} />
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}
