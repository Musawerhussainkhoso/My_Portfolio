import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThreeHero.css';

function OrbitingRing({ radius, tube, rotation, speed, color, metalness = 0.92 }) {
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });

  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, tube, 16, 120]} />
      <meshStandardMaterial color={color} metalness={metalness} roughness={0.12} />
    </mesh>
  );
}

function ClassicScene({ dark }) {
  const gold = dark ? '#d4af37' : '#c9a227';
  const navy = dark ? '#2a3a5c' : '#1a2744';
  const silver = dark ? '#8b9ab8' : '#94a3b8';
  const core = dark ? '#1e293b' : '#f0ede6';

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 6, 4]} intensity={1.3} color="#ffffff" />
      <directionalLight position={[-4, 2, -3]} intensity={0.4} color={gold} />
      <pointLight position={[0, -2, 4]} intensity={0.6} color="#fff8e7" />

      <Float speed={1.4} rotationIntensity={0.08} floatIntensity={0.18}>
        <group position={[0, 0, 0]}>
          {/* Metallic core sphere */}
          <mesh>
            <sphereGeometry args={[0.75, 64, 64]} />
            <meshStandardMaterial color={core} metalness={0.85} roughness={0.18} />
          </mesh>

          {/* Wireframe globe overlay */}
          <mesh>
            <sphereGeometry args={[0.95, 24, 24]} />
            <meshBasicMaterial color={gold} wireframe transparent opacity={dark ? 0.45 : 0.35} />
          </mesh>

          {/* Latitude lines */}
          {[0.4, 0.65, 0.85].map((r, i) => (
            <mesh key={i} rotation={[Math.PI / 2, 0, i * 0.8]}>
              <torusGeometry args={[r, 0.006, 8, 80]} />
              <meshStandardMaterial color={silver} metalness={0.8} roughness={0.2} transparent opacity={0.6} />
            </mesh>
          ))}

          {/* Classic orbital rings */}
          <OrbitingRing
            radius={1.55}
            tube={0.018}
            rotation={[Math.PI / 2.2, 0.3, 0]}
            speed={0.25}
            color={gold}
          />
          <OrbitingRing
            radius={1.95}
            tube={0.014}
            rotation={[Math.PI / 3.5, -0.5, 0.4]}
            speed={-0.18}
            color={navy}
          />

          {/* Accent nodes on outer ring */}
          {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * 1.95,
                Math.sin(angle) * 0.4,
                Math.sin(angle) * 1.95 * 0.3,
              ]}
            >
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshStandardMaterial color={gold} metalness={0.95} roughness={0.08} emissive={gold} emissiveIntensity={dark ? 0.3 : 0.15} />
            </mesh>
          ))}
        </group>
      </Float>

      {/* Ground reflection disc */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
        <circleGeometry args={[3.5, 64]} />
        <meshBasicMaterial color={dark ? '#0a0e17' : '#e8e5df'} transparent opacity={0.25} />
      </mesh>

      <Environment preset="studio" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
    </>
  );
}

export default function ThreeHero() {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  return (
    <div className="three-hero">
      <Canvas camera={{ position: [0, 0.5, 6.5], fov: 42 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ClassicScene dark={dark} />
        </Suspense>
      </Canvas>
    </div>
  );
}
