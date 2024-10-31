import React from "react";
import Image from "next/image";

const Section5 = () => {
    return(
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Especificaciones de nuestro producto destacado</h2>
          <p className="mt-4 text-gray-500">Cabezal Carretel Desmalezadora Chinas.
-Nuestros otros modelos son compatibles con: Black and Decker, Echo, Gamma, Husqvarna, Lusqtoff, MTD, Niwa, Sensei, Shimura, Stihl, Shikawa, Toyama, Kommberg, Upper, Nebraska, Dowen Paggio, De Walt, Makita, Bosch, Skil Saw, Stanley, Workpro</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">-Medida de Tornillo</dt>
              <dd className="mt-2 text-sm text-gray-500">10 x 1,25</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">- Material:</dt>
              <dd className="mt-2 text-sm text-gray-500">Nylon PA6</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">- TANZA: </dt>
              <dd className="mt-2 text-sm text-gray-500">3mm máximo de grosor&quot; se recomiendo usar 2,5mm&quot; ESTE REPUESTO ES ALTERNATIVO, NO ES ORIGINAL.&quot;</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">- Corte Alto / </dt>
              <dd className="mt-2 text-sm text-gray-500">Manual</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">- Compátible también con:</dt>
              <dd className="mt-2 text-sm text-gray-500">Gamma, Niwwa, makita, lusqtoff y maquinas chinas</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">-Color:</dt>
              <dd className="mt-2 text-sm text-gray-500">Negro</dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image src="/cabezal1.png" width={350} height={350} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100"/>
          <Image src="/desmalezadora/centrotapa.png" width={350} height={350} alt="Top down view of walnut card tray with embedded magnets and card groove." className="rounded-lg bg-gray-100"/>
          <Image src="/desmalezadora/resortesdelablack.png" width={350} height={350} alt="Walnut card tray filled with cards and card angled in dedicated groove." className="rounded-lg bg-gray-100"/>
          <Image src="/cabezal2.png" width={350} height={350} alt="Side of walnut card tray with card groove and recessed card area." className="rounded-lg bg-gray-100"/>
        </div>
      </div>
    )
};

export default Section5