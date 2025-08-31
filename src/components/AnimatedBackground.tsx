'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';

// Create a custom shader material for the gradient animation
const GradientMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector2(),
    color1: new THREE.Color(0xf6f8fb),
    color2: new THREE.Color(0xffffff),
    color3: new THREE.Color(0xf6f8fb)
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform float time;
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    varying vec2 vUv;
    
    void main() {
      // Create a wave effect that moves from left to right
      float wave = sin(vUv.x * 3.14159 + time * 0.5) * 0.5 + 0.5;
      
      // Mix between colors based on the wave position
      vec3 color = mix(color1, color2, smoothstep(0.0, 0.5, vUv.x + wave * 0.3));
      color = mix(color, color3, smoothstep(0.5, 1.0, vUv.x + wave * 0.3));
      
      // Add some subtle noise for texture
      float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
      color += (noise - 0.5) * 0.05;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

// Extend Three.js with our custom material
extend({ GradientMaterial });


// Add TypeScript support for the custom material
declare module '@react-three/fiber' {
  interface ThreeElements {
    gradientMaterial: {
      ref?: React.Ref<THREE.ShaderMaterial>;
      attach?: string;
      side?: THREE.Side;
      transparent?: boolean;
      opacity?: number;
      time?: number;
      color1?: THREE.Color;
      color2?: THREE.Color;
      color3?: THREE.Color;
    }
  }
}

const GradientPlane = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();
  
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height, 1, 1]} />
      <gradientMaterial
        ref={materialRef}
        side={THREE.DoubleSide}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas orthographic camera={{ position: [0, 0, 1], zoom: 1 }}>
        <GradientPlane />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
