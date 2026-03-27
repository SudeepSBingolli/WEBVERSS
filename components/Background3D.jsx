"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleLayer({ count, spread, color, size, speedX, speedY, depthOffset = 0 }) {
  const groupRef = useRef(null);

  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const stride = index * 3;
      data[stride] = (Math.random() - 0.5) * spread;
      data[stride + 1] = (Math.random() - 0.5) * spread;
      data[stride + 2] = (Math.random() - 0.5) * spread + depthOffset;
    }
    return data;
  }, [count, depthOffset, spread]);

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current) return;

    const elapsedTime = clock.getElapsedTime();
    groupRef.current.rotation.y = elapsedTime * speedY + pointer.x * 0.08;
    groupRef.current.rotation.x = elapsedTime * speedX + pointer.y * 0.04;
  });

  return (
    <points ref={groupRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        transparent
        opacity={0.42}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Background3D() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(227,106,10,0.12),transparent_45%),radial-gradient(circle_at_82%_82%,rgba(245,158,11,0.10),transparent_40%)]" />
      <Canvas
        camera={{ position: [0, 0, 6], fov: 62 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <ParticleLayer
          count={520}
          spread={14}
          color="#E36A0A"
          size={0.028}
          speedX={0.015}
          speedY={0.028}
        />
        <ParticleLayer
          count={320}
          spread={16}
          color="#F59E0B"
          size={0.022}
          speedX={0.01}
          speedY={0.02}
          depthOffset={-1.2}
        />
      </Canvas>
    </div>
  );
}
