//import logo from './logo.svg';
import './style/App.css';

import React from "react";
import TasksCounter from "./components/tasksCounter";
import TasksSearch from "./components/tasksSearch";
import TasksList from "./containers/tasksList";
import TaskCard from "./containers/tasksList/taskCard";
import CreateTaskButton from './components/createTaskButton';


const tasks = [
  {text: "cut hair", completed: false},
  {text: "do rodtasks", completed: true},
  {text: "have a good time with my love", completed: false},
]


function App() {
  return (
    <div className="tasks-container">
      <TasksCounter/>
      <TasksSearch/>
      <TasksList>
        {tasks.map((task)=>(
          <TaskCard text={task.text} completed={task.completed}/>
        ))}
      </TasksList>
      <CreateTaskButton/>
    </div>
  );
}

export default App;
