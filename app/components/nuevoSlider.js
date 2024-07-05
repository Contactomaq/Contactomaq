"use client"
import { useState } from 'react';


const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 px-4 py-2 rounded-md z-10"
        onClick={prevSlide}
      >
        Anterior
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className="mx-auto"
      />
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 px-4 py-2 rounded-md z-10"
        onClick={nextSlide}
      >
        Siguiente
      </button>
    </div>
  );
};

export default ImageSlider;
