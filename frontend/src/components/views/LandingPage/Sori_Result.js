import * as THREE from "three"
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame,  useThree } from "@react-three/fiber";
import Model_Result from "./Model_Result"
import { OrbitControls } from "@react-three/drei";
import Speech_Bubble from "../../../assets/Speech_Bubble.jpg"
import './Alert/ToastAlert.css'
import TransferToast from './Alert/TransferToast'
import CheckToast from './Alert/CheckToast'
import FaceToast from './Alert/FaceToast'
import DepositToast from "./Alert/DepositToast";

const leftsori = require("../../../sound/좌측소리캐릭터.mp3");
const SoundLeftSori = new Audio(leftsori);
const playSoundLeftSori = () => {
  SoundLeftSori.play();
};

const trans = require("../../../sound/이체페이지.mp3");
const SoundTrans = new Audio(trans);
const playSoundTrans = () => {
  SoundTrans.play();
};

const checkba = require("../../../sound/조회페이지.mp3");
const SoundCheckBa = new Audio(checkba);
const playSoundCheckBa = () => {
  SoundCheckBa.play();
};

const depo = require("../../../sound/금융상품페이지.mp3");
const SoundDepo = new Audio(depo);
const playSoundDepo = () => {
  SoundDepo.play();
};

const facere = require("../../../sound/추천페이지.mp3");
const SoundFaceRe = new Audio(facere);
const playSoundFaceRe = () => {
  SoundFaceRe.play();
};

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
      enablePan={false}
      maxAzimuthAngle={Math.PI / 100}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 100}
      minPolarAngle={Math.PI / 2}
    />
  );
};

function Rig() {
  return useFrame((state) => {
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.y, 100 + state.mouse.y * 2 , 0.075)
  })
}

function BubbleData() {
  const Voice = sessionStorage.getItem("VoiceText");
  
  if (Voice === '"조회"') {
    return CheckToast() && playSoundCheckBa();
  } else if (Voice === '"이체"') {
    return TransferToast() && playSoundTrans();
  } else if (Voice === '"금융"') {
    return DepositToast() && playSoundDepo();
  } else if (Voice === '"추천"') {
    return FaceToast() && playSoundFaceRe();
  }
}

export default function sori_Result() {
  playSoundLeftSori()
  return(
    <div className='LandingFull'>
      <Canvas style={{ height: '96vh', width: '100vw' }} colorManagement shadowMap camera={{position: [0,0,8], fov:50}}>
        <CameraControls />
        <directionalLight intensity={1} />
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 15, 10]} angle={1} />
        <Suspense fallback={null}>
          <Model_Result onClick={() =>
            BubbleData()
          }/>
        </Suspense>
        <Rig />
      </Canvas>
      
    </div>
  )
}