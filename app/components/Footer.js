import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12 sm:text-center">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/services" className="flex justify-center">
              <Image src="/Logo.png" width={150} height={150} alt="Contacto-logo" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:text-center">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide">Conocé más</h2>
              <ul className="font-medium">
                <li className="mb-2">
                  <a href="/nosotros" className="hover:underline transition duration-300 ease-in-out hover:text-gray-400">Quiénes somos</a>
                </li>
                <li>
                  <a href="/services" className="hover:underline transition duration-300 ease-in-out hover:text-gray-400">Nuestros productos</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide">Síguenos</h2>
              <ul className="font-medium">
                <li className="mb-2">
                  <a href="/" className="hover:underline transition duration-300 ease-in-out hover:text-gray-400">Instagram</a>
                </li>
                <li>
                  <a href="/" className="hover:underline transition duration-300 ease-in-out hover:text-gray-400">Facebook</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide">Legal</h2>
              <ul className="font-medium">
                <li className="mb-2">
                  <a href="/" className="hover:underline transition duration-300 ease-in-out hover:text-gray-400">Política de privacidad</a>
                </li>
                <li>
                  <a href="/" className="hover:underline transition duration-300 ease-in-out hover:text-gray-400">Términos &amp; Condiciones</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-sm text-gray-400 text-center">
          © 2024 <a href="/" className="hover:underline transition duration-300 ease-in-out">Contacto</a>. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
