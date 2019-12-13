import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  FETCH_TODOS_LOADING,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_LOADED
} from '../types';

const handlers = {
  [FETCH_TODOS_LOADING]: state => ({
    ...state,
    error: null,
    loading: true
  }),
  [FETCH_TODOS_ERROR]: (state, payload) => ({
    ...state,
    loading: false,
    error: payload
  }),
  [FETCH_TODOS_LOADED]: (state, payload) => ({
    ...state,
    loading: false,
    error: null,
    todos: payload
  }),
  [ADD_TODO]: (state, { id, title }) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id,
        title
      }
    ]
  }),
  [REMOVE_TODO]: (state, payload) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== payload)
  }),
  [UPDATE_TODO]: (state, { id, title }) => ({
    ...state,
    todos: state.todos.map(todo => {
      if (todo.id === id) {
        todo.title = title;
      }

      return todo;
    })
  }),
  DEFAULT: state => state
};

const todoReducer = (state, action) => {
  const { type, payload } = action;

  const handler = handlers[type] || handlers.DEFAULT;

  return handler(state, payload);
};

export default todoReducer;
