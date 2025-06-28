// Parallax.jsx
import React, { useEffect } from "react";
import "../styles/Parallax.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import perfume1 from "../assets/perfume1.png";
import perfume2 from "../assets/perfume2.png";
import perfume3 from "../assets/perfume3.png";
import perfume4 from "../assets/perfume4.png"; // You should have this image

gsap.registerPlugin(ScrollTrigger);

const Parallax = () => {
  useEffect(() => {
    // Section 1
    gsap.to(".bottle-main", {
      y: -100,
      scrollTrigger: {
        trigger: ".section-1",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".bg-text", {
      y: 100,
      scrollTrigger: {
        trigger: ".section-1",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Section 2
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2",
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });

    tl2.fromTo(
      ".bottle-side",
      { x: -300, y: 300, opacity: 0 },
      { x: 0, y: 0, opacity: 1, ease: "power2.out" }
    ).fromTo(
      ".text-side",
      { x: 300, y: 300, opacity: 0 },
      { x: 0, y: 0, opacity: 1, ease: "power2.out" },
      "<"
    );

    const tl2Exit = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });

    tl2Exit.to(".bottle-side", {
      x: -300,
      y: -300,
      ease: "power2.in",
    }).to(
      ".text-side",
      {
        x: 300,
        y: -300,
        ease: "power2.in",
      },
      "<"
    );

    // ✅ Section 3
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-3",
      start: "top top",
      end: "+=200%",
      scrub: true,
      pin: ".final-wrapper",
      anticipatePin: 1,
    }
  });

  // Step 1: Perfumes go to their corners
  tl.to(".perfume-3", {
    x: "-40vw",
    y: "-30vh",
    ease: "power2.inOut",
  }, 0);

  tl.to(".perfume-4", {
    x: "-40vw",
    y: "30vh",
    ease: "power2.inOut",
  }, 0);

  // Step 2: Texts fade in aligned with perfume positions
  tl.to(".text-top-right", {
    opacity: 1,
    x: 0,
    ease: "power1.out",
  }, ">0.3");

  tl.to(".text-bottom-right", {
    opacity: 1,
    x: 0,
    ease: "power1.out",
  }, "<");
  }, []);

  return (
    <div className="parallax-container">
      <section className="section section-1">
        <div className="bg-text">PERFUME</div>
        <img src={perfume1} className="bottle-main" alt="Main Perfume" />
      </section>

      <section className="section section-2">
        <img src={perfume2} className="bottle-side" alt="Side Perfume" />
        <div className="text-side">
          Unveil a fragrance that speaks your soul. Crafted with rare essences
          and timeless elegance, this perfume lingers like a whispered memory.
        </div>
      </section>

<section className="section section-3">
  <div className="final-wrapper">
    <img src={perfume3} className="perfume-3" alt="Perfume 3" />
    <img src={perfume4} className="perfume-4" alt="Perfume 4" />
    <div className="text-top-right">More than a scent, it’s your signature.
Wear it. Own the moment.</div>
    <div className="text-bottom-right">One spray, endless impressions.
Let your essence speak first.

3.</div>
  </div>
</section>
<section className="ghost-scroll" />


    </div>
  );
};

export default Parallax;
