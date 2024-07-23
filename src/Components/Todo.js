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

    setTasks([...tasks, newTask]);

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
    
    let updatedTask = tasks.filter((val, i) => i !== index);

    // setTasks([...updatedTask]);  // or
    setTasks(updatedTask);

    // / --------------------- \
    // let copyTasks = [...tasks];
    // copyTasks.splice(index, 1);
    // setTasks(copyTasks);
    // \ --------------------- /
}

export default temp;
export { submitFormHandler, completeTaskToggler, deleteHandler };
