import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
    <div className="mx-auto max-w-screen-xl px-4 py-6 lg:py-8 sm:text-center">
      <div className="md:flex md:justify-between items-center">
        <div className="mb-6 md:mb-0 sm:text-center">
          <a href="/services" className="flex items-center justify-center">
            <Image src="/Logo.png" width={150} height={150} alt="Contacto-logo" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:text-center">
          <div>
            <h2 className="mb-3 text-xs sm:text-sm md:text-base font-semibold uppercase">Conocé más</h2>
            <ul className="font-medium">
              <li className="mb-2">
                <a href="/nosotros" className="hover:underline">Quiénes somos</a>
              </li>
              <li>
                <a href="/services" className="hover:underline">Nuestros productos</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs sm:text-sm md:text-base font-semibold uppercase">Síguenos</h2>
            <ul className="font-medium">
              <li className="mb-2">
                <a href="/" className="hover:underline">Instagram</a>
              </li>
              <li>
                <a href="/" className="hover:underline">Facebook</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs sm:text-sm md:text-base font-semibold uppercase">Legal</h2>
            <ul className="font-medium">
              <li className="mb-2">
                <a href="/" className="hover:underline">Política de privacidad</a>
              </li>
              <li>
                <a href="/" className="hover:underline">Términos &amp; Condiciones</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="text-sm text-gray-500 text-center">
        © 2024 <a href="/" className="hover:underline">Contacto</a>. Todos los derechos reservados.
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
