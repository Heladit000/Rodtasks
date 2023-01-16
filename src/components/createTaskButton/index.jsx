import React from "react";
import { useContext } from "react";
import { ReactSVG } from "react-svg";

import { ModalContext } from "../../context/modalContext";
import "./style/CreateTaskButton.css";

import addIcon from "../../icons/add__icon.svg"

const CreateTaskButton = () => {
  const { viewModal, toggleModal } = useContext(ModalContext);

  return (
    <div>
      <button className={`create-task-button ${viewModal ? "create-task-button-close" : ""}`} onClick={toggleModal}>
        <ReactSVG src={addIcon} className="create-task-button__icon"/>
      </button>
    </div>
  );
};

export default CreateTaskButton;
