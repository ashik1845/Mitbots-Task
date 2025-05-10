import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="main-title">Mitbots Tasks</h1>

      <div className="section-row">
        <h1 className="section-heading">Multiple Cards Overlapping</h1>
        <button className="see-button" onClick={() => navigate("/cards")}>
          See
        </button>
      </div>

      <div className="section-row">
        <h1 className="section-heading">What we offer replicate</h1>
        <button className="see-button" onClick={() => navigate("/offerscroll")}>
          See
        </button>
      </div>
    </div>
  );
};

export default Home;
