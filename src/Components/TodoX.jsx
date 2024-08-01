import { useState } from 'react';
import '../stylesheets/todo.css';

import { completeTaskToggler, deleteHandler, submitFormHandler } from './Todo';

const App = () => {
    const storedTasks = JSON.parse(localStorage.getItem('TodoApp_React'))

    const [title, setTitle] = useState("")
    const [tasks, setTasks] = useState(storedTasks || [])
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTask = tasks.filter((task) => {
        if (activeCategory === "All")
            return tasks;
        else if (activeCategory === "Completed")
            return task.isCompleted == true;
        else if (activeCategory == "Incomplete")
            return task.isCompleted == false;
    }).sort((a,b)=> b.completedAt - a.completedAt);

    // console.log(filteredTask);

    let taskRender = (
        <h1 className='font-semibold text-red-500 text-3xl text-center' >No Tasks</h1>
    )

    if (filteredTask.length > 0) {
        taskRender = filteredTask.map((task, index) => {
            return (
                <li key={task.id} className="task-item">
                    <div className="task-details">
                        <div onClick={() => completeTaskToggler(task.id, tasks, setTasks)} className={`task-status ${task.isCompleted ? 'task-status-completed' : 'task-status-pending'}`}></div>
                        <h1 className={`${task.isCompleted ? 'task-title-completed' : 'task-title'}`}>
                            {task.title}
                        </h1>
                    </div>
                    <div className="task-actions">
                        <i className="ri-file-edit-line"></i>
                        <i className="ri-delete-bin-3-line" onClick={() => deleteHandler(task.id, tasks, setTasks)}></i>
                    </div>
                </li>
            )
        })
    }

    return (
        <>
            <div className="app-container">
                <div className="header-container">
                    <div className="header-text">
                        <h1 className="header-title">LETS TODO</h1>
                        <p className="header-subtitle">Keeps doing things</p>
                    </div>
                    <div className="counter">
                        {(tasks.filter((item) => item.isCompleted).length)}/{tasks.length}
                    </div>
                </div>
                <form className="form-container" onSubmit={(e) => submitFormHandler(e, title, setTitle, tasks, setTasks, setActiveCategory)}>
                    <input
                        placeholder="write your next task..."
                        className="task-input"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <button className="add-button">
                        <i className="ri-add-fill"></i>
                    </button>
                </form>

                <section id='category' className='flex gap-5 my-3' >
                    <h1 className={`${activeCategory == "All" ? 'category-in-active' : 'category-in'} `} onClick={()=> setActiveCategory('All')} >All</h1>
                    <h1 className={`${activeCategory == "Incomplete" ? 'category-in-active' : 'category-in'} `} onClick={()=> setActiveCategory('Incomplete')} >Incomplete</h1>
                    <h1 className={`${activeCategory == "Completed" ? 'category-in-active' : 'category-in'} `} onClick={()=> setActiveCategory('Completed')} >Completed</h1>
                </section>

                <ul className="task-list">
                    {/* <li className="task-item">
                        <div className="task-details">
                            <div className="task-status task-status-pending"></div>
                            <h1 className="task-title">
                                Task 1
                            </h1>
                        </div>
                        <div className="task-actions">
                            <i className="ri-file-edit-line"></i>
                            <i className="ri-delete-bin-3-line"></i>
                        </div>
                    </li>
                    <li className="task-item">
                        <div className="task-details">
                            <div className="task-status task-status-completed"></div>
                            <h1 className="task-title-completed">
                                Task 2
                            </h1>
                        </div>
                        <div className="task-actions">
                            <i className="ri-file-edit-line"></i>
                            <i className="ri-delete-bin-3-line"></i>
                        </div>
                    </li> */}

                    {/*  */}
                    {taskRender}
                    {/*  */}
                </ul>

            </div>
        </>
    );
};

export default App;
