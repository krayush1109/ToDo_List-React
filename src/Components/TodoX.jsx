import Todo from './Todo';
import './style_ui.css';

const App = () => {
    return (
        <div className="app-container">
            <div className="header-container">
                <div className="header-text">
                    <h1 className="header-title">LETS TODO</h1>
                    <p className="header-subtitle">Keeps doing things</p>
                </div>
                <div className="counter">
                    1/3
                </div>
            </div>
            <form className="form-container">
                <input
                    placeholder="write your next task..."
                    className="task-input"
                    type="text"
                />
                <button className="add-button">
                    <i className="ri-add-fill"></i>
                </button>
            </form>
            <ul className="task-list">
                <li className="task-item">
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
                </li>
                <li className="task-item">
                    <div className="task-details">
                        <div className="task-status task-status-pending"></div>
                        <h1 className="task-title">
                            Task 3
                        </h1>
                    </div>
                    <div className="task-actions">
                        <i className="ri-file-edit-line"></i>
                        <i className="ri-delete-bin-3-line"></i>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default App;
