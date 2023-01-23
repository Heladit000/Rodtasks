import React, { useContext } from "react";

import CreateTaskButton from "@components/CreateTaskButton";
import TasksCounter from "@components/TasksCounter";
import TasksSearch from "@components/TasksSearch";
import TasksList from "@containers/TasksList";
import "@styles/App.scss";

import CreateTaskModal from "@containers/CreateTaskModal";
import Background from "@containers/Background";


const App = () => {

  return (
    <>
      <Background />
      <div className="tasks-container">
        <TasksCounter />
        <TasksSearch />
        <TasksList />
        <CreateTaskModal />
      </div>
      <CreateTaskButton floating />

    </>

  );
}

export default App;
