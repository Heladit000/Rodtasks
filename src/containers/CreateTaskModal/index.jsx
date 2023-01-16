import React from "react";
import { useState } from "react";
import { useContext } from "react";

import { ModalContext } from "../../context/modalContext";
import { TaskContext } from "../../context/taskContext";
import Modal from "../Modal";
import "./style/CreateTaskModal.css";

const CreateTaskModal = () => {
  const { viewModal, disableModal } = useContext(ModalContext);
  const { createTask } = useContext(TaskContext);

  const [taskTextValue, setTaskTextValue] = useState("");

  const handleExit = () => {
    disableModal();
  };

  const handleCreate = (e) => {
    e.preventDefault();

    createTask(taskTextValue);

    setTaskTextValue("");

    disableModal();
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
            <input
              type="text"
              placeholder="Write the name here."
              onChange={handleOnChange}
              value={taskTextValue}
            />
            <div>
              <button onClick={handleExit}>Exit</button>
              <button type="submit">Create</button>
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
