import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const storedTheme = JSON.parse(localStorage.getItem('darkMode')) || false;
    setTasks(storedTasks);
    setDarkMode(storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.classList.toggle('dark', darkMode); // 🔥 THIS LINE
  }, [tasks, darkMode]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <TaskInput onAdd={addTask} />
      <h2>Tasks</h2>
      <TaskList tasks={activeTasks} onToggle={toggleTask} onDelete={deleteTask} />
      <h2>Completed</h2>
      <TaskList tasks={completedTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;

