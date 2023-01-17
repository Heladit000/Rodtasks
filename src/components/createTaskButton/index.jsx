import React from "react";
import { useContext } from "react";

import { ModalContext } from "../../context/modalContext";
import "./style/CreateTaskButton.scss";

import AddIcon from "../../icons/add__icon.svg"

const CreateTaskButton = () => {
  const { viewModal, toggleModal } = useContext(ModalContext);

  return (
      <button className={`create-task-button ${viewModal ? "create-task-button-close" : ""}`} onClick={toggleModal}>
        <AddIcon className="create-task-button__icon"/>
      </button>
  );
};

export default CreateTaskButton;
