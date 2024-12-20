"use client"
import React, { useState } from "react";
import Listado from "../listado/page";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import productsData from "../Data/productsData";
const Services = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
const [productList, setProductList] = useState([]);
const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([]);

const handleProductSelect = (product) => {
  setSelectedProduct(product);
  const products = productsData[product.name] || [];
  setProductList(products);
  setSelectedCategoryProducts(products); // Agregar esta línea
};
// Función para manejar el desplazamiento suave hacia la sección productos
const scrollToProductos = (event) => {
  event.preventDefault();
  const target = document.getElementById("productos");
  
  window.scrollTo({
    top: target.offsetTop, // Esto lleva la página hasta el top del elemento
    behavior: "smooth", // Hacemos que el desplazamiento sea suave
  });
};

return (
  <div>
    <main className="bg-gradient-to-br from-red-800 to-orange-800 w-full min-h-screen mx-auto flex flex-col items-center justify-center py-16 relative">
      
      {/* Título "Productos y Servicios" */}
      <h1 className="text-5xl font-bold text-center py-8 bg-gradient-to-r from-[#c8bdba] to-[#a49d9b] text-transparent bg-clip-text mb-32 z-10 relative">
        Productos y Servicios
      </h1>

      {/* Flecha animada que desplaza hacia abajo */}
      <div className="absolute mt-20 animate-bounce">
        {/* Enlace para desplazar hacia la sección productos */}
        <button onClick={scrollToProductos} className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </main>

    {/* Sección donde se encuentran los productos */}
    <div id="productos" className="flex justify-center mt-16 sm:mt-12 md:mt-8">
      <Listado onProductSelect={handleProductSelect} />
    </div>

      <div>
  {selectedProduct && (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      
  
         
          <h3 className="text-2xl font-bold text-center">{selectedProduct.name}</h3>
          <p className="text-center">{selectedProduct.description}</p>
     

      {/* Mostrar las tarjetas de productos aquí */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {selectedCategoryProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )}
</div>

      <br />
      <div className="bg-white py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl sm:text-center">
  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">No dudes en traer tu maquina para arreglar!</h2>
  <p className="mt-6 text-lg leading-8 text-gray-600">Reparaciones, limpiezas y services de su maquina.</p>
</div>
<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
  <div className="p-8 sm:p-10 lg:flex-auto">
    <h3 className="text-2xl font-bold tracking-tight text-gray-900">Algunos detalles para su seguridad</h3>
    <p className="mt-6 text-base leading-7 text-gray-600">Solémos estar con demora por momentos, pero asignandole un  turno podrias dejar tu maquina, una vez tomado el turno para el arreglo de su maquina llevará alrededor de 10 a 15 dias suponiendo el reparo.</p>
    <div className="mt-10 flex items-center gap-x-4">
      <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Que arreglamos?</h4>
      <div className="h-px flex-auto bg-gray-100"></div>
    </div>
    <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
      <li className="flex gap-x-3">
        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
        </svg>
        Desmalezadoras y bordeadoras
      </li>
      <li className="flex gap-x-3">
        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
        </svg>
        Cesperas y tractores
      </li>
      <li className="flex gap-x-3">
        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
        </svg>
        Generadores y grupos electrogenos
      </li>
      <li className="flex gap-x-3">
        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
        </svg>
        Maquinas electricas y nafteras
      </li>
    </ul>
  </div>
  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
      <div className="mx-auto max-w-xs px-8">
        <p className="text-base font-semibold text-gray-600">Valor del presupuesto</p>
        <p className="mt-6 flex items-baseline justify-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-gray-900">$5000</span>
          <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">ARS</span>
        </p>
        <Link href="https://api.whatsapp.com/send?phone=1167813287" target="_blank" className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Acceder a un turno</Link>
        <p className="mt-6 text-xs leading-5 text-gray-600">En caso de SÍ querer reparar la maquina una vez presupuestada, se descontará del mismo arreglo.</p>
        <p className="mt-6 text-xs leading-5 text-gray-700">En caso de NO aceptar el presupuesto el mismo será cobrado un total de $5000.</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>




<div className="bg-white py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Algunas de las marcas con las que trabajamos</h2>
<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
<Image src="/sthil1.png" width={100} height={100} alt="Transistor"   />
<Image src="/husqvarna1.png" alt="Reform" width={100} height={100} />
<Image src="/brigs1.png" alt="Tuple" width={100} height={100} />
<Image src="https://http2.mlstatic.com/D_NQ_NP_810163-MLA25817120547_072017-O.webp" alt="SavvyCal" width={100} height={100} />
<Image width={100} height={100} src="https://www.molamaq.com/todohusqvarna/uploads/brands/niwa.png" alt="Statamic"  />
</div>
</div>
</div>




</div>

  );
};

export default Services;

