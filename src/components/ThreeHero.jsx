import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, RoundedBox } from '@react-three/drei';
import { Suspense } from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThreeHero.css';

function ProfessionalScene({ dark }) {
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 5, 2]} intensity={1.1} />
      <pointLight position={[-3, 2, -2]} intensity={0.7} color="#38bdf8" />

      <Float speed={1.2} rotationIntensity={0.16} floatIntensity={0.28}>
        <group position={[0, 0.15, 0]}>
          <RoundedBox args={[2.2, 1.35, 0.16]} radius={0.06}>
            <meshStandardMaterial
              color={dark ? '#111827' : '#f8fafc'}
              metalness={0.35}
              roughness={0.22}
            />
          </RoundedBox>

          <mesh position={[0, 0.08, 0.12]}>
            <boxGeometry args={[1.7, 0.95, 0.04]} />
            <meshStandardMaterial color={dark ? '#0f172a' : '#f1f5f9'} />
          </mesh>

          <mesh position={[-0.5, -0.1, 0.13]}>
            <boxGeometry args={[0.3, 0.35, 0.03]} />
            <meshStandardMaterial color={dark ? '#38bdf8' : '#2563eb'} />
          </mesh>
          <mesh position={[0.2, -0.1, 0.13]}>
            <boxGeometry args={[0.4, 0.45, 0.03]} />
            <meshStandardMaterial color={dark ? '#f59e0b' : '#0f766e'} />
          </mesh>
          <mesh position={[0.7, -0.1, 0.13]}>
            <boxGeometry args={[0.25, 0.6, 0.03]} />
            <meshStandardMaterial color={dark ? '#a78bfa' : '#7c3aed'} />
          </mesh>

          <mesh position={[0, -0.95, 0]}>
            <boxGeometry args={[0.72, 0.12, 0.4]} />
            <meshStandardMaterial color={dark ? '#1f2937' : '#e2e8f0'} />
          </mesh>
        </group>
      </Float>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.3, 0]}>
        <circleGeometry args={[3.2, 64]} />
        <meshBasicMaterial color={dark ? '#0f172a' : '#e2e8f0'} transparent opacity={0.35} />
      </mesh>

      <Environment preset="city" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

export default function ThreeHero() {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  return (
    <div className="three-hero">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ProfessionalScene dark={dark} />
        </Suspense>
      </Canvas>
    </div>
  );
}
