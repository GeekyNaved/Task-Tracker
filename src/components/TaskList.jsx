import {useContext} from "react";
import {TaskContext} from "../context/TaskContext";

const TaskList = () => {
  const {tasks, updateTask, deleteTask, loading, error} =
    useContext(TaskContext);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex justify-between items-center p-4 border rounded ${
            task.completed ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <span>{task.title}</span>
          <div className="flex gap-2">
            <button
              onClick={() => updateTask({...task, completed: !task.completed})}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              {task.completed ? "Pending" : "Complete"}
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
