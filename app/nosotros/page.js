"use client"
import React, { useState, useEffect, useMemo } from "react";
import Accordion from "../components/Acordion";
import Opiniones from "../components/Opiniones";

const About = () => {
  const [paragraph, setParagraph] = useState("SOMOS CONTACTO");
  const [index, setIndex] = useState(0);

  const paragraphs = useMemo(() => [
    "Horarios de atención de lunes a viernes de 09:00 Hs a 18:00 Hs",
    "Contamos con varios metodos de pago",
    "Donde? En José Manuel Estrada 1723, B1742 Paso del Rey, Provincia de Buenos Aires"
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index, paragraphs.length]); // Agregamos paragraphs.length al array de dependencias

  useEffect(() => {
    setParagraph(paragraphs[index]);
  }, [index, paragraphs]); // Agregamos index y paragraphs al array de dependencias

  return (
    <>
      <div className="bg-gradient-animation">
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="bg-black rounded-full p-4 shadow-lg">
            <h1 className="text-lg md:text-xl font-semibold text-white dark:text-white text-center">
  Sobre Nosotros
</h1>

            </div>
            <div className="mx-auto max-w-lg">
  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white dark:text-white leading-relaxed mb-8">
    {paragraph}
  </p>
</div>
          </div>
        </div>
      </div>
      <br />
      <div className="bg-black rounded-full p-4 shadow-lg">
      <h3 className="text-lg md:text-xl font-semibold text-white dark:text-white text-center">Preguntas frecuentes</h3>


      </div>
      <br/>
      <div className="container mx-auto px-4">
  <Accordion />
</div>
<div className="text-center mt-8">
  <h3 className="text-lg md:text-xl font-semibold text-white dark:text-white">Opiniones</h3>
  <Opiniones />
</div>

    </>
  );
};

export default About;
