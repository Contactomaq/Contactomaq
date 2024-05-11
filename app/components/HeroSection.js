import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </div>
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/jardin.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10" style={{ top: "50%", transform: "translateY(-60%)" }}>
          <div className="bg-black rounded-full p-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-black text-white">
              Servicio Técnico
            </h1>
          </div>
          <div className="mt-6 md:mt-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-4 md:mb-8 shadow-text-glow">
              Tecnico Oficial
              Venta, repuestos e insumos para motoimplementos de bosque y jardín!
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
