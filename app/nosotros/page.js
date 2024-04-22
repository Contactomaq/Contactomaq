"use client"
import React, { useState, useEffect, useMemo } from "react";
import Accordion from "../components/Acordion";
import Opiniones from "../components/Opiniones";

const About = () => {
  const [paragraph, setParagraph] = useState("Este es un párrafo de ejemplo");
  const [index, setIndex] = useState(0);

  const paragraphs = useMemo(() => [
    "Este es un párrafo de ejemplo",
    "Este es otro párrafo",
    "Y aquí hay un tercer párrafo"
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
    }, 4000);

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
              <h2 className="text-5xl font-extrabold text-white dark:text-white md-text-center">
                Sobre Nosotros
              </h2>
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
      <h3 className="text-center">Preguntas frecuentes</h3>
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
