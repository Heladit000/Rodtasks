import React from "react";
import { useContext } from "react";

import { ModalContext } from "@context/modalContext";
import "./style/CreateTaskButton.scss";

import AddIcon from "@icons/add__icon.svg"

const CreateTaskButton = ({floating, className}) => {
  const { viewModal, toggleModal } = useContext(ModalContext);

  return (
      <button className={`${className} create-task-button ${viewModal ? "create-task-button-close" : ""} ${floating ? "create-task-button-floating": ""}`} onClick={toggleModal}>
        <AddIcon className="create-task-button__icon"/>
      </button>
  );
};

export default CreateTaskButton;
