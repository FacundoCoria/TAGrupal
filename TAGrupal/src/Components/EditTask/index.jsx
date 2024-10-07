import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../Contexts/TaskContext.jsx';
import './EditTaskModal.css';

function EditTaskModal({ isOpen, onClose }) {
  const { currentTask, updateTask } = useContext(TaskContext);
  const [taskData, setTaskData] = useState({ title: '', status: '', description: '', assigned: '', priority: '' }); 

  useEffect(() => {
    if (currentTask) {
      setTaskData({
        title: currentTask.title,
        status: currentTask.status,
        description: currentTask.description,
        assigned: currentTask.assigned || '',
        priority: currentTask.priority || 'Baja', // Establece un valor por defecto
      });
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...currentTask, ...taskData });
    onClose(); // Cierra el modal después de actualizar
  };

  if (!isOpen) return null; // Si no está abierto, no renderiza nada

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Editar Tarea</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            placeholder="Título"
            required
          />
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            placeholder="Descripción"
          />
          <textarea
            name="assigned"
            value={taskData.assigned}
            onChange={handleChange}
            placeholder="Asignado a"
          />
          <select 
            name="priority"
            value={taskData.priority}
            onChange={handleChange}
            required
          >
            <option value='Baja'>Baja</option>
            <option value='Media'>Media</option>
            <option value='Alta'>Alta</option>
          </select>
          <select
            name="status"
            value={taskData.status}
            onChange={handleChange}
            required
          >
            <option value='Backlog'>Backlog</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Blocked">Blocked</option>
            <option value="Done">Done</option>
          </select>
          <button type="submit">Actualizar</button>
        </form>
      </div>
    </div>
  );
}

export default EditTaskModal;