import React from "react";
import { createPortal } from "react-dom";

import "./style/Modal.scss";

const Modal = ({ children }) => {
  return createPortal(
    <div className="modal-container">{children}</div>,
    document.getElementById("modal")
  );
};

export default Modal;
