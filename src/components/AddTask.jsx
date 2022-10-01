import CustomInput from "./CustomInput"
import "./AddTask.scss"
import { useState } from "react"

const AddTask = () =>{
    const [ task, setTask] = useState("")

    const onChange = (e) =>{
        setTask(e.target.value)
    }

    return(
        <div className="add-task-container">
            <CustomInput 
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange} />
        </div>
    )
}

export default AddTask