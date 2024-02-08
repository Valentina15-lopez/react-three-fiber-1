import {
  ContactShadows,
  Environment,
  OrbitControls,
  useCursor,
} from "@react-three/drei";
import { AnimatedWoman } from "./AnimatedWoman";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <AnimatedWoman />
    </>
  );
};
