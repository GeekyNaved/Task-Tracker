/* eslint-disable react-refresh/only-export-components */
import {createContext, useState, useEffect} from "react";
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import {toast} from "react-toastify";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // Options: 'all', 'completed', 'pending'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch tasks on load
  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}?_limit=10`);
        setTasks(response.data);
      } catch (err) {
        setTasks([]);
        setError("Failed to fetch tasks");
        toast.error("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  // Generate unique ID
  const generateId = () => uuidv4();

  const addTask = async (title) => {
    const newTask = {id: generateId(), title, completed: false};
    try {
      const response = await axios.post(API_URL, newTask);
      setTasks((prevTasks) => [...prevTasks, response.data]);
      setFilter("all");
      toast.success("Task Added Successfully.");
    } catch {
      toast.error("Unable to Add. Something went wrong. Please try again.");
      setError("Failed to add task");
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      await axios.put(`${API_URL}/${updatedTask.id}`, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      );
    } catch {
      setError("Failed to update task");
      toast.error("Unable to update. Something went wrong. Please try again.");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch {
      setError("Failed to delete task");
      toast.error("Unable to delete. Something went wrong. Please try again.");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <TaskContext.Provider
      value={{
        tasks: filteredTasks,
        addTask,
        updateTask,
        deleteTask,
        setFilter,
        filter,
        loading,
        error,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
