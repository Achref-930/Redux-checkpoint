// Action Types
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_FILTER = 'SET_FILTER';

// Action Creators
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    payload: id,
  };
};

export const editTask = (id, description) => {
  return {
    type: EDIT_TASK,
    payload: { id, description },
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

