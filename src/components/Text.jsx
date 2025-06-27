import React, { useEffect, useState } from "react";
import "../styles/Text.css";

const TypingText = () => {
  const words = ["magic.", "power.", "joy."];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    let speed = isDeleting ? 60 : 120;

    const handleTyping = () => {
      setText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <h2 className="typing-container">
      This is pure <span className="typing-text">{text}</span>
    </h2>
  );
};

const SlidingText = () => {
  const words = ["creativity.", "freedom.", "expression."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="sliding-container">
      Unlock your&nbsp;
      <span className="sliding-wrapper">
        <div
          className="sliding-word"
          style={{ transform: `translateY(-${index * 33.33}%)` }}
        >
          {words.map((word, i) => (
            <div className="sliding-line" key={i}>
              {word}
            </div>
          ))}
        </div>
      </span>
    </h2>
  );
};


const Text = () => (
  <div className="text-section">
    <div className="content">
      <TypingText />
      <SlidingText />
      <p className="description">Where imagination meets technology.</p>
      <button className="cta-button">Get Started</button>
    </div>
  </div>
);

export default Text;
