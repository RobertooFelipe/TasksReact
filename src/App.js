import { useEffect, useRef, useState } from "react";
import TaskItem from "./components/TaskItem"

const App = () => {

  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current === false){
      mounted.current = true
    } else {
      console.log("updated!")
    }
  })

  const [tasks, setTasks] = useState([
    {
      id: "1",
      description: "Estudar Programação",
      isCompleted: false,
    },
    {
      id: "2",
      description: "Faculdade",
      isCompleted: true,
    }
  ])

  const handleCleanTasks = () => {
    setTasks([])
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task}/>
      ))}
      <button onClick={handleCleanTasks}>Limpar tarefas</button>
    </>
  );
}

export default App;
