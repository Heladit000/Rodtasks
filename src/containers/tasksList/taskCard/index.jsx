import React from "react";
import { useContext } from "react";
import { TaskContext } from "../../../context/taskContext";

import CheckIcon from "../../../icons/check__icon.svg";
import "./style/TaskCard.css";

const TaskCard = ({ text, completed }) => {
  const { toggleCompleteTask, deleteTask} = useContext(TaskContext);

  const handleDelete = () => {
    deleteTask(text);
  };

  const handleComplete = () => {
    toggleCompleteTask(text);
  };

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
          <CheckIcon className="taskCard-checkbox__icon"/>
        </div>
      </span>
      <p className={completed ? "taskCard__text-completed" : undefined}>
        {text}
      </p>
      <span className="taskCard__deleteButton" onClick={handleDelete}>
        X
      </span>
    </div>
  );
};

export default TaskCard;
