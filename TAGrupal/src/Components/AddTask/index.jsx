import React, { useContext, useState } from 'react';
import { TaskContext } from '../../Contexts/TaskContext.jsx';
import '../../AddTaskModal.css';

const AddTaskModal = ({ isModalOpen, setIsModalOpen }) => {  // Recibe las props para controlar la apertura del modal
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');
    const [priority, setPriority] = useState('Baja');
    const [status, setStatus] = useState('To Do');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, description, assigned, priority, status, deadline });
        // Limpiar los campos después de agregar la tarea
        setTitle('');
        setDescription('');
        setAssigned('');
        setPriority('Baja');
        setStatus('To Do');
        setDeadline('');
        setIsModalOpen(false); // Cerrar el modal después de agregar la tarea
    };
    

    return (
        <>
            {isModalOpen && ( /* Condicional que muestra la ventana si isModalOpen es true */
                <div className="modal">
                    <div className="modal-content">
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
                            <button type="button" onClick={() => setIsModalOpen(false)}>Cerrar</button> {/* Botón para cerrar la ventana */}
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddTaskModal;
