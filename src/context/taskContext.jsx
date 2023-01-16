import React from "react";
import { useState } from "react";
import { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const defaultTasks = [
  { text: "cut hair", completed: true },
  { text: "do rodtasks", completed: true },
  { text: "have a good time with my love", completed: false },
];

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const {
    items: tasks,
    updateItems: setTasks,
    loading,
    error,
  } = useLocalStorage("RODTASKS_V1_TASKS", defaultTasks);

  const taskTemplate = {
    completed: false,
    text: "my Task",
  };

  const [searchList, setSearchList] = useState(tasks);

  const deleteTask = (text) => {
    const indexFilterTask = tasks.findIndex((task) => task.text === text);

    const copyTasks = [...tasks];

    copyTasks.splice(indexFilterTask, 1);

    setTasks(copyTasks);
  };

  const completeTask = (text) => {
    const indexFilterTask = tasks.findIndex((task) => task.text === text);

    const copyTasks = [...tasks];

    copyTasks[indexFilterTask].completed = true;

    setTasks(copyTasks);
  };

  const createTask = (text) => {
    const copyTasks = [...tasks];
    copyTasks.push({ ...taskTemplate, text: text });

    setTasks(copyTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        searchList,
        setSearchList,
        completeTask,
        deleteTask,
        createTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, TaskContext };
