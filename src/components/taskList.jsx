import { useContext } from "react";
import { TaskCard } from "./taskCard";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {

  const {tasks} = useContext(TaskContext);

  //compruebo si el array esta vacio
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">no hay tareas pendientes</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
