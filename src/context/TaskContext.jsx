import React, { createContext, useState } from 'react'

export const TaskContext = createContext(null);

const TaskProvider = ({ children }) => {
    const storedTasks = JSON.parse(localStorage.getItem('TodoApp_React'))

    const [title, setTitle] = useState("")
    const [tasks, setTasks] = useState(storedTasks || [])
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <TaskContext.Provider value={{ title, setTitle, tasks, setTasks, activeCategory, setActiveCategory }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;