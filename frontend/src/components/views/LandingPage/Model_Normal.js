/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Sori_final.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.01, 0.07, 0.11]} rotation={[-0.14, 0, 0]} scale={0.82}>
        <mesh geometry={nodes.구체001.geometry} material={materials.SKIN} />
        <mesh geometry={nodes.구체001_1.geometry} material={materials['매테리얼.012']} />
        <mesh geometry={nodes.구체001_2.geometry} material={materials['매테리얼.022']} />
        <mesh geometry={nodes.구체001_3.geometry} material={materials['매테리얼.023']} />
        <mesh geometry={nodes.구체001_4.geometry} material={materials['매테리얼.025']} />
        <mesh geometry={nodes.구체001_5.geometry} material={materials['매테리얼.007']} />
        <mesh geometry={nodes.구체001_6.geometry} material={materials['매테리얼.001']} />
        <mesh geometry={nodes.구체001_7.geometry} material={materials['매테리얼.002']} />
        <mesh geometry={nodes.구체001_8.geometry} material={materials['매테리얼.003']} />
        <mesh geometry={nodes.구체001_9.geometry} material={materials['매테리얼.026']} />
        <mesh geometry={nodes.구체001_10.geometry} material={materials['매테리얼.027']} />
        <mesh geometry={nodes.구체001_11.geometry} material={materials['매테리얼.028']} />
        <mesh geometry={nodes.구체001_12.geometry} material={materials['매테리얼.005']} />
        <mesh geometry={nodes.구체001_13.geometry} material={materials.매테리얼} />
        <mesh geometry={nodes.구체001_14.geometry} material={materials['매테리얼.006']} />
        <mesh geometry={nodes.구체001_15.geometry} material={materials['매테리얼.015']} />
        <mesh geometry={nodes.구체001_16.geometry} material={materials['매테리얼.018']} />
        <mesh geometry={nodes.구체001_17.geometry} material={materials['______________.001']} />
        <mesh geometry={nodes.구체001_18.geometry} material={materials['Suit.001']} />
        <mesh geometry={nodes.구체001_19.geometry} material={materials['wire_135059008.001']} />
        <mesh geometry={nodes.구체001_20.geometry} material={materials['매테리얼.010']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Sori_final.glb')
