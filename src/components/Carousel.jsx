import React, { useState, useEffect } from "react";
import "../styles/carousel.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";


const Carousel = ({ slides, type = "horizontal", autoSlide = false, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = slides.length;

  const nextSlide = () => {
    if (type === "infinite") {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, totalItems - 1));
    }
  };

  const prevSlide = () => {
    if (type === "infinite") {
      setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    if (autoSlide) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoSlide, interval]);

  const showArrows = type !== "infinite";

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <h2 className="carousel-title">{type.charAt(0).toUpperCase() + type.slice(1)} Carousel</h2>
        <div className={`carousel ${type}`}>
          <div className="carousel-view">
            <div
              className="carousel-track"
              style={{
                transform:
                  type === "vertical"
                    ? `translateY(-${currentIndex * 100}%)`
                    : `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {slides.map((src, idx) => (
                <div className="carousel-item" key={idx}>
                  <div className="image-card">
                    <img src={src} alt={`Slide ${idx + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {type !== "vertical" && showArrows && (
            <>
              <button className="nav-btn prev" onClick={prevSlide}>‹</button>
              <button className="nav-btn next" onClick={nextSlide}>›</button>
            </>
          )}
        </div>

      
        {type === "vertical" && showArrows && (
          <div className="vertical-buttons-wrapper">
            <button className="nav-btn vertical-btn" onClick={prevSlide}>↑</button>
            <button className="nav-btn vertical-btn" onClick={nextSlide}>↓</button>
          </div>
        )}
      </div>
    </div>
  );
};


const CarouselDemo = () => {
  const images = [img1, img2, img3];

  return (
    <div>
      <Carousel slides={images} type="horizontal" />
      <Carousel slides={images} type="vertical" />
      <Carousel slides={images} type="infinite" autoSlide={true} interval={2000} />
    </div>
  );
};

export default CarouselDemo;
