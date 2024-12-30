import {useState, useContext} from "react";
import {TaskContext} from "../context/TaskContext";
import {toast} from "react-toastify";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const {addTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle("");
    } else {
      toast.error("Field cannot be empty.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="border p-2 rounded flex-1"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
