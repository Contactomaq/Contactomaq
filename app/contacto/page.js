"use client";
import React, { useState } from "react";
import Image from "next/image";

const Contacto = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mostrar el toast con un retraso de 2 segundos
    setTimeout(() => {
      setToastVisible(true);

      // Esconde el toast después de 3 segundos
      setTimeout(() => {
        setToastVisible(false);
      }, 3000);
    }, 2000);

    // Reseteamos los campos después de enviar el mensaje (opcional)
    setFormData({
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900 text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto"
          height={150}
          width={170}
          src="/Logo.png"
          alt="Tu Empresa"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Envíanos un mensaje
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Campo de correo electrónico */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
              Dirección de correo electrónico
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-white bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6"
                placeholder="Tu-email@dominio.com"
              />
            </div>
          </div>

          {/* Campo de mensaje */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium leading-6 text-white">
              Tu mensaje
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-white bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6"
                placeholder="Escribe tu mensaje aquí"
              />
            </div>
          </div>

          {/* Botón de envío */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enviar mensaje
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-white">
          ¿Tienes dudas?{" "}
          <a
            href="https://api.whatsapp.com/send?phone=1167813287"  // Reemplaza con tu número de WhatsApp
            className="font-semibold leading-6 text-white hover:text-red-900"
          >
            Contáctanos por WhatsApp
          </a>
        </p>
      </div>

      {/* Toast Notification (Estilo mejorado en la esquina inferior derecha) */}
      {toastVisible && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white py-3 px-6 rounded-lg shadow-xl flex items-center space-x-3 transform transition-all duration-300 ease-in-out animate-fadeIn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4v.01M4 12a8 8 0 1116 0 8 8 0 01-16 0z"
            />
          </svg>
          <span className="text-sm font-semibold">¡Mensaje enviado con éxito! Gracias por contactarnos.</span>
        </div>
      )}
    </div>
  );
};

export default Contacto;
