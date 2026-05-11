import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:5000';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch(`${API_URL}/api/tasks`);
    const data = await response.json();
    setTasks(data);
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    const response = await fetch(`${API_URL}/api/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTask }),
    });
    const task = await response.json();
    setTasks([task, ...tasks]);
    setNewTask('');
  };

  const updateTask = async (id, updatedTask) => {
    const response = await fetch(`${API_URL}/api/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });
    const task = await response.json();
    setTasks(tasks.map(t => t.id === id ? task : t));
    setEditingTask(null);
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/api/tasks/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="add-task">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {editingTask?.id === task.id ? (
              <input
                value={editingTask.title}
                onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                onKeyPress={(e) => e.key === 'Enter' && updateTask(task.id, editingTask)}
              />
            ) : (
              <span onClick={() => updateTask(task.id, { ...task, completed: !task.completed })}>
                {task.title}
              </span>
            )}
            <div className="task-buttons">
              <button onClick={() => setEditingTask(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;