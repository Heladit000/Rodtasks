import React, { useContext } from "react";

import { TaskContext } from "../../../../context/taskContext";
import "./style/CompleteColor.css";

const CompleteColor = () => {
  const { tasks } = useContext(TaskContext);

  const completedTasks = tasks.filter((task) => task.completed);

  const porcentCompleted = 100/tasks.length;
  const heightCompleted = porcentCompleted*completedTasks.length

  return (
    <div
      className="complete-color"
      style={{
        height: `${100-heightCompleted}%`,
      }}
    ></div>
  );
};

export default CompleteColor;
