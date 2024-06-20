/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/house/roof_v3.glb
*/

import React, { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import useGltfKtx2 from "@/lib/useGltfKtx2";
import useAnimateModelOpacity from "@/lib/useAnimateModelOpacity";

export default function Roof({ opacity = 1, ...props }) {
  const { gl } = useThree();

  const { nodes, materials, scene } = useGltfKtx2(
    "/models/house/roof_v3.glb",
    gl,
  );

  useAnimateModelOpacity(opacity, scene);

  return <primitive object={scene} {...props} />;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.平面009.geometry}
        material={materials.屋檐}
        position={[1.764, 5.861, -4.374]}
        scale={3.298}
      />
      <mesh
        geometry={nodes.平面010.geometry}
        material={materials.外墙白}
        position={[0.161, 6.395, 0.409]}
        scale={5.309}
      />
      <mesh
        geometry={nodes.二楼客厅吊顶.geometry}
        material={materials.乳胶漆墙面}
        position={[0.801, 6.021, -0.41]}
        scale={2.916}
      />
    </group>
  );
}

// useGLTF.preload("/models/house/roof_v3.glb");
