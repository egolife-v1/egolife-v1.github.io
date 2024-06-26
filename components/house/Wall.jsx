/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/house/wall_v3.glb
*/

import React, { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import useGltfKtx2 from "@/lib/useGltfKtx2";
import { editable as e } from "@theatre/r3f";
import {
  animate,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import useAnimateModelOpacity from "@/lib/useAnimateModelOpacity";

export default function Wall({ opacity = 1, ...props }) {
  const { gl } = useThree();

  const { nodes, materials, scene } = useGltfKtx2(
    "/models/house/wall_v3.glb",
    gl,
  );

  useAnimateModelOpacity(opacity, scene);

  return <primitive object={scene} {...props} />;

  return (
    <group {...props} dispose={null}>
      <group position={[0.03, 3.108, -0.372]} scale={4.928}>
        <mesh geometry={nodes.平面067.geometry} material={materials.外墙白} />
        <mesh
          geometry={nodes.平面067_1.geometry}
          material={materials.外墙白砖纹}
        />
        <mesh geometry={nodes.平面067_2.geometry} material={materials.外墙蓝} />
        <mesh
          geometry={nodes.平面067_3.geometry}
          material={materials.外墙蓝砖纹}
        />
        <mesh
          geometry={nodes.平面067_4.geometry}
          material={materials.乳胶漆墙面}
        />
      </group>
      <group position={[3.914, 4.547, -0.373]} scale={4.518}>
        <mesh geometry={nodes.平面068.geometry} material={materials.厨房瓷砖} />
        <mesh geometry={nodes.平面068_1.geometry} material={materials.台面} />
      </group>
      <instancedMesh
        args={[nodes.平面.geometry, materials["材质.011"], 12]}
        instanceMatrix={nodes.平面.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.排水管固定器.geometry, materials.外墙蓝, 12]}
        instanceMatrix={nodes.排水管固定器.instanceMatrix}
      />
    </group>
  );
}

// useGLTF.preload("/models/house/wall_v3.glb");
