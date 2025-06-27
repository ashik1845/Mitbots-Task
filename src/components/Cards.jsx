import React, { useState } from "react";
import "../styles/Cards.css"; 

const Cards = () => {
  const [frontCard, setFrontCard] = useState(1);

  const handleCardClick = (index) => {
    setFrontCard(index);
  };

  const cardContents = [
    {
      icon: "I",
      title: "For Institutes",
      description:
        "Design specialized assessment papers for various training and certification programs.",
    },
    {
      icon: "C",
      title: "For Colleges",
      description:
        "Easily generate question paper sets tailored to your course and syllabus with just a few clicks.",
    },
    {
      icon: "S",
      title: "For Schools",
      description:
        "Generate class tests, unit tests, and term exam question papers with ease.",
    },
  ];

  return (
    <section className="home-header-feature-cards-wrapper">
        
      <div className="home-header-feature-cards">
        {cardContents.map((content, index) => (
          <article
            key={index}
            className={`home-header-feature-card home-header-card-${index} ${
              frontCard === index ? "active" : ""
            }`}
            onClick={() => handleCardClick(index)}
            style={{ zIndex: frontCard === index ? 3 : 1 }}
          >
            <div className="home-header-card-icon">{content.icon}</div>
            <div className="home-header-card-content">
              <h3 className="home-header-card-title">{content.title}</h3>
              <p className="home-header-card-description">
                {content.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Cards;
