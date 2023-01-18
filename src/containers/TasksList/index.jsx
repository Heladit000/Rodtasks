import React, { useContext } from "react";

import { TaskContext } from "@context/taskContext";

import TaskCard from "./components/TaskCard";
import Taskloader from "./components/TaskLoader";
import "./style/TasksList.scss";
import CreateTaskButton from "@components/createTaskButton";


const TasksList = () => {
  const { tasks, error, loaded, searchList } = useContext(TaskContext);
  return (
    <div className="tasks-list">
      {/* API cases */}
      {error && <h1>Error!</h1>}
      {!loaded &&
        Array(4)
          .fill(1)
          .map((item, increment) => <Taskloader key={increment} />)}

      {loaded && !error && tasks.length === 0 ? (
        <h1 className="tasks-list__no-tasks">No tasks, click (<CreateTaskButton className="tasks-list__no-tasks--button"/>) and add tasks!</h1>
      ) : loaded && !error && searchList.length === 0 ? (
        <h1>🕷️🕸️None tasks founded.</h1>
      ) : (

        //order the array not completed first to render
        searchList.sort((a,b) => a.completed - b.completed).map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
          />
        ))
      )}
    </div>
  );
};

export default TasksList;
