import React from "react";
import "./globals.css";
import WhatsappIcon from "./components/WhatsappIcon";
import Image from "next/image";


export default function Home  ()  {
  return (

    


<>
<div><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/></div>

<div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/motosierra.png')" }}>
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Fondo oscuro */}
  <div className="max-w-4xl mx-auto text-center relative z-10" style={{ top: "50%", transform: "translateY(-60%)" }}> {/* Ajuste de posición vertical */}
    <div className="bg-white rounded-full p-4 shadow-lg">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 dark:text-white">
        Contactomaq
        <small className="ms-2 font-semibold text-gray-600 dark:text-gray-400">Bienvenidos!</small>
      </h1>
    </div>

    <div className="mt-6 md:mt-10"> {/* Ajuste de margen superior */}
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-4 md:mb-8 shadow-text-glow">
        Servicio Técnico Oficial
        Venta, repuestos e insumos para motoimplementos de bosque y jardín!
      </h2>
    </div>

  </div>
</div>


<WhatsappIcon />











<div className="bg-gray-300">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <Image src="/Resortes.png" fill alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center" />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0"></span>
              Desk and Office
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Work from home accessories</p>
        </div>
        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <Image src="/Tapa.png"  fill alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="h-full w-full object-cover object-center" />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0"></span>
              Self-Improvement
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Journals and note-taking</p>
        </div>
        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <Image src="/Polea.png" fill alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center" />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="/">
              <span className="absolute inset-0"></span>
              Travel
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Daily commute essentials</p>
        </div>
      </div>
    </div>
  </div>
</div>















<div className="bg-black rounded-lg p-6">
    <p className="text-4xl font-thin text-gray-300 Open sans', sans-serif">
        Venta de insumos de jardinería, repuestos y motoimplementos
    </p>
</div>









<div className="bg-gradient-to-r from-red-600 to-orange-300">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    <div className="group relative bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300">
  <div className="aspect-w-16 aspect-h-9">
    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6paEXZpubi-S6dlBQMGujCStbQ53_VZWZESkKF37Bw&s" width={150} height={150} alt="Front of men's Basic Tee in black." className="object-cover w-full h-full" />
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800">Basic Tee</h3>
    <p className="mt-1 text-sm text-gray-600">Color: Black</p>
    <div className="flex items-center justify-between mt-2">
      <p className="text-sm font-medium text-gray-900">$35</p>
      <button className="px-3 py-1 text-sm text-white bg-gray-900 hover:bg-gray-800 rounded-md">Add to Cart</button>
    </div>
  </div>
</div>





<div className="group relative bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300">
  <div className="aspect-w-16 aspect-h-9">
    <Image src="/petri.png" width={150} height={150}  alt="Front of men's Basic Tee in black." className="object-cover w-full h-full" />
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800">Basic Tee</h3>
    <p className="mt-1 text-sm text-gray-600">Color: Black</p>
    <div className="flex items-center justify-between mt-2">
      <p className="text-sm font-medium text-gray-900">$35</p>
      <button className="px-3 py-1 text-sm text-white bg-gray-900 hover:bg-gray-800 rounded-md">Add to Cart</button>
    </div>
  </div>
</div>






<div className="group relative bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300">
  <div className="aspect-w-16 aspect-h-9">
    <Image src="/lusqtoff.png" width={150} height={150} alt="Front of men's Basic Tee in black." className="object-cover w-full h-full" />
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800">Basic Tee</h3>
    <p className="mt-1 text-sm text-gray-600">Color: Black</p>
    <div className="flex items-center justify-between mt-2">
      <p className="text-sm font-medium text-gray-900">$35</p>
      <button className="px-3 py-1 text-sm text-white bg-gray-900 hover:bg-gray-800 rounded-md">Add to Cart</button>
    </div>
  </div>
</div>


<div className="group relative bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300">
  <div className="aspect-w-16 aspect-h-9">
    <Image src="/sthils.png" width={150} height={150} alt="Front of men's Basic Tee in black." className="object-cover w-full h-full" />
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800">Basic Tee</h3>
    <p className="mt-1 text-sm text-gray-600">Color: Black</p>
    <div className="flex items-center justify-between mt-2">
      <p className="text-sm font-medium text-gray-900">$35</p>
      <button className="px-3 py-1 text-sm text-white bg-gray-900 hover:bg-gray-800 rounded-md">Add to Cart</button>
    </div>
  </div>
</div>


    
    </div>
  </div>
</div>








    <div className="bg-gray-200">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Especificaciones de nuestro producto destacado</h2>
          <p className="mt-4 text-gray-500">Cabezal Carretel Desmalezadora Tipo Stihl Fs55 120 200 250
Auto cut 25-2.
-Nuestros otros modelos son compatibles con: Black and Decker, Echo, Gamma, Husqvarna, Lusqtoff, MTD, Niwa, Sensei, Shimura, Stihl, Shikawa, Toyama, Kommberg, Upper, Nebraska, Dowen Paggio, De Walt, Makita, Bosch, Skil Saw, Stanley, Workpro</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">-Código original STIHL:</dt>
              <dd className="mt-2 text-sm text-gray-500">4002-710-2108</dd>
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
              <dd className="mt-2 text-sm text-gray-500">Semi Automático</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">- Compátible también con:</dt>
              <dd className="mt-2 text-sm text-gray-500">FS44, FS55, FS80, FS83, FS85, FS90, FS100, FS100RX, KM55, KM85, KM90, KM110, KM130. 40027. 102108</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">-Color:</dt>
              <dd className="mt-2 text-sm text-gray-500">Negro</dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image src="/Autocut1.png" width={350} height={350} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100"/>
          <Image src="/Autocut2.png" width={350} height={350} alt="Top down view of walnut card tray with embedded magnets and card groove." className="rounded-lg bg-gray-100"/>
          <Image src="/Autocut3.png" width={350} height={350} alt="Side of walnut card tray with card groove and recessed card area." className="rounded-lg bg-gray-100"/>
          <Image src="/Autocut4.png" width={350} height={350} alt="Walnut card tray filled with cards and card angled in dedicated groove." className="rounded-lg bg-gray-100"/>
        </div>
      </div>
    </div>





    

<div className="bg-white py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Algunas de las marcas con las que trabajamos</h2>
<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
<img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://logowik.com/content/uploads/images/8133-stihl.jpg" alt="Transistor" width="158" height="48" />
<img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://findlogovector.com/wp-content/uploads/2018/08/husqvarna-logo-vector.png" alt="Reform" width="158" height="48" />
<img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://findvectorlogo.com/wp-content/uploads/2018/08/briggs-stratton-vector-logo.png" alt="Tuple" width="158" height="48" />
<img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://http2.mlstatic.com/D_NQ_NP_810163-MLA25817120547_072017-O.webp" alt="SavvyCal" width="158" height="48" />
<img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://www.molamaq.com/todohusqvarna/uploads/brands/niwa.png" alt="Statamic" width="158" height="48" />
</div>
</div>
</div>


    </>

    );
  
};
