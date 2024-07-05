"use client"
// Section4.js

import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

const Section4 = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">De motores grandes</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {/* Tarjeta 1 */}
        <div className="group relative bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <div className="aspect-w-16 aspect-h-9">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6paEXZpubi-S6dlBQMGujCStbQ53_VZWZESkKF37Bw&s" width={150} height={150} alt="Generadores" className="object-cover w-full h-full" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Generadores</h3>
            <p className="mt-1 text-sm text-gray-600">Modelo: Shimaha</p>
        
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm font-medium text-gray-900">Consultá tu Promo!</p>
              <button
                onClick={() => openModal("Generador SHIMAHA", "DESCRIPCIÓN: Este es un generador de alta potencia ideal para uso industrial. GRUPO ELECTROGENO SHIMAHA 8500E MOTOR TIPO HONDA 19HP ARRANQUE ELECTRICO BT DE ENCENDIDO BATERIA INCLUIDA USO INTENSIVO CON RUEDAS Y MANIJA SALIDAS 220V 16AMP (x2) El precio total es de $1.850000",)}
                className="px-3 py-1 text-sm text-white bg-gray-900 hover:bg-gray-800 rounded-md"
              >
                Ver detalles
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="group relative bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <div className="aspect-w-16 aspect-h-9">
            <Image src="/petri.png" width={150} height={150} alt="Bordadoras" className="object-cover w-full h-full" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Bordeadoras</h3>
            <p className="mt-1 text-sm text-gray-600">Modelo: Petri</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm font-medium text-gray-900">Consultá tu Promo!</p>
              <button
                onClick={() => openModal("Bordeadora Petri New 600w Color Rojo 220v", "Lo que tenés que saber de este producto Voltaje: 220V Diámetro de corte de 300mm. Tipo de alimentación: corriente eléctrica.Sistema de corte: tanza con un diámetro máximo de 1.5mm. Con 2 rulemanes. Pesa 3.25kg.Con protector de seguridad. Mantiene el césped prolijo llegando a todos los bordes necesarios. No incluye batería. $79.000")}
                className="px-3 py-1 text-sm text-white bg-gray-900 hover:bg-gray-800 rounded-md"
              >
                Ver detalles
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="group relative bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <div className="aspect-w-16 aspect-h-9">
            <Image src="/lusqtoff.png" width={150} height={150} alt="Desmalezadoras" className="object-cover w-full h-full" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Desmalezadoras</h3>
            <p className="mt-1 text-sm text-gray-600">Modelo: Lusqtoff</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm font-medium text-gray-900">Consultá tu Promo!</p>
              <button
                onClick={() => openModal("Desmalezadora Lusqutoff LD 52", "DESMALEZADORA 52CC EJE CARDÁNICO - VOLANTE REVATIBLECódigo: LD52 Cilindrada: 51,7 cc Tipo de eje: Recto de acero Manillar: Tipo Simétrico Transmisión: Cardan de 8mm Equipo provisto: Cabezal de tanza italiano Arnetoli Cuchilla 3 puntas Arnés doble Protector plástico deslizable sobre cañonera y cuchilla corta tanza. Cap. de tanque comb.: 0,8 Lts Peso: 8 Kg El Precio es: $ A presupuetar.")}
                className="px-3 py-1 text-sm text-white bg-gray-900 hover:bg-gray-800 rounded-md"
              >
                Ver detalles
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 4 */}
        <div className="group relative bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <div className="aspect-w-16 aspect-h-9">
            <Image src="/sthils.png" width={150} height={150} alt="Motosierras" className="object-cover w-full h-full" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Motosierras</h3>
            <p className="mt-1 text-sm text-gray-600">Modelo: Sthil</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm font-medium text-gray-900">Consultá tu Promo!</p>
              <button
                onClick={() => openModal("MOTOSIERRA STIHL MS-382 72.2CC 5.3HP BARRA 30 pulgadas RSC", "Cuenta con sistema ElastoStart y válvula de descompresión, freno de cadena QuickStop de activación automática, mando confortable unificado multifuncional para el arranque, servicio y parada del equipo, sistema de filtro de larga duración con compensador y cierres de depósitos accionables sin herramienta. 1 Año de garantía contra defectos de fábrica a partir de la fecha de compra. Modelo: MS 382 Cilindrada: 72.2 cm3 Diámetro: 52 mm Carrera: 34 mm Potencia: 3,9 kW Potencia: 4,6 CV Relación peso potencia: 1.6 kg/kW/9500 rpm Paso de cadena: 3/8 pulgLongitud de corte: 40,45,50,63 cm El precio es $1.082.000")}
                className="px-3 py-1 text-sm text-white bg-gray-900 hover:bg-gray-800 rounded-md"
              >
                Ver detalles
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Renderiza el modal */}
      <Modal isOpen={showModal} closeModal={closeModal} title={modalContent.title} content={modalContent.content} />
    </div>
  );
};

export default Section4;
