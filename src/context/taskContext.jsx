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

  const findTaskIndex = (id) => {
    return tasks.findIndex((task) => task.text === id);
  }

  const deleteTask = (text) => {
    const indexFilterTask = findTaskIndex(text);

    const copyTasks = [...tasks];

    copyTasks.splice(indexFilterTask, 1);

    setTasks(copyTasks);
  };

  const completeTask = (text) => {
    const indexFilterTask = findTaskIndex(text);

    const copyTasks = [...tasks];

    copyTasks[indexFilterTask].completed = true;

    setTasks(copyTasks);
  };

  const unCompleteTask = (text) => {
    const indexFilterTask = findTaskIndex(text);

    const copyTasks = [...tasks];

    copyTasks[indexFilterTask].completed = false;
    setTasks(copyTasks);
  };

  const toggleCompleteTask = (text) => {
    const indexFilterTask = findTaskIndex(text);

    const copyTasks = [...tasks];

    copyTasks[indexFilterTask].completed = !copyTasks[indexFilterTask].completed;
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
        unCompleteTask,
        deleteTask,
        createTask,
        toggleCompleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, TaskContext };
