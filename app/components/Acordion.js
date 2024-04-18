"use client"
import React, { useState } from 'react';

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
          question="What is Flowbite?"
          answer="Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more."
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={2}
          question="Is there a Figma file available?"
          answer="Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file."
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          index={3}
          question="What are the differences between Flowbite and Tailwind UI?"
          answer="The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product."
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
