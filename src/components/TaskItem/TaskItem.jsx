import { AiFillDelete } from 'react-icons/ai'
import { useAlert } from 'react-alert'
import axios from 'axios'

import './TaskItem.scss'

const TaskItem = ({ task, fatchTasks }) => {
  const alert = useAlert()

  const handleTaskDeletion = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/tasks/${task._id}`)

      await fatchTasks()

      await alert.success('Item removido com sucesso!')
    } catch (_err) {
      await alert.error('Algo de inesperado aconteceu!')
    }
  }

  const handleTaskCompletionChange = async (e) => {
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/tasks/${task._id}`, {
        isCompleted: e.target.checked
      })

      await fatchTasks()

      await alert.success('A tarefa foi modificada com sucesso')
    } catch (_err) {
      await alert.error('Algo inesperado aconteceu')
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
                            onChange={(e) => handleTaskCompletionChange(e)}
                        />
                        <span
                            className={
                                task.isCompleted
                                  ? 'checkmark completed'
                                  : 'checkmark'
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
