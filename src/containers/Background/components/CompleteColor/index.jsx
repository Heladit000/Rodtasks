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
        height: `${tasks.length > 0 ? (100-heightCompleted) : 0}%`
      }}
    ></div>
  );
};

export default CompleteColor;
