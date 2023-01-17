import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const {
    items: tasks,
    updateItems: setTasks,
    loading,
    error,
  } = useLocalStorage("RODTASKS_V2_TASKS", []);

  const [searchList, setSearchList] = useState(tasks);

  const findTaskIndex = (id) => {
    return tasks.findIndex((task) => task.id === id);
  };

  const deleteTask = (id) => {
    const indexFilterTask = findTaskIndex(id);

    const copyTasks = [...tasks];

    copyTasks.splice(indexFilterTask, 1);

    setTasks(copyTasks);
  };

  const completeTask = (id) => {
    const indexFilterTask = findTaskIndex(id);

    const copyTasks = [...tasks];

    copyTasks[indexFilterTask].completed = true;

    setTasks(copyTasks);
  };

  const unCompleteTask = (id) => {
    const indexFilterTask = findTaskIndex(id);

    const copyTasks = [...tasks];

    copyTasks[indexFilterTask].completed = false;
    setTasks(copyTasks);
  };

  const updateTaskText = (id, newText) => {
    const indexFilterTask = findTaskIndex(id);

    const copyTasks = [...tasks];

    copyTasks[indexFilterTask].text = newText;
    setTasks(copyTasks);
  };

  const toggleCompleteTask = (id) => {
    const indexFilterTask = findTaskIndex(id);

    const copyTasks = [...tasks];

    copyTasks[indexFilterTask].completed =
      !copyTasks[indexFilterTask].completed;
    setTasks(copyTasks);
  };

  const createTask = (text) => {

    const taskTemplate = {
      completed: false,
      id: nanoid(),
      text: "my Task",
    };

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
        toggleCompleteTask,
        updateTaskText,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, TaskContext };
