import React, {useContext} from 'react'
import Task from './Task'
import {TaskContext} from '../context/TaskContext'

const TaskList = () => {
    const {tasks} = useContext(TaskContext);
    
    return (
        <>
            {tasks.length ? (
                <ul className="list">
                    {tasks.map((task) => {
                        return (
                            <Task task={task} key={task.id} />
                        )
                    })}
                </ul>
            ) : (
                <div className="no-task">No Tasks Yet</div>
            )}
        </>
    )
}

export default TaskList
