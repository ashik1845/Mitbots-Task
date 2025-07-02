import React, { useEffect } from "react";
import "../styles/Cursor.css";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const smokeCount = 10; 

      for (let i = 0; i < smokeCount; i++) {
        const smoke = document.createElement("div");
        smoke.className = "cursor-smoke";

        const size = Math.random() * 10 + 6; // 6px to 16px
        const hue = Math.floor(Math.random() * 360);
        const blur = Math.random() * 8 + 4; // 4px to 12px
        const opacity = Math.random() * 0.4 + 0.2; // 0.2 to 0.6

   
        const offsetX = (Math.random() - 0.5) * 30;
        const offsetY = (Math.random() - 0.5) * 30;

        smoke.style.width = `${size}px`;
        smoke.style.height = `${size}px`;
        smoke.style.left = `${e.clientX + offsetX}px`;
        smoke.style.top = `${e.clientY + offsetY}px`;
        smoke.style.backgroundColor = `hsla(${hue}, 100%, 70%, ${opacity})`;
        smoke.style.filter = `blur(${blur}px)`;

        document.body.appendChild(smoke);

        setTimeout(() => {
          smoke.remove();
        }, 1200); 
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="cursor-page">
      <h1 className="cursor-heading">Welcome to the Smoke Trail Page</h1>
      <p className="cursor-subtext">Move your cursor to create colorful smoke!</p>
    </div>
  );
};

export default Cursor;
