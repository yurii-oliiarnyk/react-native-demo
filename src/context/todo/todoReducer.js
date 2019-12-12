import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';

const handlers = {
  [ADD_TODO]: (state, payload) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: Date.now().toString(),
        title: payload
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
