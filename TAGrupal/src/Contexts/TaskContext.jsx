import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

let taskIdCounter = 0; // Contador para generar IDs únicos

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null); // Para editar

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks'); 
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const addTask = (taskData) => {
    const newTask = { id: `task-${++taskIdCounter}`, ...taskData };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(prevTasks => prevTasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };
  

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, currentTask, setCurrentTask }}>
      {children}
    </TaskContext.Provider>
  );
};
