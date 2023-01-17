import React, { useState } from "react";
import { useContext } from "react";
import TextareaAutosize from "react-textarea-autosize";

import { TaskContext } from "../../../context/taskContext";
import CheckIcon from "../../../icons/check__icon.svg";
import "./style/TaskCard.css";

const TaskCard = ({ id, text, completed }) => {
  const { toggleCompleteTask, deleteTask, updateTaskText } =
    useContext(TaskContext);
  const [editText, setEditText] = useState(text);

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleComplete = () => {
    toggleCompleteTask(id);
  };

  const handleOnChange = (e) => {
    setEditText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTaskText(id, editText);
  };

  const handleDiscard = () => {
    setEditText(id);
  }

  return (
    <div className="taskCard">
      <span
        className={`taskCard-checkbox ${
          completed ? "taskCard-checkbox-completed" : undefined
        }`}
      >
        <div
          className={`taskCard-checkbox__check ${
            completed ? "taskCard-checkbox__check-completed" : undefined
          }`}
          onClick={handleComplete}
        >
          <CheckIcon className="taskCard-checkbox__icon" />
        </div>
      </span>

      <form onSubmit={handleSubmit} className="taskCard__form">
        <TextareaAutosize
          className={`taskCard__text default__input ${
            completed ? "taskCard__text-completed" : ""
          }`}
          value={editText}
          onChange={handleOnChange}
        />
        {editText !== text && (
          <div className="taskCard__edit-panel">
            <button onClick={handleDiscard} className="default__button default__button-warning">Discard</button>
            <button type="submit" className="default__button">Save</button>
          </div>
        )}
      </form>

      <span className="taskCard__deleteButton" onClick={handleDelete}>
        X
      </span>
    </div>
  );
};

export default TaskCard;
