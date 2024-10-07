import React from 'react';
import Board from './Components/Board/index.jsx';
import { TaskProvider } from './Contexts/TaskContext.jsx';
import './styles.css'; // Estilos generales
import './task.css'; // Estilos de tareas
import './priority.css'; // Estilos de prioridad

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <Board />
      </div>
    </TaskProvider>
  );
}

export default App;
