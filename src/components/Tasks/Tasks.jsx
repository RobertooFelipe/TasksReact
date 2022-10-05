import { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import "./Tasks.scss"

import TaskItem from '../TaskItem/TaskItem'
import AddTask from "../AddTask/AddTask";

const Tasks = () => {

    const alert = useAlert();

    const [tasks, setTasks] = useState([])

    const fatchTasks = useCallback(async () => {
      try{
        const { data } = await axios.get("https://fsc-task-manager-backend.herokuapp.com/tasks")

        await setTasks(data)
      }catch(_err){
        await alert.error("Algo de inesperado aconteceu!")
      }
    },[alert])

    const lastTask = useMemo(() => {
      return tasks.filter(tasks => tasks.isCompleted === false)
    },[tasks])

    const CompletedlastTask = useMemo(() => {
      return tasks.filter(tasks => tasks.isCompleted === true)
    },[tasks])
  
    useEffect(() => {
      fatchTasks()
    }, [fatchTasks])

    return ( 
        <div className="task-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Útimas tarefas</h3>
                <AddTask fatchTasks={fatchTasks} />
                <div className="task-list">
                    {lastTask.map(lastTask => (
                        <TaskItem 
                          key={lastTask._id}
                          task={lastTask} 
                          fatchTasks={fatchTasks}
                        />
                        ))}
                </div>
            </div>
            <div className="completed-tasks">
            <h3>Tarefas concluídas</h3>
                <div className="task-list">
                    {CompletedlastTask.map(completedTask => (
                          <TaskItem 
                            key={completedTask._id}
                            task={completedTask}
                            fatchTasks={fatchTasks}
                          />
                        ))}
                </div>
            </div>
        </div>
     );
}

export default Tasks;