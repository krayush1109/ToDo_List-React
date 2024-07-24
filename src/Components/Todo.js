import { nanoid } from "nanoid";

const temp = () => { }

const submitFormHandler = (event, title, setTitle, tasks, setTasks) => {
    event.preventDefault();
    // console.log("External js file is working")

    const newTask = { id: nanoid(), title, isCompleted: false }

    // const copyTask = [...tasks];
    // copyTask.push(newTask)
    // setTasks(copyTask)

    //* ----- OR ----- *\

    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks);

    //todo: JSON.stringify(tasks) converts the tasks array into a JSON string:
    localStorage.setItem('TodoApp_React', JSON.stringify(updatedTasks))

    setTitle('');
}

const completeTaskToggler = (index, tasks, setTasks) => {
    // console.log(index);    
    // console.log(tasks[index].isCompleted);
    tasks[index].isCompleted = !tasks[index].isCompleted;
    setTasks([...tasks]);
}

const deleteHandler = (index, tasks, setTasks) => {
    console.log("deleteHandler is working : ", index);
    
    let updatedTasks = tasks.filter((val, i) => i !== index);

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
