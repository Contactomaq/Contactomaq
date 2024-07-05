// Modal.js

import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, closeModal, title, content }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="modal fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

      <div className="modal-container relative w-auto max-w-lg mx-auto my-6">
        <div className="modal-content relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Cabecera del modal */}
          <div className="modal-header flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              className="modal-close p-1 ml-auto bg-transparent border-0 text-gray-700 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeModal}
            >
              <span className="text-gray-700">×</span>
            </button>
          </div>
          {/* Cuerpo del modal */}
          <div className="modal-body relative p-6 flex-auto">
            <p className="my-4 text-gray-600 text-sm leading-relaxed">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Modal;
