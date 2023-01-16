import React from "react";
import { useContext } from "react";
import { TaskContext } from "../../context/taskContext";

const TasksCounter = () => {

  const {tasks} = useContext(TaskContext);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <h1>You have completed {completedTasks.length} of {tasks.length} tasks</h1>
    </div>
  );
};

export default TasksCounter;
