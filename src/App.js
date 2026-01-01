import React from 'react';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Redux ToDo App</h1>
      <Addtask />
      <ListTask />
    </div>
  );
}

export default App;
