import React, { useContext } from 'react';
import { TaskContext } from '../../Contexts/TaskContext.jsx';

function Task({ task, onEditTask }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className={`task ${task.priority}`} data-priority={task.priority} data-deadline={task.deadline}>
      <span className="close" onClick={() => deleteTask(task.id)}>&times;</span>
      <p className="task-title"><strong>{task.title}</strong></p>
      <p className="task-description">{task.description}</p>
      <p>Asignado a: {task.assigned}</p>
      <p>Prioridad: {task.priority}</p>
      <p>Fecha límite: {task.deadline}</p>
      <button onClick={() => onEditTask(task)}>Editar</button> {/* Aquí se abre el modal de edición */}
    </div>
  );
}

export default Task;
