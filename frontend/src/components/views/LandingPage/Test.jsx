import * as THREE from "three"
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Sori_ani from "./Sori_ani"
import { OrbitControls } from "@react-three/drei";

export default function sori_Normal() {
  return(
    <div>
      <Canvas style={{ height: '100vh', width: '100vw', background: 'white' }} colorManagement shadowMap camera={{position: [0,0,8], fov:30}}>
        <OrbitControls/>
        <directionalLight intensity={1} />
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 15, 10]} angle={1} />
        <Suspense fallback={null}>
          <Sori_ani />
        </Suspense>
      </Canvas>
    </div>

  )
}