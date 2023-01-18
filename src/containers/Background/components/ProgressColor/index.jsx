import React, { useContext } from "react";

import { TaskContext } from "@context/taskContext";
import "./style/ProgressColor.scss";

const ProgressColor = () => {
  const { tasks } = useContext(TaskContext);

  const completedTasks = tasks.filter((task) => task.completed);

  const porcentProgress = 100/tasks.length;
  const heightProgress = porcentProgress*completedTasks.length
  
  return (
    <div
      className="progress-color"
      style={{
        //height in percentage
        height: `${tasks.length > 0 ? (100-heightProgress) : 0}%`
      }}
    ></div>
  );
};

export default ProgressColor;
