import React from "react"
import Image from "next/image"
const Opiniones = () => {
return(

<div className="container mx-auto px-4">
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Comentarios a nuestra empresa</h3>
          <p className="my-4">MUY MUY BUENOS PRECIOS, Y COMPARADOS CON LOS DE PILAR, VALE LA PENA EL VIAJE , BUEN ASESORAMIENTO</p>
        </blockquote>
        <figcaption className="flex items-center justify-center">
          <Image className="rounded-full" width={80} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-lV9q5jgadKKhkzJ-kegGHlEjAYC3JwNIKAWf5dIFQ&s" alt="profile picture" />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Ariel Romero</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Romeroarielzz@gmail.com</div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Comentarios a nuestra empresa</h3>
          <p className="my-4">Genial la atencion! Todas las veces que fui por un repuesto lo consegui. Ademas son muy pasientes en ayudarte a resolver tus preguntas. La verdad que yo siempre que necesito poner en orden algunas de mis maquinas voy con ellos.</p>
        </blockquote>
        <figcaption className="flex items-center justify-center">
          <Image className="rounded-full" width={80} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-lV9q5jgadKKhkzJ-kegGHlEjAYC3JwNIKAWf5dIFQ&s" alt="profile picture" />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Disegno Bonito</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">disegnobx9@gmail.com</div>
          </div>
        </figcaption>
      </figure>

      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Comentarios a nuestra empresa</h3>
          <p className="my-4">Afilado de cadenas en el acto reparación de motores de cortadoras de césped y bordadoras, venta de repuestos y venta de nuevas y usadas. Buen servicio</p>
        </blockquote>
        <figcaption className="flex items-center justify-center">
        <Image className="rounded-full" width={80} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-lV9q5jgadKKhkzJ-kegGHlEjAYC3JwNIKAWf5dIFQ&s" alt="profile picture" />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Riacardo Souza</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">richardjoao@hotmail.com</div>
          </div>
        </figcaption>
      </figure>

      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Comentarios a nuestra empresa</h3>
          <p className="my-4">Lleve mí motocierra y no me la arreglaron por tema de repuesto.no conseguían. Pero la verdad que dicen reparar y vender todo tipo de máquinas relacionado con la jardinería!! Y a la vista se ve que si.. recomiendo!!!
aunque a mí no me cumplieron!</p>
        </blockquote>
        <figcaption className="flex items-center justify-center">
        <Image className="rounded-full" width={80} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-lV9q5jgadKKhkzJ-kegGHlEjAYC3JwNIKAWf5dIFQ&s" alt="profile picture" />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Ricardo Rojas</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">rojasricardo@hotmail.com</div>
          </div>
        </figcaption>
      </figure>
    
    </div>

</div>


)
}

export default Opiniones