import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { FiPlus } from 'react-icons/fi';

const Addtask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      const newTask = {
        id: Date.now(),
        description: description,
        isDone: false,
      };
      dispatch(addTask(newTask));
      setDescription('');
    }
  };

  return (
    <div className="add-task-container">
      <form className="add-task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="add-task-input"
          placeholder="What needs to be done?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="add-btn">
          <FiPlus size={20} />
          Add
        </button>
      </form>
    </div>
  );
};

export default Addtask;

