import React from 'react';

import "./style/TaskCard.css"

const TaskCard = (props) => {
    return (
        <div className="taskCard">
            <span className={`taskCard-checkbox ${props.completed && "taskCard-checkbox-completed"}`}>
                <h3 className={`taskCard-checkbox__check ${props.completed && "taskCard-checkbox__check-completed"}`}>✓</h3>
            </span>
            <p className={props.completed && "taskCard__text-completed"}>{props.text}</p>
            <span className="taskCard__deleteButton">X</span>
        </div>
    );
};

export default TaskCard;