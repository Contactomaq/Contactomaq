import React from 'react';

const HeroSection = () => {
  return (
    <>
<div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
</div>
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/jardin.png')" }}>
      {/* Fondo oscuro con opacidad ajustada */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 opacity-70"></div>
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




