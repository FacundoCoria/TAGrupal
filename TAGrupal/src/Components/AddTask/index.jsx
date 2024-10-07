import React, { useContext, useState } from 'react';
import { TaskContext } from '../../Contexts/TaskContext.jsx';

const AddTaskModal = () => {
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');
    const [priority, setPriority] = useState('low');
    const [status, setStatus] = useState('To Do'); // Cambia el valor por defecto a 'To Do'
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, description, assigned, priority, status, deadline });
        // Cerrar modal aquí, si es necesario
        document.getElementById('Agregar').style.display = 'none'; // Asegúrate de cerrar el modal después de agregar
    };

    return (
        <div id="Agregar" style={{ display: 'none' }}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" placeholder="Asignado a" value={assigned} onChange={(e) => setAssigned(e.target.value)} />
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="Baja">Baja</option>
                    <option value="Media">Media</option>
                    <option value="Alta">Alta</option>
                </select>
                <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option value="Backlog">Backlog</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Blocked">Blocked</option>
                    <option value="Done">Done</option>
                </select>
                <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                <button type="submit">Agregar Tarea</button>
                <button type="button" onClick={() => document.getElementById('Agregar').style.display = 'none'}>Cerrar</button>
            </form>
        </div>
    );
};

export default AddTaskModal;
