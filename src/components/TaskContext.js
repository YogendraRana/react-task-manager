import React, { useState, createContext } from 'react'

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, setTask] = useState([
        { title: "Complete the note", id: 1 },
        { title: "Submit the practical", id: 2 },
        { title: "Recite th lesson", id: 3 },
        { title: "Get a job", id: 4 },
    ])

    return (
        <TaskContext.Provider value={{tasks}}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider
