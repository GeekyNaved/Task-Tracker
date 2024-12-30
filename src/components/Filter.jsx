import {useContext} from "react";
import {TaskContext} from "../context/TaskContext";

const Filter = () => {
  const {setFilter} = useContext(TaskContext);
  const {filter} = useContext(TaskContext);

  return (
    <div className="flex gap-4">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded ${
          filter === "all" ? "bg-black text-white" : "bg-gray-200"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-2 rounded ${
          filter === "completed" ? "bg-black text-white" : "bg-gray-200"
        }`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("pending")}
        className={`px-4 py-2 rounded ${
          filter === "pending" ? "bg-black text-white" : "bg-gray-200"
        }`}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
