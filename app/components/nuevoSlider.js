import React, { useState } from 'react';
import SliderNuevo from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../globals.css'; // Cambiado el nombre del archivo CSS
import { dataDigitalBestSeller } from '../data';


function MiComponente() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      
    }));
  };

  return (
    <div className="container mx-auto">
      <SliderNuevo {...settings} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
        {dataDigitalBestSeller.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h1 className="text-lg font-semibold p-4">{item.title}</h1>
            </div>
            <div className="card-bottom bg-gray-800 text-white py-4 px-6">
              <h3 className="text-lg">{item.price}</h3>
              <span className="category text-sm">{item.category}</span>
            </div>
          </div>
        ))}
      </SliderNuevo>
    </div>
  );
}

export default MiComponente;
