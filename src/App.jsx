import {TaskProvider} from "./context/TaskContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import {ToastContainer} from "react-toastify";

const App = () => {
  return (
    <TaskProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        // hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable={false}
        pauseOnHover
        theme="colored"
      />
      <div className="max-w-xl mx-auto p-4 space-y-6">
        <h1 className="text-2xl font-bold text-center">Task Tracker</h1>
        <AddTask />
        <Filter />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
