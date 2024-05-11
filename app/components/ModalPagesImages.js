"use client"

import { useState } from 'react';
import Link from 'next/link';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-600">
      <div className="inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Todo en Mercado Libre</h2>
          <button onClick={onClose}>
            <svg
              className="w-6 h-6 text-gray-500 hover:text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="text-gray-600">
          <p>Aquí encontrarás nuestros productos y precios que estás buscando. También podes hacer tu compra aquí si lo deseas!</p>
        </div>
        <div className="mt-6 flex justify-end">
        <Link
  href="https://listado.mercadolibre.com.ar/_CustId_1164776174"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded"
>
  Visitar
</Link>

        </div>
      </div>
    </div>
  );
};


const ModalImages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
  onClick={openModal}
  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg text-lg"
>
  Todos los productos en ML
</button>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ModalImages;