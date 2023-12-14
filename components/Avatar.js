// next image
// import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from './Box';
import Sphere from './animatedSphere'
import Iphone from './Iphone'
const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      {/* <Image
        src={'/avatar.png'}
        width={737}
        height={678}
        alt=''
        className='translate-z-0 w-full h-full'
      /> */}

      <Canvas style={{ height: "500px" }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Iphone />
      </Canvas>
      {/* <Canvas style={{ height: "500px" }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Sphere />
      </Canvas> */}
    </div>
  );
};

export default Avatar;
