import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DrinkModel from './DrinkModel';
import './Object.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Object = () => {
   const objectRef = useRef();
  const controlsRef = useRef();
  const placedRef = useRef(false);
  const modelRef = useRef();
  const originalColor = useRef(null);  // store original color

  useEffect(() => {
    const obj = objectRef.current;
    const screenWidth = window.innerWidth;
    const originalParent = obj.parentElement;

    let initialTop = '50%';
    if (screenWidth <= 400) initialTop = '70%';
    else if (screenWidth <= 600) initialTop = '80%';

    gsap.set(obj, {
      xPercent: -50,
      yPercent: -50,
      top: initialTop,
      left: '50%',
      rotateY: 0,
      opacity: 1,
      position: 'fixed',
    });

    // Save the original material color when model loads
    const saveOriginalColor = () => {
      if (modelRef.current) {
        const mesh = modelRef.current.getObjectByProperty('type', 'Mesh');
        if (mesh?.material?.color) {
          const c = mesh.material.color;
          originalColor.current = { r: c.r, g: c.g, b: c.b };
          console.log('Original color saved:', originalColor.current);
        }
      }
    };

    // Wait a tick to ensure model is loaded
    setTimeout(saveOriginalColor, 1000);

    const positionTween = gsap.to(obj, {
      scrollTrigger: {
        trigger: '.section1',
        start: 'top top',
        endTrigger: '.section3',
        end: 'center center',
        scrub: true,
        onUpdate: self => {
          const progress = self.progress;

          if (progress > 0.99 && !placedRef.current) {
            placedRef.current = true;

            const section3 = document.querySelector('.section3');
            section3.appendChild(obj);

            gsap.set(obj, {
              position: 'absolute',
              top: '50%',
              left: '20%',
              transform: 'translate(-50%, -50%)',
            });

            if (controlsRef.current) {
              controlsRef.current.enabled = true;
            }
          }

          if (progress < 0.99 && placedRef.current) {
            placedRef.current = false;

            originalParent.appendChild(obj);

            gsap.set(obj, {
              position: 'fixed',
              top: '50%',
              left: '20%',
              transform: 'translate(-50%, -50%)',
            });

            if (controlsRef.current) {
              controlsRef.current.enabled = false;
            }
          }
        },
      },
      left: '20%',
      top: '50%',
      rotateY: 0,
      ease: 'power1.out',
    });

    ScrollTrigger.create({
      trigger: '.section2',
      start: 'bottom center',
      endTrigger: '.section3',
      end: 'top center',
      scrub: true,
      onUpdate: self => {
        if (modelRef.current) {
          const progress = self.progress;
          const targetRotation = Math.PI / 2 * progress;
          gsap.to(modelRef.current.rotation, {
            y: targetRotation,
            duration: 2.5,
            ease: 'power2.out',
          });
        }
      },
    });

    ScrollTrigger.create({
      trigger: '.section3',
      start: 'top center',
      onEnter: () => {
        if (modelRef.current) {
          const mesh = modelRef.current.getObjectByProperty('type', 'Mesh');
          if (mesh?.material?.color) {
            console.log('Entering section3: Changing color to red');
            gsap.to(mesh.material.color, {
              r: 1,
              g: 0,
              b: 0,
              duration: 1,
              onUpdate: () => (mesh.material.needsUpdate = true),
            });
          }
        }
      },
      onLeaveBack: () => {
        if (modelRef.current) {
          const mesh = modelRef.current.getObjectByProperty('type', 'Mesh');
          if (mesh?.material?.color && originalColor.current) {
            console.log('Leaving section3: Reverting to original color', originalColor.current);
            gsap.to(mesh.material.color, {
              r: originalColor.current.r,
              g: originalColor.current.g,
              b: originalColor.current.b,
              duration: 1,
              onUpdate: () => (mesh.material.needsUpdate = true),
            });
          }
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <>
      <div ref={objectRef} className="animated-object">
        <Canvas camera={{ position: [0, 5, 10] }}>
          <Suspense fallback={null}>
            <ambientLight />
            <directionalLight position={[0, 5, 5]} intensity={1.2} />
            <OrbitControls
              ref={controlsRef}
              enableZoom={false}
              autoRotate={false}
              autoRotateSpeed={2}
              enabled={false}
            />
            <DrinkModel innerRef={modelRef} scale={2.5} position={[0, -5, 0]} />

          </Suspense>
        </Canvas>
      </div>

      <section className="section section1">
        <div className="side1">
          <h2>Introducing Blue Sky Heisenberg</h2>
          <p>
            Experience the crystal clarity and cool intensity of the Blue Sky Heisenberg drink — inspired by chemistry, perfected by flavor. This vibrant blue beverage is designed to energize your day and refresh your mind.
          </p>
        </div>
        <div className="side2">
          <h2>Inspired by Science, Crafted for Taste</h2>
          <p>
            Drawing inspiration from the legendary Heisenberg himself, this drink blends scientific precision with bold flavor. It's more than just a refreshment — it's an experience that ignites curiosity and taste.
          </p>
        </div>
      </section>

      <section className="section section2">
        <div className="side">
          <h2>What Makes It Special?</h2>
          <p>
            Packed with natural citrus extracts, a hint of mint, and a blast of blue raspberry, Blue Sky Heisenberg stands out with its unique color and invigorating effect. No artificial preservatives, just pure, crafted refreshment.
          </p>
        </div>
      </section>

      <section className="section section3">
        <div className="side">
          <h2>Perfect For Every Mood</h2>
          <p>
            Whether you're powering through your day, relaxing with friends, or pulling an all-nighter, the Blue Sky Heisenberg drink adapts to your vibe. Chill it, shake it, or mix it — the possibilities are endless.
          </p>
        </div>
      </section>

      <section className="section section4">
        <div className="main-content">
          <h2>Get Yours Today</h2>
          <p>
            Ready to taste the revolution? Blue Sky Heisenberg is now available online and in select stores near you. Refresh your reality with a drink that’s bold, blue, and unmistakably Heisenberg.
          </p>
        </div>
      </section>
    </>
  );
};

export default Object;
