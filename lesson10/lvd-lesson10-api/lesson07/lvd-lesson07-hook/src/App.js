import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import LvdListTask from './components/LvdListTask'; // Import the task list component
import LvdTaskAddOrEdit from './components/LVdTaskAddOrEdit';

function App() {
  // Mock data
  const lvd_listTasks = [
    {
      lvd_taskId: 2201234,
      lvd_taskName: "Nguyễn ",
      lvd_level: "Small",
    },
    {
      lvd_taskId: 1,
      lvd_taskName: "Học lập trình frontend",
      lvd_level: "Small",
    },
    {
      pnt_taskId: 2,
      pnt_taskName: "Học lập trình reactjs",
      pnt_level: "Medium",
    },
    {
      pnt_taskId: 3,
      pnt_taskName: "Lập trình với Frontend - Reactjs",
      pnt_level: "High",
    },
    {
      pnt_taskId: 4,
      pnt_taskName: "Lập trình Fullstack (PHP, Java, NetCore)",
      pnt_level: "Small",
    },
    // Rest of your tasks
  ];

  let data = JSON.parse(localStorage.getItem("LvdK22CNT1DataTasks"));
  if (data === null || data.length === 0) {
    data = lvd_listTasks;
    localStorage.setItem("LvdK22CNT1DataTasks", JSON.stringify(data));
  }

  // State for storing tasks
  const [lvdListTasks, setLvdListTasks] = useState(data);

  useEffect(() => {
    localStorage.setItem("LvdK22CNT1DataTasks", JSON.stringify(lvdListTasks));
  }, [lvdListTasks]);

  // Handle task deletion
  const handleDelete = (taskId) => {
    setLvdListTasks(prev => prev.filter(task => task.lvd_taskId !== taskId));
  };

  // Handle task editing
  const handleEdit = (task) => {
    setLvdTask(task);
    setLvdAddOrEdit(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Render the task list component */}
        <LvdListTask tasks={lvdListTasks} onDelete={handleDelete} onEdit={handleEdit} />
      </header>
    </div>
  );
}

export default App;
