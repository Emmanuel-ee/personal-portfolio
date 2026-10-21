import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimatedSphere from './animatedSphere';

const SphereScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <AnimatedSphere scale={1.5} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
};

export default SphereScene;