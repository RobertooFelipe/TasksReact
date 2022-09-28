import { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss"

const Tasks = () => {

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
        <div className="task-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Útimas tarefas</h3>
                <div className="task-list">
                    {tasks
                        .filter(tasks => tasks.isCompleted === false)
                        .map(lastTask => (
                        <p>{lastTask.description}</p>
                        ))}
                </div>
            </div>
            <div className="completed-tasks">
            <h3>Tarefas concluídas</h3>
                <div className="task-list">
                    {tasks
                        .filter(tasks => tasks.isCompleted)
                        .map(completedTask => (
                        <p>{completedTask.description}</p>
                        ))}
                </div>
            </div>
        </div>
     );
}

export default Tasks;