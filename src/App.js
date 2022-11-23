//import logo from './logo.svg';
//import './App.css';

import React from "react";
import TasksCounter from "./components/tasksCounter";
import TasksSearch from "./components/tasksSearch";
import TasksList from "./containers/tasksList";
import TaskCard from "./containers/tasksList/taskCard";


const tasks = [
  {text: "cut hair", completed: false},
  {text: "do rodtasks", completed: false},
  {text: "have a good time with my love", completed: false},
]


function App() {
  return (
    <React.Fragment>
      <TasksCounter/>
      <TasksSearch/>
      <TasksList>
        {tasks.map((task)=>(
          <TaskCard text={task.text}/>
        ))}
      </TasksList>
    </React.Fragment>
  );
}

export default App;
