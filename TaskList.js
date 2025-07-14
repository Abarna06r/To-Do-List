import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks here ✨</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
