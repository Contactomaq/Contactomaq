import React, { useState } from 'react';
import SliderNuevo from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'; // Importar Image desde Next.js

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
       
       <div className="card w-full mx-auto">
       <div className="card-image">
         <Image
           src={
             defaultImage[item.title] === item.title
               ? defaultImage.linkDefault
               : item.linkImg
           }
           alt={item.title}
           onError={handleErrorImage}
           width={300}
           height={300}
           className="object-cover w-full h-full"
         />
       </div>
       <div className="card-content p-4">
         <h1 className="title text-lg font-semibold">{item.title}</h1>
         <div className="card-details mt-2">
           <h3 className="price text-base font-bold">{item.price}</h3>
           <span className="category text-sm">{item.category}</span>
         </div>
       </div>
     </div>
     
      
       
        ))}
      </SliderNuevo>
    </div>
  );
}

export default MiComponente;

