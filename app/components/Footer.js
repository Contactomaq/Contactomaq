import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 sm:text-center">
        <div className="md:flex md:justify-between items-center"> {/* Cambiado a items-center */}
          <div className="mb-6 md:mb-0 sm:text-center"> {/* Centrado en dispositivos pequeños */}
              <a href="/services" className="flex items-center justify-center"> {/* Centrado del logo */}
                  <Image src="/Logo.png"  width={150} height={150} alt="Contacto-logo" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 sm:text-center"> {/* Centrado en dispositivos pequeños */}
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase">Conocé más</h2>
                  <ul className="font-medium">
                      <li className="mb-4">
                          <a href="/nosotros" className="hover:underline">Quiénes somos</a>
                      </li>
                      <li>
                          <a href="/services" className="hover:underline">Nuestros productos</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase">Síguenos</h2>
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
      <div className="sm:flex sm:items-center sm:justify-between sm:text-center"> {/* Centrado en dispositivos pequeños */}
          <span className="text-sm text-gray-500">© 2024 <a href="/" className="hover:underline">Contacto</a>. Nuestra empresa.</span>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
