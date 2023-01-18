import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import TextareaAutosize from "react-textarea-autosize";

import { ModalContext } from "@context/modalContext";
import { TaskContext } from "@context/taskContext";
import Modal from "@containers/Modal";
import "./style/CreateTaskModal.scss";

const CreateTaskModal = () => {
  const { viewModal, disableModal } = useContext(ModalContext);
  const { createTask } = useContext(TaskContext);

  const [taskTextValue, setTaskTextValue] = useState("");

  const handleExit = () => {
    disableModal();
  };

  const handleCreate = (e) => {
    e.preventDefault();

    if (taskTextValue.length !== 0) {
      createTask(taskTextValue);

      setTaskTextValue("");

      disableModal();
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
              maxRows={10}
            />
            <div>
              <button
                onClick={handleExit}
                className="default__button default__button-warning"
              >
                Exit
              </button>
              <button
                type="submit"
                className="default__button"
                disabled={taskTextValue.length === 0 ? true : false}
              >
                Create
              </button>
            </div>
          </form>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default CreateTaskModal;
