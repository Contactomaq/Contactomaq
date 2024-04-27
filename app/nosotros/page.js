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
            <h1 className="text-3xl md:text-5xl font-extrabold text-white dark:text-white text-center md:text-left">
  Sobre Nosotros
</h1>

            </div>
            <div className="">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-8">
                {paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="bg-black rounded-full p-4 shadow-lg">
      <h3 className="text-3xl md:text-5xl font-extrabold text-white dark:text-white text-center md:text-left">Preguntas frecuentes</h3>
      </div>
      <div className="container mx-auto px-4">
        <Accordion />
      </div>
      <br />
      <h3 className="text-center">Opiniones</h3>
      <Opiniones />
    </>
  );
};

export default About;
