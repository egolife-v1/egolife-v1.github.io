import { CameraControls, Center, Sky, useGLTF } from "@react-three/drei";
import { editable as e, PerspectiveCamera } from "@theatre/r3f";
import * as THREE from "three";
import Duck from "./Duck";
import VideoAnnotation from "./VideoAnnotation";
import SecurityCamera from "./SecurityCamera";
import Person from "./Person";
import { SecurityCameraModel } from "./SecurityCameraModel";
import Garden from "./house/Garden";
import Level1 from "./house/Level1";
import Level1Other from "./house/Level1Other";
import Level2Other from "./house/Level2Other";
import Level2 from "./house/Level2";
import Roof from "./house/Roof";
import Wall from "./house/Wall";
import Dog from "./Dog";
import Bear from "./Bear";
import { useControls, button } from "leva";
import { useContext, useEffect, useRef } from "react";
import cameraPositions from "@/lib/cameraPositions";
import { ControlsContext } from "@/app/page";

const Space = () => {
  const controls = useRef();

  const { allowControl, homeView, showSights } = useContext(ControlsContext);

  useControls("Helper", {
    getLookAt: button(() => {
      const position = controls.current.getPosition();
      const target = controls.current.getTarget();
      console.log([...position, ...target]);
    }),
    toJson: button(() => console.log(controls.current.toJSON())),
  });

  useEffect(() => {
    controls.current.setLookAt(...cameraPositions.init);
  }, []);

  useEffect(() => {
    controls.current.setLookAt(...cameraPositions[homeView], true);
  }, [homeView]);

  return (
    <>
      {/* <PerspectiveCamera theatreKey="Camera" makeDefault /> */}

      <CameraControls
        ref={controls}
        mouseButtons={
          allowControl
            ? {
                left: 1,
                middle: 8,
                right: 2,
                wheel: 8,
              }
            : {
                left: 0,
                middle: 0,
                right: 0,
                wheel: 0,
              }
        }
        // disable all touch gestures
        touches={
          allowControl
            ? // FIXME: Touch controls
              {
                one: 32,
                two: 1024,
                three: 1024,
              }
            : {
                one: 0,
                two: 0,
                three: 0,
              }
        }
      />

      <Sky />

      {/* Lighting */}
      <ambientLight intensity={2} />
      <directionalLight intensity={2} />

      {/* House */}
      {/* <primitive object={model.scene} position={[-20, 0, 0]} /> */}

      {/* House models */}
      <Garden />
      <Level1 visible={true} />
      <Level1Other visible={homeView === "all"} />
      <Level2Other visible={homeView === "all"} />
      <Level2 visible={homeView !== "level-1"} />
      <Roof visible={homeView === "all"} />
      <Wall visible={homeView === "all"} />

      {/* Level 1 Cameras */}
      {[...Array(8).keys()].map((i) => (
        <SecurityCamera
          key={`level-1-camera-${i + 1}`}
          groupId={"Level-1"}
          id={i + 1}
          videoSrc={"/videos/sample-video.mp4"}
          showSight={showSights}
        />
      ))}

      {/* Level 2 Cameras */}
      {[...Array(7).keys()].map((i) => (
        <SecurityCamera
          key={`level-2-camera-${i + 1}`}
          groupId={"Level-2"}
          id={i + 1}
          videoSrc={"/videos/sample-video.mp4"}
          visible={homeView !== "level-1"}
          showSight={showSights}
        />
      ))}

      {/* People */}
      {[...Array(6).keys()].map((i) => (
        <Person
          key={`person-${i + 1}`}
          id={i + 1}
          videoSrc={"/videos/sample-video.mp4"}
          model={i < 2 ? Duck : i < 4 ? Dog : Bear}
          showSight={showSights}
        />
      ))}
    </>
  );
};

export default Space;

useGLTF.preload("egohouse.gltf");