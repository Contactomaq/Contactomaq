import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 sm:text-center">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <Image src="/Logo.png"  width={150} height={150} alt="Contacto-logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap"></span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase">Conocé mas</h2>
                  <ul className="font-medium">
                      <li className="mb-4">
                          <a href="/nosotros" className="hover:underline">Quienes somos</a>
                      </li>
                      <li>
                          <a href="/services" className="hover:underline">Nuetros productos</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase">Siguenos</h2>
                  <ul className="font-medium">
                      <li className="mb-4">
                          <a href="/" className="hover:underline">Instagram</a>
                      </li>
                      <li>
                          <a href="/" className="hover:underline">Facebook</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                  <ul className="font-medium">
                      <li className="mb-4">
                          <a href="/" className="hover:underline">Politica de privacidad</a>
                      </li>
                      <li>
                          <a href="/" className="hover:underline">Terminos &amp; Condiciones</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2024 <a href="/" className="hover:underline">Contacto</a>. Nuestra empresa.
          </span>
        
      </div>
    </div>
  </footer>
  );
};

export default Footer;
