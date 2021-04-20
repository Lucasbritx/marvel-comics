import React, { FC } from "react";
import "./modal.css";

interface IModal {
  handleClose?: any;
  show?: boolean;
  children?: any;
  modalRef: any;
}

const Modal: FC<IModal> = ({ handleClose, show, children, modalRef }) => { 
  if(!show) {
    return null;
  }

  return (
    <div 
    className="modal display-block">
      <section ref={modalRef} className="modal-main">
        {children}
        <button className="close-button" type="button" onClick={handleClose}>
          X
        </button>
      </section>
    </div>
  );
};

export default Modal;
