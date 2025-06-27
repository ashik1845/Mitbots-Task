import React, { useState } from "react";
import "../styles/DiffCards.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg"; 
const images = [img1, img2, img3];

export default function DiffCards() {
  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = () => setImgIndex((prev) => (prev + 1) % images.length);
  const prevImg = () => setImgIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="cards-wrapper">
      
      <div className="card card-blur">
        <p> Wildlife is vital for a balanced environment. It maintains ecological stability, supports biodiversity,
            and provides cultural and recreational value to humans.</p>
      </div>

      <div className="card card-slide">
        <p> Wildlife is vital for a balanced environment.</p>
        <div className="extra-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet magna sed
          nisl ullamcorper ultrices. .</div>
      </div>

      
      <div className="card card-carousel">
        <p> Wildlife is vital for a balanced environment. It maintains ecological stability, supports biodiversity,
            and provides cultural and recreational value to humans.</p>
        <div className="carousel">
          <button onClick={prevImg}>&lt;</button>
          <img src={images[imgIndex]} alt="Wildlife" />
          <button onClick={nextImg}>&gt;</button>
        </div>
      </div>

      
      <div className="card card-scroll">
        <div className="scroll-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet magna sed
          nisl ullamcorper ultrices. Praesent convallis lorem at dolor vulputate, eget
          fermentum nunc tristique. Donec eget elit ac lorem posuere tempor. Sed nec dapibus
          nulla, ut pretium magna.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet magna sed
          nisl ullamcorper ultrices. Praesent convallis lorem at dolor vulputate, eget
          fermentum nunc tristique. Donec eget elit ac lorem posuere tempor. Sed nec dapibus
          nulla, ut pretium magna.
        </div>
      </div>

     
      <div className="card card-expand">
        <img src={img1} alt="Wildlife" />
        <div className="expand-text">
          <p className="preview-text">Hover this text to expand and see more content about wildlife and its ecosystem.</p>
          <p className="full-text"> Wildlife is vital for a balanced environment. It maintains ecological stability, supports biodiversity,
            and provides cultural and recreational value to humans. Protecting it is essential for future generations.
          </p>
        </div>
      </div>

      <div className="hover-card">
  <div className="card-image-container">
    <img src={img1} alt="Card Image" class="card-image" />
  </div>
  <div className="card-text">
    <h3>Lion</h3>
    <p>Wildlife is vital for a balanced environment.</p>
  </div>
</div>

      {/* Card 7 - Split Profile Card */}
      <div className="card7 box">
        <div className="imgBox">
          <img
             src={img1} alt="Karan Singh"
          />
        </div>
        <div className="content">
          <h2>
            <br />
            <span>Singam</span>
          </h2>
        </div>
      </div>

      {/* Card 8 - 3D Flip Card */}
      <div className="card8 card">
        <div className="img-container">
          <img
            src="http://santoshg.com/codepen/iron_man.jpg"
            alt="Iron Man"
          />
        </div>
        <div className="card-details">
          <h2>Iron Man</h2>
          <p>
            Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics.
            The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber,
            and designed by artists Don Heck and Jack Kirby.
          </p>
        </div>
      </div>


    </div>
  );
}