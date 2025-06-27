import React, { useRef, useEffect, useState } from "react";
import "../styles/Offerscroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";import "swiper/css";

import offer1 from "../assets/img1.png";
import offer2 from "../assets/img2.png";
import offer3 from "../assets/img3.png";
import offer4 from "../assets/img4.png";
import offer5 from "../assets/img5.png";
import offer6 from "../assets/img6.png";

gsap.registerPlugin(ScrollTrigger);

const images = [offer1, offer2, offer3, offer4, offer5, offer6];

const textContent = [
{
title: "Design Of Websites & Apps",
description:
"Impress your viewers with aesthetically beautiful apps and webpages. Our designs create appealing digital interfaces that have a lasting impression by effectively combining functionality and aesthetics.",
},
{
title: "Portfolio Development",
description:
"Stand out professionally with our customised portfolio designs, which are made to showcase your unique talents and make a lasting impression.",
},
{
title: "Business and Product Websites",
description:
"With our custom websites for businesses and products, ignite online success. We create captivating digital experiences that captivate users and propel business growth.",
},
{
title: "E-Commerce Sites",
description:
"With the help of our robust e-commerce platforms, unleash the potential of online sales. We design smooth, intuitive platforms that draw users in and ensures a delightful and safe buying experience.",
},
{
title: "Domain Hosting",
description:
"Our robust domain hosting services make it easy to build a strong online presence. You can rely on us to offer the framework for a compelling, dependable, and easily navigable website.",
},
{
title: "Application Development",
description:
"With the help of our creative app development services, implement your ideas. We are experts at creating user-friendly mobile applications that fascinate and involve a diverse range of clients, from conception to implementation.",
},
];

const Offerscroll = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const textRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    const textContainer = textRef.current;
    const numImages = images.length;

    const scrollLength = window.innerWidth * 0.5 * (numImages - 1);

    gsap.killTweensOf(track);
    gsap.killTweensOf(textContainer);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${scrollLength}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(
      track,
      {
        x: -window.innerWidth * 0.5 * (numImages - 1),
        ease: "none",
      },
      0
    );

    tl.to(
      textContainer,
      {
        y: -100 * (numImages - 1) + "%",
        ease: "none",
      },
      0
    );
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setPrevImage(currentImage);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, currentImage]);

  return (
    <section className="offer-section" ref={sectionRef}>
      <div className="offer-heading">What We Offer</div>

      {!isMobile ? (
        <div className="offer-content">
          <div className="offer-text-outer">
            <div className="offer-text-inner" ref={textRef}>
              {textContent.map((item, index) => (
                <div className="offer-text-block" key={index}>
                  <div>{item.title}</div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="image-scroll-container">
            <div className="image-strip">
              <div className="image-track" ref={trackRef}>
                {images.map((img, index) => (
                  <img key={index} src={img} alt={`Offer ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mobile-offer">
          <div className="mobile-image-strip">
            <div className="mobile-static-image">
              <img
                src={images[currentImage]}
                alt={`Mobile Offer ${currentImage + 1}`}
              />
              <div className="mobile-card-wrapper">
                {textContent.map((item, index) => (
                  <div
                    key={index}
                    className={`mobile-card ${
                      index === currentImage
                        ? "enter"
                        : index === prevImage
                        ? "exit"
                        : ""
                    }`}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Offerscroll;
