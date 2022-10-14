import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useAlert } from 'react-alert'
import axios from 'axios'

import CustomInput from '../CustomInput/CustomInput'
import CustomButton from '../CustomButton/CustomButton'

import './AddTask.scss'

const AddTask = ({ fatchTasks }) => {
  const [task, setTask] = useState('')

  const alert = useAlert()

  const onChange = (e) => {
    setTask(e.target.value)
  }

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return alert.error('A tarefa precisa de uma descrição para ser adicionada!')
      }

      setTask('')

      await axios.post(`${process.env.REACT_APP_API_URL}/tasks`, {
        description: task,
        isCompleted: false
      })

      await fatchTasks()

      await alert.success('A tarefa foi adicionada com sucesso!')
    } catch (_err) {
      await alert.error('Algo de inesperado aconteceu!')
    }
  }

  return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
                onEnterPress={handleTaskAddition}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#fff"/>
            </CustomButton>
        </div>
  )
}

export default AddTask
