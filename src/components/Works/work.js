import React, { useState } from 'react';
import './work.css';

const Work = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevSlide = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    
    <div className="image-slider">
      <div className="slider-image">
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
      </div>
      <div className="slider-controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Work;
