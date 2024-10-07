import React from 'react';
import Task from '../Task/index.jsx';

function Column({ title, status, tasks, onEditTask }) {
  return (
    <div className="column" data-status={status}>
      <h2>{title}</h2>
      <div className="task-container">
        {tasks.map(task => (
          <Task key={task.id} task={task} onEditTask={onEditTask} />
        ))}
      </div>
    </div>
  );
}

export default Column;
