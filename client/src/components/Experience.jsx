import {
  ContactShadows,
  Environment,
  OrbitControls,
  useCursor,
} from "@react-three/drei";

import { useAtom } from "jotai";
import { useState } from "react";
import * as THREE from "three";
import { AnimatedWoman } from "./AnimatedWoman";
import { avatarAtom, socket } from "./SocketManager";
export const Experience = () => {
  const [avatars] = useAtom(avatarAtom);
  const [onFloor, setOnFloor] = useState(false);
  useCursor(onFloor);

  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <ContactShadows blur={2} />
      <OrbitControls />
      <mesh
        rotation-x={-Math.PI / 2}
        position-y={-0.001}
        onClick={(e) => socket.emit("move", [e.point.x, 0, e.point.z])}
        onPointerEnter={() => setOnFloor(true)}
        onPointerLeave={() => setOnFloor(false)}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      {avatars.map((avatar) => (
        <AnimatedWoman
          key={avatar.id}
          position={
            new THREE.Vector3(
              avatar.position[0],
              avatar.position[1],
              avatar.position[2]
            )
          }
          hairColor={avatar.hairColor}
          topColor={avatar.topColor}
          bottomColor={avatar.bottomColor}
        />
      ))}
    </>
  );
};
