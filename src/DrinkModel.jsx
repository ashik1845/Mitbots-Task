import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const DrinkModel = forwardRef((props, ref) => {
  const { scene } = useGLTF('/models/monster-drink.glb');
  return <primitive ref={ref} object={scene} {...props} />;
});

export default DrinkModel;
