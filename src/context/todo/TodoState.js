import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  FETCH_TODOS_LOADING,
  FETCH_TODOS_LOADED,
  FETCH_TODOS_ERROR
} from '../types';
import ScreenContext from '../screen/screenContext';
import { Http } from '../../http';

const TodoState = props => {
  const { children } = props;
  const initState = {
    todos: [],
    loading: false,
    error: null
  };
  const [state, dispatch] = useReducer(todoReducer, initState);
  const { changeScreen } = useContext(ScreenContext);

  const addTodo = async title => {
    const data = await Http.post(
      'https://react-native-demo-5fe90.firebaseio.com/todos.json'
    );
    const id = data.name;

    dispatch({
      type: ADD_TODO,
      payload: {
        title,
        id
      }
    });
  };

  const removeTodo = id => {
    const todo = state.todos.find(todo => todo.id === id);

    Alert.alert(
      'Видалення',
      `Ви впевнені, що хочете видалити "${todo.title}"?`,
      [
        { text: 'Відмінити', style: 'cancel' },
        {
          text: 'Видалити',
          onPress: async () => {
            await Http.delete(
              `https://react-native-demo-5fe90.firebaseio.com/todos/${id}.json`
            );
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

  const updateTodo = async (id, title) => {
    await Http.patch(
      `https://react-native-demo-5fe90.firebaseio.com/todos/${id}.json`,
      { title }
    );

    dispatch({
      type: UPDATE_TODO,
      payload: {
        id,
        title
      }
    });
  };

  const fetchTodos = async () => {
    dispatch({ type: FETCH_TODOS_LOADING });

    try {
      const response = await Http.get(
        'https://react-native-demo-5fe90.firebaseio.com/todos.json'
      );

      const todos = Object.keys(response).map(key => ({
        ...response[key],
        id: key
      }));

      dispatch({ type: FETCH_TODOS_LOADED, payload: todos });
    } catch (e) {
      dispatch({ type: FETCH_TODOS_ERROR, payload: 'Шось пішло не так...' });
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
