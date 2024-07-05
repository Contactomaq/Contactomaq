// Modal.js

import React from 'react';

const Modal = ({ isOpen, closeModal, title, model, description, imageUrl }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
          <div className="relative max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <div className="flex justify-end">
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={closeModal}
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 7.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l2.293-2.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                <p className="mt-2 text-sm text-gray-600">{model}</p>
                {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
                {imageUrl && (
                  <div className="mt-4">
                    <img src={imageUrl} alt={title} className="rounded-lg w-full" />
                  </div>
                )}
                {/* Aquí puedes agregar más contenido según tus necesidades */}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 bg-black opacity-50"></div>
        </div>
      )}
    </>
  );
};

export default Modal;
