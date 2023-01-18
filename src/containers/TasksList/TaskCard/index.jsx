import React, { useState } from "react";
import { useContext } from "react";
import TextareaAutosize from "react-textarea-autosize";

import { TaskContext } from "@context/taskContext";
import AddIcon from "@icons/add__icon.svg";
import CheckIcon from "@icons/check__icon.svg";

import "./style/TaskCard.scss";

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

    if (editText.length !== 0) {
      updateTaskText(id, editText);
    }
  };

  const handleDiscard = () => {
    setEditText(text);
  };

  return (
    <div className="task-card">
      <span
        className={`task-card__checkbox ${
          completed ? "task-card__checkbox-completed" : undefined
        }`}
      >
        <div
          className={`task-card__checkbox--check ${
            completed ? "task-card__checkbox--check-completed" : undefined
          }`}
          onClick={handleComplete}
        >
          <CheckIcon className="task-card__checkbox--check-icon" />
        </div>
      </span>

      <form onSubmit={handleSubmit} className="task-card__form">
        <TextareaAutosize
          className={`task-card__form--text default__input ${
            completed ? "task-card__form--text-completed" : ""
          }`}
          value={editText}
          onChange={handleOnChange}
        />
        {editText !== text && (
          <div className="task-card__form--edit-panel">
            <button
              onClick={handleDiscard}
              className="default__button default__button-warning"
            >
              Discard
            </button>

            <button
              type="submit"
              className="default__button"
              disabled={editText.length === 0 ? true : false}
            >
              Save
            </button>
          </div>
        )}
      </form>

      <span className="task-card__delete-button">
        <AddIcon className="task-card__delete-button-icon" onClick={handleDelete} />
      </span>
    </div>
  );
};

export default TaskCard;
