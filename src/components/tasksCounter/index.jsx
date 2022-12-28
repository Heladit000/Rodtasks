import React from "react";

const TasksCounter = ({allTasks,completedTasks}) => {
  return (
    <div>
      <h1>You have completed {completedTasks} of {allTasks} tasks</h1>
    </div>
  );
};

export default TasksCounter;
