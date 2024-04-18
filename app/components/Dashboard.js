"use client"
import React, { useState } from "react";

const Dashboard = () => {
  const [showSection, setShowSection] = useState(null);

  const toggleSection = (section) => {
    setShowSection(section === showSection ? null : section);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md py-8 lg:py-10 flex flex-col lg:flex-row">
          <div className="bg-gray-200 lg:w-1/4 border-r border-gray-300 overflow-y-auto">
            <h1 className="text-3xl font-bold text-center mb-8 py-4 bg-gray-700 text-white">Maquinas</h1>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => toggleSection("marcas")}
                  className="w-full py-2 px-4 text-left text-black hover:bg-gray-300 hover:underline focus:outline-none rounded"
                >
                  Marcas
                </button>
              </li>
              <li>
                <button
                  onClick={() => toggleSection("productos")}
                  className="w-full py-2 px-4 text-left text-black hover:bg-gray-300 hover:underline focus:outline-none rounded"
                >
                  Productos
                </button>
              </li>
              <li>
                <button
                  onClick={() => toggleSection("info")}
                  className="w-full py-2 px-4 text-left text-black hover:bg-gray-300 hover:underline focus:outline-none rounded"
                >
                  Info
                </button>
              </li>
              <li>
                <button
                  onClick={() => toggleSection("ayuda")}
                  className="w-full py-2 px-4 text-left text-black hover:bg-gray-300 hover:underline focus:outline-none rounded"
                >
                  Ayuda
                </button>
              </li>
            </ul>
          </div>
          <div className="lg:w-3/4 mt-8 lg:mt-0">
            <div id="marcas" className={showSection === "marcas" ? "mb-8 text-center" : "hidden"}>
              <h2 className="text-3xl font-semibold mb-4">Marcas</h2>
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec justo at ex varius bibendum. Nullam vitae tristique ligula, eu molestie nunc. Mauris vel metus nec risus vehicula hendrerit nec eget felis. Donec a sapien ut nulla ultricies posuere.
              </p>
            </div>
            <div id="productos" className={showSection === "productos" ? "mb-8 overflow-y-auto max-h-96" : "hidden"}>
              <h2 className="text-2xl text-center font-semibold mb-4">Productos</h2>
              {/* Aquí va el contenido de los productos */}
            </div>
            <div id="info" className={showSection === "info" ? "mb-8" : "hidden"}>
              <h2 className="text-2xl text-center font-semibold mb-4">Info</h2>
              {/* Contenido de información adicional */}
            </div>
            <div id="ayuda" className={showSection === "ayuda" ? "" : "hidden"}>
              <h2 className="text-2xl text-center font-semibold mb-4">Ayuda</h2>
              {/* Contenido relacionado con la ayuda */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
