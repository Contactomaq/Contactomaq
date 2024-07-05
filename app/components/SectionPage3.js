import React from "react"
import Image from "next/image";

const Section3 = ()  => { 

  return( 
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
  <h2 className="text-2xl font-bold text-gray-900">De arranque</h2>

  <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
    <div className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <Image src="/Resortes.png" fill alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center" />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <a href="https://www.canva.com/design/DAFtH4fZCOg/OcFtZR9MHV2GvtnM0TEfAw/view?utm_content=DAFtH4fZCOg&utm_campaign=designshare&utm_medium=link&utm_source=editor">
          <span className="absolute inset-0"></span>
          Resortes de arranque
        </a>
      </h3>
      <p className="text-base font-semibold text-gray-900">Para motosierras y desmalezadoras</p>
    </div>
    <div className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <Image src="/Tapa.png"  fill alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="h-full w-full object-cover object-center" />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <a href="https://www.canva.com/design/DAGH1RlzQtI/bcd27wa-Ltd79FLAGSBL1g/view?utm_content=DAGH1RlzQtI&utm_campaign=designshare&utm_medium=link&utm_source=editor">
          <span className="absolute inset-0"></span>
          Tapas de arranque completas
        </a>
      </h3>
      <p className="text-base font-semibold text-gray-900">Tipo black & Decker entre otros</p>
    </div>
    <div className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <Image src="/Polea.png" fill alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center" />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <a href="https://www.mercadolibre.com.ar/publicaciones/listado?filters=OMNI_ACTIVE|OMNI_INACTIVE|CHANNEL_NO_PROXIMITY_AND_NO_MP_MERCHANTS&page=1&search=polea&sort=DEFAULT">
          <span className="absolute inset-0"></span>
        Poleas
        </a>
      </h3>
      <p className="text-base font-semibold text-gray-900">Poleas para tapa de arranque</p>
    </div>
  </div>
</div>
</div>
  )
};

export default Section3