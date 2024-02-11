import { OrbitControls } from "@react-three/drei";
import {Model} from "./AnimatedWoman";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Model/>
        {/*<mesh>*/}
            {/*<boxGeometry />*/}
        {/*<meshNormalMaterial />*/}
        {/*</mesh>*/}
    </>
  );
};
