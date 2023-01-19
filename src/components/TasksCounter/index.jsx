import React, { useEffect, useState } from "react";
import { useContext } from "react";

import { TaskContext } from "@context/taskContext";

import "./style/TasksCounter.scss";

const TasksCounter = () => {
  const { tasks, loaded, error } = useContext(TaskContext);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [originalDocumentTitle, setOriginalDocumentTitle] = useState("");

  useEffect(() => {
    setOriginalDocumentTitle(document.title);
  }, []);

  useEffect(() => {
    if (loaded && !error) {
      const filterCompletedTasks = tasks.filter((task) => task.completed);

      if(tasks.length === 0){
        document.title = originalDocumentTitle;
      } else {
        document.title = `${originalDocumentTitle} ${filterCompletedTasks.length}|${tasks.length}${filterCompletedTasks.length === tasks.length ? "🎉": ""}`;
      }

      setCompletedTasks(filterCompletedTasks);
    }
  }, [tasks]);
  return (
    <div className="tasks-counter">
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
          You have completed {completedTasks.length} of {tasks.length} tasks
          {completedTasks.length === tasks.length && "🎉"}
        </h1>
      )}
    </div>
  );
};

export default TasksCounter;
