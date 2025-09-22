import Header from "./components/Header";
import InputTask from "./components/InputTask";
import TaskItem from "./components/TaskItem";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster, toast } from "sonner";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'First Task', completed: false },
    { id: '2', title: 'Second Task', completed: true },
  ]);

  const handleDelete = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
    toast("Tarea eliminada", { position: "top-right", style: { background: "#e90000", color: "#fff", width: "130px", textAlign: "center" } });
  };

  const handleToggleComplete = (id: string) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = (title: string) => {
    setTasks(prev => [
      ...prev,
      { id: Date.now().toString(), title, completed: false }
    ]);
    toast("Tarea agregada", { position: "top-right", style: { background: "#22c55e", color: "#fff", width: "130px", textAlign: "center" } });
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Toaster position="top-right" richColors />
      <div className="max-w-xl mx-auto flex flex-col items-center justify-center mt-20">
        <InputTask onAddTask={handleAddTask} />
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            {...task}
            onDelete={() => handleDelete(task.id)}
            onToggleComplete={handleToggleComplete}
          />
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App
