import React from "react";

import "./style/TaskCard.css";

const TaskCard = ({ text, completed, tasks, setTasks }) => {
  const handleDelete = () => {
    const indexFilterTask = tasks.findIndex((task) => task.text === text);

    const copyTasks = [...tasks];

    copyTasks.splice(indexFilterTask, 1);

    setTasks(copyTasks);
  };

  const handleComplete = () => {
    const indexFilterTask = tasks.findIndex((task) => task.text === text);

    const copyTasks = [...tasks];

    copyTasks[indexFilterTask].completed = true;

    setTasks(copyTasks);
  };

  return (
    <div className="taskCard">
      <span
        className={`taskCard-checkbox ${
          completed ? "taskCard-checkbox-completed" : undefined
        }`}
      >
        <h3
          className={`taskCard-checkbox__check ${
            completed ? "taskCard-checkbox__check-completed" : undefined
          }`}
          onClick={handleComplete}
        >
          ✓
        </h3>
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
