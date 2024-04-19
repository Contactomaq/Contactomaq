"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 5; // Ajusta esto al número total de slides que tengas
    const images = [
        '/Portadacontacto.png',
        '/Portadacontacto2.png',
        '/Portadacontacto3.png',
        '/Portadacontacto4.png',
        '/Portadacontacto5.png'
    ]; // Rutas de las imágenes

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
        }, 5000); // Cambia este valor para ajustar el tiempo entre slides
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div id="default-carousel" className="relative w-full border border-gray-600 rounded-lg overflow-hidden">
            {/* Carousel wrapper */}
            <div className="relative h-96 md:h-120 overflow-hidden"> {/* Ajusta la altura del carousel aquí */}
                {/* Renderizar solo el slide actual */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${index === currentSlide ? 'block' : 'hidden'} duration-700 ease-in-out`}
                        data-carousel-item
                    >
                       <Image
    src={image}
    className="absolute inset-0 w-full h-full object-cover"
    alt={`Slide ${index + 1}`}
    layout="fill"
    objectFit="cover"
/>

                    </div>
                ))}
            </div>
            {/* Slider indicators */}
            <div className="absolute flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-current={index === currentSlide ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 left-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={goToPrevSlide}
            >
                {/* Previous Button */}
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={goToNextSlide}
            >
                {/* Next Button */}
            </button>
        </div>
    );
};

export default Carousel;
