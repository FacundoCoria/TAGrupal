import React, { useContext, useState } from 'react';
import { TaskContext } from '../../Contexts/TaskContext.jsx';
import Column from '../Modal/index.jsx';
import AddTaskModal from '../AddTask/index.jsx';
import EditTaskModal from '../EditTask/index.jsx'; 

function Board() {
  const { tasks, setCurrentTask } = useContext(TaskContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para controlar el modal de edición

  const columns = [
    { status: 'Backlog', title: 'Backlog' },
    { status: 'To Do', title: 'To Do' },
    { status: 'In Progress', title: 'In Progress' },
    { status: 'Blocked', title: 'Blocked' },
    { status: 'Done', title: 'Done' }
  ];

  const openAddModal = () => {
    setCurrentTask(null);
    document.getElementById('Agregar').style.display = 'block';
  };

  const openEditModal = (task) => {
    setCurrentTask(task); // Establece la tarea actual que se va a editar
    setIsEditModalOpen(true); // Abre el modal
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false); // Cierra el modal
  };

  return (
    <div className="board">
      <button className="add-task-button" onClick={openAddModal}>Agregar Tarea</button>
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
      <AddTaskModal />
      <EditTaskModal isOpen={isEditModalOpen} onClose={closeEditModal} />
    </div>
  );
}

export default Board;
