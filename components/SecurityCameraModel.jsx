/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/security_camera.glb
Author: timmy (https://sketchfab.com/timislav845455)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/security-camera-10bdf17518e748efad80d2d40e582b9e
Title: security camera
*/

import React from "react";
import { Outlines, useGLTF } from "@react-three/drei";
import ModelOutlines from "./ModelOutlines";

export function SecurityCameraModel({
  onPointerEnter,
  onPointerLeave,
  ...props
}) {
  const { nodes, materials } = useGLTF("/models/security_camera.glb");
  return (
    <group {...props} dispose={null} scale={0.1}>
      <group scale={[1, 1, 0.078]}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Material}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        >
          <ModelOutlines thickness={0.2} />
        </mesh>
        {/* <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Material.001"]}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        /> */}
      </group>
    </group>
  );
}

useGLTF.preload("/models/security_camera.glb");
