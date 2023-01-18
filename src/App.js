import React, { useContext } from "react";

import CreateTaskButton from "@components/createTaskButton";
import TasksCounter from "@components/tasksCounter";
import TasksSearch from "@components/tasksSearch";
import TasksList from "@containers/TasksList";
import "@styles/App.scss";

import CreateTaskModal from "@containers/CreateTaskModal";
import Background from "@containers/Background";


const App = () => {

  return (
    <>
    <Background/>
    <div className="tasks-container">
        <TasksCounter />
        <TasksSearch />
        <TasksList/>

        <CreateTaskButton floating/>
        <CreateTaskModal />
    </div>
    </>
    
  );
}

export default App;
