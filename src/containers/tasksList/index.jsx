import React from 'react';
import "./style/TasksList.scss"

const TasksList = (props) => {
    return (
        <div className="tasks-list">
            {props.children}
        </div>
    );
};

export default TasksList;