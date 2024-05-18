"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <AccordionItem
          index={1}
          question="Quiero arreglar mi maquina, cuando la debo llevar y cuanto debo pagar y esperar?"
          answer="Primero le tomamos un turno, se lo asignamos, luego cuando entra en banco su maquina, es decir a repararse, primero se presupuesta y luego de aceptar dicho presupuesto y dias estimados, comenzamos con el proceso."
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={2}
          question="Quiero comprar una maquina y o repuestos, cuentan con tarjetas de debito, credito, mercado pago?"
          answer="Si! Contamos con metodos de pagos, tanto como debito, credito y mercado pago. Y efectivo!"
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={3}
          question="Hay descuentos, bonificaciones? Hacen envíos de productos?"
          answer={
            <>
              Hay descuentos y bonificaciones comprando por cantidad y productos específicos. Consultar. Además, hacemos envíos tanto en Buenos Aires como al interior, a todo el país con Mercado Libre. Visita nuestra tienda.{' '}
              <Link href="https://listado.mercadolibre.com.ar/_CustId_1164776174" target="_blank" className='text-blue-500 hover:text-blue-700'>CLICK AQUÍ</Link>.
            </>
          }
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
        />
      </div>
    </div>
  );
};

const AccordionItem = ({ index, question, answer, activeAccordion, toggleAccordion }) => {
  return (
    <div>
      <button
        className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 border-b border-gray-200"
        onClick={() => toggleAccordion(index)}
      >
        <span className="font-medium">{question}</span>
        <svg
          className={`w-4 h-4 transition-transform transform ${
            activeAccordion === index ? 'rotate-180' : 'rotate-0'
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {activeAccordion === index && (
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
