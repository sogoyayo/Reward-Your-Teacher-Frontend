import React from "react";
import "./Modal.css";

const Modal = ({ children, title, closeModal }) => {
  return (
    <div className="Modal-Area" >
      <div className="Modal-Content">
        <div className="Modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={(e) => closeModal(e)}>
            &times;
          </button>
        </div>
        <div className="Modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
