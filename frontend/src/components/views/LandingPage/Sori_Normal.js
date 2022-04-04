import * as THREE from "three"
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import Model_Normal from "./Model_Normal"
import { Stars, OrbitControls } from "@react-three/drei";
import MicToWebPage from './MicToWebPage';
      

const CameraControls = () => {
  const {
    camera, gl: {domElement}
  } = useThree();
  const controls = useRef();
  useFrame(state => controls.current.update());
  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}

      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={Math.PI / 2}
    />
  );
};

function Rig() {
  return useFrame((state) => {
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.y, 100 + state.mouse.y * 10 , 0.075)
  })
}

export default function sori_Normal() {
  return(
    <div className='LandingFull'>
      <Canvas style={{ height: '90vh', width: '100vw' }} colorManagement shadowMap camera={{position: [0,0,8], fov:30}}>
        <CameraControls />
        {/* <OrbitControls/> */}
        <directionalLight intensity={1} />
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 15, 10]} angle={1} />
        <Suspense fallback={null}>
          <Model_Normal onClick={(e) => console.log("클릭")}/>
        </Suspense>
        <Rig />
        
      </Canvas>
      <MicToWebPage></MicToWebPage>
    </div>

  )
}