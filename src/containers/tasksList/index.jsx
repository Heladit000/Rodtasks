import React from 'react';
import "./style/TasksList.css"

const TasksList = (props) => {
    return (
        <div className="tasksList">
            {props.children}
        </div>
    );
};

export default TasksList;