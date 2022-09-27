import { useEffect } from "react";

const TaskItem = ({ task }) => {
    useEffect(() => {
        console.log("mounted")

        return () => {
            console.log("unmount")
        }
    },[])


    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
        </>
    )
}

export default TaskItem