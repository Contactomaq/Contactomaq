"use client";
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Seteamos un timeout para controlar el momento de inicio de la animación
    const timer = setTimeout(() => {
      setIsVisible(true); // Cambiar a visible después de 500 ms
    }, 0.10); // Esperamos 500 ms antes de mostrar la imagen

    // Limpiar el timeout si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </div>
      <div
        className={`relative bg-cover bg-center h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: "url('/jardin.png')" }}
      >
        {/* Filtro de color oscuro sobre la imagen (usando negro con opacidad) */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Contenido sobre la imagen */}
        <div className="flex items-center justify-center h-full relative z-10 text-center px-4">
          <div className="bg-white bg-opacity-80 rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4">
              Servicio Técnico
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-indigo-600 mb-6">
              Técnico Oficial | Venta, repuestos e insumos para motoimplementos de bosque y jardín
            </h2>
            <p className="text-gray-700 md:text-lg lg:text-xl">
              Ofrecemos soluciones completas para el mantenimiento de tus equipos de jardinería y bosque. 
              Nuestro equipo está capacitado para brindarte el mejor servicio y los productos de mayor calidad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
