"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function FloatingCard({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[2, 3, 0.2]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default function FloatingCards() {
  return (
    <div className="h-[600px] w-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} />
        <FloatingCard position={[-3, 0, 0]} />
        <FloatingCard position={[0, 0, 0]} />
        <FloatingCard position={[3, 0, 0]} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
