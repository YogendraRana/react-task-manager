import React, {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

const Task = ({task}) => {

    //context
    const {deleteTask, findTask} = useContext(TaskContext);

    return (
        <li className="list-item">
            <span>{task.title}</span>
            <div className="buttons">
                <button onClick={() => findTask(task.id)} className="btn edit-btn"><i className="fa fa-pen"></i></button>
                <button onClick={() => deleteTask(task.id)} className="btn delete-btn"><i className="fa fa-trash-alt"></i></button>
            </div>
        </li>
    )
}

export default Task
