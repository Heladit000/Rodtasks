import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import TextareaAutosize from "react-textarea-autosize";

import { ModalContext } from "../../context/modalContext";
import { TaskContext } from "../../context/taskContext";
import Modal from "../Modal";
import "./style/CreateTaskModal.css";

const CreateTaskModal = () => {
  const { viewModal, disableModal } = useContext(ModalContext);
  const { createTask } = useContext(TaskContext);

  const [taskTextValue, setTaskTextValue] = useState("");
  const [errorText, setErrorText] = useState("");


  useEffect(()=>{
    if(!viewModal){
      setErrorText("");
    }
  },[viewModal])

  const handleExit = () => {
    disableModal();
  };

  const handleCreate = (e) => {
    e.preventDefault();

    if (taskTextValue.length !== 0) {
      createTask(taskTextValue);

      setTaskTextValue("");

      disableModal();
      setErrorText("");
    } else {
      setErrorText("You need write a text for your task!");
    }
  };

  const handleOnChange = (e) => {
    setTaskTextValue(e.target.value);
  };

  return (
    <>
      {viewModal ? (
        <Modal>
          <form onSubmit={handleCreate} className="create-task">
            <h1>Create new Task</h1>
            <TextareaAutosize
              className="default__input create-task__text-area"
              placeholder="Create a React project..."
              onChange={handleOnChange}
              value={taskTextValue}
            />
            <div>
              <button onClick={handleExit} className="default__button default__button-warning">Exit</button>
              <button type="submit" className="default__button">Create</button>
            </div>
            <p
              className={
                errorText.length !== 0 ? "create-task__error-text" : ""
              }
            >
              {errorText}
            </p>
          </form>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default CreateTaskModal;
