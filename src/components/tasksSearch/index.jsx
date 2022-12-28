import React from "react";
import { useState } from "react";
import "./style/TasksSearch.css";

const TasksSearch = ({ tasks, setSearchList }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    if (e.target.value === 0) {
      setSearchList(tasks);
    } else {
      setSearchValue(e.target.value);

      const filterTasks = tasks.filter((task) => {
        const convertedText = task.text.toLowerCase();
        const convertedValue = e.target.value.toLowerCase();

        return convertedText.includes(convertedValue);
      });

      setSearchList(filterTasks);
    }
  };

  return (
    <div className="tasksSearch">
      <input
        value={searchValue}
        onChange={handleSearch}
        placeholder="write on me"
      />
    </div>
  );
};

export default TasksSearch;
