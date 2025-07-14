import React, { useState } from 'react';

const TaskInput = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim() === '') {
      alert("Please enter a task.");
      return;
    }
    onAdd(task);
    setTask('');
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default TaskInput;
