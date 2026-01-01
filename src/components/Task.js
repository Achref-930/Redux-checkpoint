import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../redux/actions';
import { FiEdit2, FiCheck, FiTrash2 } from 'react-icons/fi';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing && newDescription.trim()) {
      dispatch(editTask(task.id, newDescription));
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className={`task-item ${task.isDone ? 'done' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.isDone}
          onChange={handleToggle}
        />
        
        {isEditing ? (
          <input
            type="text"
            className="edit-input"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            autoFocus
          />
        ) : (
          <span className={`task-text ${task.isDone ? 'completed' : ''}`}>
            {task.description}
          </span>
        )}
      </div>

      <div className="task-actions">
        <button 
          className={`icon-btn ${isEditing ? 'save' : 'edit'}`} 
          onClick={handleEdit}
          title={isEditing ? "Save" : "Edit"}
        >
          {isEditing ? <FiCheck size={18} /> : <FiEdit2 size={18} />}
        </button>
        
        <button 
          className="icon-btn delete"
          title="Delete"
          onClick={handleDelete} 
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default Task;


