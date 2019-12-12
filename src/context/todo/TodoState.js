import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import ScreenContext from '../screen/screenContext';

const TodoState = props => {
  const { children } = props;
  const initState = {
    todos: [{ id: '1', title: 'Вивчити React Native' }]
  };
  const [state, dispatch] = useReducer(todoReducer, initState);
  const { changeScreen } = useContext(ScreenContext);

  const addTodo = title =>
    dispatch({
      type: ADD_TODO,
      payload: title
    });

  const removeTodo = id => {
    const todo = state.todos.find(todo => todo.id === id);

    Alert.alert(
      'Видалення',
      `Ви впевнені, що хочете видалити "${todo.title}"?`,
      [
        { text: 'Відмінити', style: 'cancel' },
        {
          text: 'Видалити',
          onPress: () => {
            changeScreen(null);

            dispatch({
              type: REMOVE_TODO,
              payload: id
            });
          }
        }
      ],
      { cancelable: true }
    );
  };

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
