import { useState, useEffect } from "react";
import axios from "axios";

import TaskItem from "./components/TaskItem"

const App = () => {


  const [tasks, setTasks] = useState([])

  const fatchTasks = async () => {
    try{
      const { data } = await axios.get("https://fsc-task-manager-backend.herokuapp.com/tasks")
      setTasks(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fatchTasks()
  }, [])

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task}/>
      ))}
    </>
  );
}

export default App;