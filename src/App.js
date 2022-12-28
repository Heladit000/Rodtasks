//import logo from './logo.svg';
import './style/App.css';

import React, { useState } from "react";
import TasksCounter from "./components/tasksCounter";
import TasksSearch from "./components/tasksSearch";
import TasksList from "./containers/tasksList";
import TaskCard from "./containers/tasksList/taskCard";
import CreateTaskButton from './components/createTaskButton';


const defaultTasks = [
  { text: "cut hair", completed: true },
  { text: "do rodtasks", completed: true },
  { text: "have a good time with my love", completed: false },
]


function App() {

  const [tasks, setTasks] = useState(defaultTasks);

  const [searchList, setSearchList] = useState(tasks);

  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="tasks-container">
      <TasksCounter allTasks={tasks.length} completedTasks={completedTasks.length} />
      <TasksSearch tasks={tasks} setSearchList={setSearchList} />
      <TasksList>
        {
          searchList.length === 0 ?
            <h1>Not Found</h1>
            :
            searchList.map((task) => (
              <TaskCard key={task.text} text={task.text} completed={task.completed} tasks={tasks} searchList={searchList} setTasks={setTasks} setSearchList={setSearchList}/>
            ))

        }

      </TasksList>
      <CreateTaskButton />
    </div>
  );
}

export default App;
