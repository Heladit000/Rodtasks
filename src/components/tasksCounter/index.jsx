import React from "react";
import { useContext } from "react";

import { TaskContext } from "@context/taskContext";

const TasksCounter = () => {
  const { tasks, loaded, error } = useContext(TaskContext);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      {(!loaded || error) && <h1>Getting your tasks...</h1>}

      {loaded && !error && tasks.length === 0 && (
        <h1>🏖️Day off!. You don't have tasks</h1>
      )}

      {loaded &&
        !error &&
        tasks.length === 1 &&
        completedTasks.length === 0 && <h1>You haven't completed your task</h1>}

      {loaded &&
        !error &&
        tasks.length === 1 &&
        completedTasks.length === 1 && <h1>You have completed your task🎉</h1>}

      {loaded && !error && tasks.length > 1 && (
        <h1>
          You have completed {completedTasks.length} of {tasks.length} tasks{completedTasks.length===tasks.length && "🎉"}
        </h1>
      )}
    </div>
  );
};

export default TasksCounter;
