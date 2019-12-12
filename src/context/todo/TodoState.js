import React, { useReducer } from 'react';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';

const TodoState = props => {
  const { children } = props;
  const initState = {
    todos: [{ id: '1', title: 'Вивчити React Native' }]
  };
  const [state, dispatch] = useReducer(todoReducer, initState);

  const addTodo = title =>
    dispatch({
      type: ADD_TODO,
      payload: title
    });

  const removeTodo = id =>
    dispatch({
      type: REMOVE_TODO,
      payload: id
    });

  const updateTodo = (id, title) =>
    dispatch({
      type: UPDATE_TODO,
      payload: {
        id,
        title
      }
    });

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTodo, removeTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
