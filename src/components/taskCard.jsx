import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


export const TaskCard = ({ task}) => {

  const {deletTask} = useContext(TaskContext)
  return (
    <div className="bg-gray-800 text-white p-2 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={()=> deletTask(task.id)}>Delet</button>
    </div>
  );
};
