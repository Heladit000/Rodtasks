import React, { useEffect, useState } from "react";

import CreateTaskButton from "./components/createTaskButton";
import TasksCounter from "./components/tasksCounter";
import TasksSearch from "./components/tasksSearch";
import TasksList from "./containers/tasksList";
import TaskCard from "./containers/tasksList/taskCard";
import "./style/App.css";

const defaultTasks = [
  { text: "cut hair", completed: true },
  { text: "do rodtasks", completed: true },
  { text: "have a good time with my love", completed: false },
];

const useLocalStorage = (itemName, defaultItems) => {

  //INFO: you can use default React Hooks in your custom hook

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [items, setItems] = useState([]);

  useEffect(() => {
    //check if localStorage have data

    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;

        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(defaultItems));
          parsedItems = defaultItems;

        } else {
          parsedItems = JSON.parse(localStorageItems);
        }

        setItems(parsedItems);
      }
      catch (error) {
        setError(true);
      }

      setLoading(true);

    }, 1000);

  }, [itemName, defaultItems]);



  //update items value and local storage
  const updateItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem(itemName, JSON.stringify(newItems));
  }

  //return array
  return {
    items, updateItems, loading, error
  }
}

function App() {

  const { items: tasks, updateItems: setTasks, loading, error } = useLocalStorage("RODTASKS_V1_TASKS", defaultTasks);

  const [searchList, setSearchList] = useState(tasks);



  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="tasks-container">
      <TasksCounter
        allTasks={tasks.length}
        completedTasks={completedTasks.length}
      />
      <TasksSearch tasks={tasks} setSearchList={setSearchList} />
      <TasksList>

        {/* API cases */}
        {error && <h1>Error!</h1>}
        {!loading && <h1 >loading...</h1>}

        {tasks.length === 0 && loading && !error ? <h1>No tasks, click (+) and add tasks!</h1> :
          searchList.length === 0 && loading && !error ? (
            <h1>Not Found</h1>
          ) : (
            searchList.map((task) => (
              <TaskCard
                key={task.text}
                text={task.text}
                completed={task.completed}
                tasks={tasks}
                searchList={searchList}
                setTasks={setTasks}
              />
            ))
          )
        }


      </TasksList>
      <CreateTaskButton />
    </div>
  );
}

export default App;
