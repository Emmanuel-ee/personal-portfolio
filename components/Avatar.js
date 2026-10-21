import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Iphone from './Iphone';

const Avatar = () => {
  return (
    <div className='flex w-full max-w-none px-4 md:px-0'>
      <div className='w-full h-[260px] sm:h-[340px] lg:h-[460px] xl:h-[500px]'>
        <Canvas style={{ height: '100%' }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Iphone />
        </Canvas>
      </div>
    </div>
  );
};

export default Avatar;
