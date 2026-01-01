import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../redux/actions';
import { AnimatePresence, motion } from 'framer-motion';

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'DONE') return task.isDone;
    if (filter === 'NOT_DONE') return !task.isDone;
    return true;
  });

  return (
    <div className="list-task-container">
      <div className="filter-container">
        <div className="filter-group">
          <button 
            className={`filter-btn ${filter === 'ALL' ? 'active' : ''}`} 
            onClick={() => dispatch(setFilter('ALL'))}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'DONE' ? 'active' : ''}`} 
            onClick={() => dispatch(setFilter('DONE'))}
          >
            Done
          </button>
          <button 
            className={`filter-btn ${filter === 'NOT_DONE' ? 'active' : ''}`} 
            onClick={() => dispatch(setFilter('NOT_DONE'))}
          >
            Active
          </button>
        </div>
      </div>

      <div className="tasks-list">
        <AnimatePresence>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Task task={task} />
              </motion.div>
            ))
          ) : (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="empty-state"
            >
              No tasks found.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ListTask;

