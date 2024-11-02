import React from "react";
import Image from "next/image";

const Contacto = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900 text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto"
          height={150}
          width={170}
          src="/Logo.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Inície sesión en su cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Dirección de correo electrónico
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6 bg-gray-800"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6"
              >
                Contraseña
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-red-800 hover:text-white"
                >
                  ¿Has olvidado tu contraseña?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:text-sm sm:leading-6 bg-gray-800"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Ingresar
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm">
          ¿No es un miembro?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-white hover:text-red-900"
          >
            Clickea aquí para enviarnos un WhatsApp para crearte una cuenta
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contacto;
