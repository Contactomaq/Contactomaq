"use client"
import React, { useState, useEffect } from "react";
import Accordion from "../components/Acordion";
import Opiniones from "../components/Opiniones";

const About = () => {
  const [paragraph, setParagraph] = useState("Este es un párrafo de ejemplo");
  const paragraphs = [
    "Este es un párrafo de ejemplo",
    "Este es otro párrafo",
    "Y aquí hay un tercer párrafo"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setParagraph(paragraphs[index]);
  }, [index]);

  return (
    <>
      <div className="bg-gradient-animation">
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white md-text-center">
                Contactomaq
                <small className="ms-2 font-semibold text-gray-600 dark:text-gray-400">
                  Sobre nosotros!
                </small>
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

      <h3 className="text-center">Preguntas frecuentes</h3>

      <div className="container mx-auto px-4">
        <Accordion />
      </div>
      <br />
      <h3 className="text-center">Opiniones</h3>
     
          <Opiniones/>
      
    </>
  );
};

export default About;
