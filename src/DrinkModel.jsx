import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

const DrinkModel = (props) => {
  const { scene } = useGLTF('/models/monster-drink.glb');

  // Set ref manually if provided
  useEffect(() => {
    if (props.innerRef) {
      props.innerRef.current = scene;
    }
  }, [props.innerRef, scene]);

  return <primitive object={scene} {...props} />;
};

export default DrinkModel;
