import React, { useState, createContext, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {

    //hooks and variables
    const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

    const [tasks, setTasks] = useState(initialState)

    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    //functions
    const addTask = (title) => {
        setTasks([...tasks, {title: title, id: uuidv4()}])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const findTask = (id) => {
        const item = tasks.find((task) => task.id === id)
        setEditItem(item);
    }

    const editTask = (title, id) => {
        const newTasks = tasks.map((task) => task.id === id ? {title, id} : task)
        setTasks(newTasks)
        setEditItem(null)
    }

    //context provider
    return (
        <TaskContext.Provider value={{tasks, addTask, deleteTask, findTask, editTask, editItem}}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider
