import React from "react";

import "./style/TaskCard.css";

const TaskCard = ({
  text,
  completed,
  tasks,
  searchList,
  setTasks,
  setSearchList,
}) => {
  const handleDelete = () => {
    const indexFilterTask = tasks.findIndex((task) => task.text === text);
    const indexFilterSearchTask = searchList.findIndex(
      (task) => task.text === text
    );

    const copyTasks = [...tasks];
    const copySearchList = [...searchList];

    copyTasks.splice(indexFilterTask, 1);
    copySearchList.splice(indexFilterSearchTask, 1);

    setTasks(copyTasks);
    setSearchList(copySearchList);
  };

  const handleComplete = () => {
    const indexFilterTask = tasks.findIndex((task) => task.text === text);
    const indexFilterSearchTask = searchList.findIndex(
      (task) => task.text === text
    );

    const copyTasks = [...tasks];
    const copySearchList = [...searchList];

    copyTasks[indexFilterTask].completed = true;
    copySearchList[indexFilterSearchTask].completed = true;

    setTasks(copyTasks);
    setSearchList(copySearchList);
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
