import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="main-title">Mitbots Tasks</h1>

      <div className="section-row">
  <h1 className="section-heading">JCREA Replicate</h1>
  <button
    className="see-button"
    onClick={() =>
      window.open("https://ashik-frontend-mitbots.netlify.app/", "_blank")
    }
  >
    See
  </button>
</div>


      <div className="section-row">
        <h1 className="section-heading">Multiple Cards Overlapping</h1>
        <button className="see-button" onClick={() => navigate("/cards")}>
          See
        </button>
      </div>

      <div className="section-row">
  <h1 className="section-heading">Quetor</h1>
  <button
    className="see-button"
    onClick={() =>
      window.open("https://quetor.com/", "_blank")
    }
  >
    See
  </button>
</div>

      <div className="section-row">
        <h1 className="section-heading">What we offer replicate</h1>
        <button className="see-button" onClick={() => navigate("/offerscroll")}>
          See
        </button>
      </div>

      <div className="section-row">
        <h1 className="section-heading">3D Object three.js</h1>
        <button className="see-button" onClick={() => navigate("/object")}>
          See
        </button>
      </div>
<div className="section-row">
  <h1 className="section-heading">Portfolio</h1>
  <button
    className="see-button"
    onClick={() =>
      window.open("https://mitbots-portfolio.netlify.app/", "_blank")
    }
  >
    See
  </button>
</div>

<div className="section-row">
        <h1 className="section-heading">Text Animation</h1>
        <button className="see-button" onClick={() => navigate("/text")}>
          See
        </button>
      </div>

      <div className="section-row">
        <h1 className="section-heading">Different Cards</h1>
        <button className="see-button" onClick={() => navigate("/diffcards")}>
          See
        </button>
      </div>
      
      <div className="section-row">
        <h1 className="section-heading">Parallax</h1>
        <button className="see-button" onClick={() => navigate("/parallax")}>
          See
        </button>
      </div>

<div className="section-row">
        <h1 className="section-heading">Carousel</h1>
        <button className="see-button" onClick={() => navigate("/carousel")}>
          See
        </button>
      </div>

      <div className="section-row">
        <h1 className="section-heading">Cursor effect</h1>
        <button className="see-button" onClick={() => navigate("/cursor")}>
          See
        </button>
      </div>

    </div>    
  );
};

export default Home;
