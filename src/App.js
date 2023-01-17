import React, { useContext } from "react";

import CreateTaskButton from "./components/createTaskButton";
import TasksCounter from "./components/tasksCounter";
import TasksSearch from "./components/tasksSearch";
import TasksList from "./containers/tasksList";
import TaskCard from "./containers/tasksList/taskCard";
import "./style/App.scss";

import { TaskContext } from "./context/taskContext";
import CreateTaskModal from "./containers/CreateTaskModal";
import TaskLoader from "./containers/tasksList/taskLoader";
import Background from "./containers/Background";


const App = () => {

  const { tasks, error, loading, searchList } = useContext(TaskContext);

  return (
    <>
    <Background/>
    <div className="tasks-container">
        <TasksCounter />
        <TasksSearch />
        <TasksList>

          {/* API cases */}
          {error && <h1>Error!</h1>}
          {!loading && Array(4).fill(1).map((item, increment) => (
            <TaskLoader key={increment}/>
          ))}

          {tasks.length === 0 && loading && !error ? <h1>No tasks, click (+) and add tasks!</h1> :
            searchList.lenygth === 0 && loading && !error ? (
              <h1>Not Found</h1>
            ) : (
              searchList.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  text={task.text}
                  completed={task.completed}
                />
              ))
            )
          }


        </TasksList>
        <CreateTaskButton />
        <CreateTaskModal />
    </div>
    </>
    
  );
}

export default App;
