import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";


export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  //CRUDS
  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  const deletTask = (taskid) => {
    setTasks(tasks.filter((tk) => tk.id !== taskid));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deletTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
