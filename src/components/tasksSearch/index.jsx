import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./style/TasksSearch.css";

const TasksSearch = ({ tasks, setSearchList }) => {
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
        placeholder="write on me"
      />
    </div>
  );
};

export default TasksSearch;
