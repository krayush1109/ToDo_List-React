import { useState } from 'react';
import '../stylesheets/todo.css';

import { completeTaskToggler, deleteHandler, submitFormHandler } from './Todo';

const App = () => {
    const storedTasks = JSON.parse(localStorage.getItem('TodoApp_React'))

    const [title, setTitle] = useState("")
    const [tasks, setTasks] = useState(storedTasks || [])
        

    let taskRender = (
        <h1 className='font-semibold text-red-500 text-3xl text-center' >No Tasks</h1>
    )

    if (tasks.length > 0) {
        taskRender = tasks.map((task, index) => {
            return (
                <li key={task.id} className="task-item">
                    <div className="task-details">
                        <div onClick={() => completeTaskToggler(index, tasks, setTasks)} className={`task-status ${task.isCompleted ? 'task-status-completed' : 'task-status-pending'}`}></div>
                        <h1 className={`${task.isCompleted ? 'task-title-completed' : 'task-title'}`}>
                            {task.title}
                        </h1>
                    </div>
                    <div className="task-actions">
                        <i className="ri-file-edit-line"></i>
                        <i className="ri-delete-bin-3-line" onClick={() => deleteHandler(index, tasks, setTasks)}></i>
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
                        {(tasks.filter((item)=>item.isCompleted).length) }/{tasks.length}
                    </div>
                </div>
                <form className="form-container" onSubmit={(e) => submitFormHandler(e, title, setTitle, tasks, setTasks)}>
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
