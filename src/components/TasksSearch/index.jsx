import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TaskContext } from "@context/taskContext";

import "./style/TasksSearch.scss";

const TasksSearch = () => {

  const {tasks, setSearchList} = useContext(TaskContext);

  const [searchValue, setSearchValue] = useState("");

  //listen tasks and searchValue changes
  useEffect(() => {
    //filter tasks

    const filteredTasks = tasks.filter((task) => {
      const convertedText = task.text.toLowerCase();
      const convertedValue = searchValue.toLowerCase();

      return convertedText.includes(convertedValue);
    });

    if (searchValue === 0) {
      setSearchList(tasks);
    } else {
      setSearchList(filteredTasks);
    }
  }, [tasks, searchValue, setSearchList]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="tasks-search">
      <input
        value={searchValue}
        onChange={handleSearch}
        placeholder=" 🔎 Search tasks..."
        className="default__input"
      />
    </div>
  );
};

export default TasksSearch;
