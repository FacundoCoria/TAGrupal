import React, { useContext, useState } from 'react';
import { TaskContext } from '../../Contexts/TaskContext.jsx';
import Column from '../Modal/index.jsx';
import AddTaskModal from '../AddTask/index.jsx';
import EditTaskModal from '../EditTask/index.jsx'; 

function Board() {
  const { tasks, setCurrentTask } = useContext(TaskContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para controlar el modal de edición
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);   // Estado para controlar el modal de agregar

  const columns = [
    { status: 'Backlog', title: 'Backlog' },
    { status: 'To Do', title: 'To Do' },
    { status: 'In Progress', title: 'In Progress' },
    { status: 'Blocked', title: 'Blocked' },
    { status: 'Done', title: 'Done' }
  ];

  const openEditModal = (task) => {
    setCurrentTask(task); // Establece la tarea actual que se va a editar
    setIsEditModalOpen(true); // Abre el modal de edición
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false); // Cierra el modal de edición
  };

  return (
    <div className="board">
      <button className="add-task-button" onClick={() => setIsAddModalOpen(true)}>Agregar Tarea</button> {/* Abre el modal al hacer clic */}
      <div className="column-container">
        {columns.map(column => (
          <Column 
            key={column.status} 
            title={column.title} 
            status={column.status} 
            tasks={tasks.filter(task => task.status === column.status)} 
            onEditTask={openEditModal} // Pasa la función para abrir el modal de edición
          />
        ))}
      </div>
      <AddTaskModal isModalOpen={isAddModalOpen} setIsModalOpen={setIsAddModalOpen} />  {/* Modal de agregar tarea */}
      <EditTaskModal isOpen={isEditModalOpen} onClose={closeEditModal} />  {/* Modal de editar tarea */}
    </div>
  );
}

export default Board;
