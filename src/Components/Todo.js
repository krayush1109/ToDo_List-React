import { nanoid } from "nanoid";

const temp = () => { }
const date = new Date();

const submitFormHandler = (event, title, setTitle, tasks, setTasks, setActiveCategory) => {
    event.preventDefault();
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
    console.log(id);
    // console.log(tasks[index].isCompleted);
    // tasks[index].isCompleted = !tasks[index].isCompleted;
    // setTasks([...tasks]);
    
    const updatedTaskList = tasks.map((task) => {
        return id==task.id ? {...task, isCompleted: !task.isCompleted, completedAt: date.getTime()} : task
    })
    console.log(updatedTaskList);
    setTasks(updatedTaskList);
    localStorage.setItem('TodoApp_React', JSON.stringify(updatedTaskList))
}

const deleteHandler = (id, tasks, setTasks) => {
    console.log("deleteHandler is working : ", id);
    
    let updatedTasks = tasks.filter((task) => id !== task.id );

    // setTasks([...updatedTask]);  // or
    setTasks(updatedTasks);
    localStorage.setItem('TodoApp_React', JSON.stringify(updatedTasks))

    // / --------------------- \
    // let copyTasks = [...tasks];
    // copyTasks.splice(index, 1);
    // setTasks(copyTasks);
    // \ --------------------- /
}

export default temp;
export { submitFormHandler, completeTaskToggler, deleteHandler };
