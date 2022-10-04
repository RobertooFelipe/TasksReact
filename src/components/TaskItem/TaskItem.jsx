import { AiFillDelete } from 'react-icons/ai'
import { useAlert } from 'react-alert';
import axios from "axios";

import "./TaskItem.scss";

const TaskItem = ({ task, fatchTasks }) => {

    const alert = useAlert();

    const handleTaskDeletion = async () => {
        try{
           await axios.delete(`https://fsc-task-manager-backend.herokuapp.com/tasks/${task._id}`)

           await fatchTasks();

           alert.success("Item removido com sucesso!")
        }catch(err){
            alert.error("Algo de errado aconteceu!")
            console.log(err)
        }    
    }

    return (
        <>
            <div className="task-item-container">
                <div className="task-description">
                    <label className={
                        task.isCompleted 
                        ? 'checkbox-container-completed' 
                        : 'checkbox-container'
                    }>
                        {task.description}
                        <input type="checkbox" 
                            defaultChecked={task.isCompleted}
                        />
                        <span 
                            className={
                                task.isCompleted 
                                ? "checkmark completed" 
                                : "checkmark"
                            }
                        ></span>
                    </label>
                </div>

                <div className="delete">
                    <AiFillDelete 
                        size={18} 
                        color="#F97474" 
                        onClick={handleTaskDeletion}
                    />
                </div>
            </div>
        </>
    )
}// teste

export default TaskItem