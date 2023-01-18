import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

import useTask from "@hooks/useTask";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const {
    tasks,
    loaded,
    error,
    deleteTask,
    createTask,
    updateTaskText,
    toggleCompleteTask,
    completeTask,
    unCompleteTask,
  } = useTask({
    taskListName: "RODTASKS_V2_TASKS",
    taskTemplate: {
      completed: false,
      id: nanoid(),
      text: "my Task",
    },
  });

  const [searchList, setSearchList] = useState(tasks);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loaded,
        error,
        searchList,
        setSearchList,
        completeTask,
        unCompleteTask,
        deleteTask,
        createTask,
        toggleCompleteTask,
        updateTaskText,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, TaskContext };
