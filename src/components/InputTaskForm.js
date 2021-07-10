import React, {useContext, useState, useEffect} from 'react'
import {TaskContext} from '../context/TaskContext'

const InputTaskForm = () => {

    //context
    const {addTask, editItem, editTask} = useContext(TaskContext);

    //hook
    const [title, setTitle] = useState("");

    useEffect(() => {
        if(editItem !== null){
            setTitle(editItem.title)
        }
        else{
            setTitle("");
        }
    }, [editItem]);

    //function
    const handleSubmit = (e) => {
        e.preventDefault();
        if(editItem === null){
            addTask(title);
            setTitle("");
        } 
        else{
            editTask(title, editItem.id);
        }
    }

    //return jsx
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input onChange={(e) => {setTitle(e.target.value)}} value={title} type="text" className="task-input" placeholder="Add task..." required></input>
            <button type="submit" className="add-task-btn">
                {editItem ? "Edit Task" : "Add Task"}</button>
        </form>
    )
}

export default InputTaskForm
