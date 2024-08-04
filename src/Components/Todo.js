import { nanoid } from "nanoid";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const date = new Date();
const Todo = () => {
    const { title, setTitle, tasks, setTasks, activeCategory, setActiveCategory } = useContext(TaskContext);

    // console.log(title)
    const submitFormHandler = (event) => {
        event.preventDefault();
        toast("Task Created");

        // console.log("External js file is working")
        const newTask = { id: nanoid(), title, isCompleted: false, createdAt: date.getTime(), completedAt: date.getTime() }

        // const copyTask = [...tasks];
        // copyTask.push(newTask)
        // setTasks(copyTask)

        //* ----- OR ----- *\

        const updatedTasks = [...tasks, newTask]
        setTasks(updatedTasks);

        //todo: JSON.stringify(tasks) converts the tasks array into a JSON string:
        localStorage.setItem('TodoApp_React', JSON.stringify(updatedTasks))

        setTitle('');
        setActiveCategory('All');
    }

    const completeTaskToggler = (id, tasks, setTasks) => {
        // console.log(id);
        // console.log(tasks[index].isCompleted);
        // tasks[index].isCompleted = !tasks[index].isCompleted;
        // setTasks([...tasks]);

        const updatedTaskList = tasks.map((task) => {
            // return id == task.id ? { ...task, isCompleted: !task.isCompleted, completedAt: date.getTime(), } : task

            if (id == task.id) {
                if (task.isCompleted) {
                    toast("⛔ Task completion status removed")
                    return {
                        ...task, isCompleted: false, completedAt: date.getTime(),
                    }
                } else {
                    toast("✅ Task Completed");
                    return {
                        ...task, isCompleted: true, completedAt: date.getTime(),
                    }
                }
            } else {
                return task;
            }

        })

        // console.log(updatedTaskList);
        setTasks(updatedTaskList);
        localStorage.setItem('TodoApp_React', JSON.stringify(updatedTaskList))
    }

    const deleteHandler = (id, tasks, setTasks) => {
        toast("🗑️ Task Deleted");
        console.log("deleteHandler is working : ", id);
        let updatedTasks = tasks.filter((task) => id !== task.id);

        // setTasks([...updatedTask]);  // or
        setTasks(updatedTasks);
        localStorage.setItem('TodoApp_React', JSON.stringify(updatedTasks))

        // / --------------------- \
        // let copyTasks = [...tasks];
        // copyTasks.splice(index, 1);
        // setTasks(copyTasks);
        // \ --------------------- /
    }

    const formattedTime = (yourDate) => new Date(yourDate).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true // Set to false for 24-hour format
    });


    return { completeTaskToggler, deleteHandler, submitFormHandler, formattedTime }
}

// const temp = null;
export default Todo;
