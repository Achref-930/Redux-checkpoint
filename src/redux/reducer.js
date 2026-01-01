import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, DELETE_TASK, SET_FILTER } from './actions';

const initialState = {
  tasks: [
    { id: 1, description: "Learn Redux", isDone: false },
    { id: 2, description: "Build a ToDo App", isDone: false }
  ],
  filter: 'ALL', // 'ALL', 'DONE', 'NOT_DONE'
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;

