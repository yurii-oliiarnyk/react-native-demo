import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';
import MainLayout from './layouts/MainLayout';

import MainScreen from './screens/MainScreen';
import TodoScreen from './screens/TodoScreen';
import TodoContext from './context/todo/todoContext';

const Root = () => {
  const todosContext = useContext(TodoContext);
  const { todos, addTodo, removeTodo, updateTodo } = todosContext;

  const [todoId, setTodoId] = useState(null);

  // const addTodo = title => {
  //   const newTodo = {
  //     id: Date.now().toString(),
  //     title
  //   };

  //   setTodos(prev => [newTodo, ...prev]);
  // };

  // const updateTodo = (id, title) => {
  //   setTodos(prev =>
  //     prev.map(todo => {
  //       if (todo.id === id) {
  //         todo.title = title;
  //       }

  //       return todo;
  //     })
  //   );
  // };

  // const removeTodo = id => {
  //   const todo = todos.find(todo => todo.id === id);

  //   Alert.alert(
  //     'Видалення',
  //     `Ви впевнені, що хочете видалити "${todo.title}"?`,
  //     [
  //       { text: 'Відмінити', style: 'cancel' },
  //       {
  //         text: 'Видалити',
  //         onPress: () => {
  //           setTodoId(null);
  //           setTodos(prev => prev.filter(todo => todo.id !== id));
  //         }
  //       }
  //     ],
  //     { cancelable: true }
  //   );
  // };

  return (
    <MainLayout>
      {!todoId && (
        <MainScreen
          todos={todos}
          removeTodo={removeTodo}
          addTodo={addTodo}
          openTodo={setTodoId}
        />
      )}
      {todoId && (
        <TodoScreen
          goBack={() => setTodoId(null)}
          todo={todos.find(todo => todo.id === todoId)}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      )}
    </MainLayout>
  );
};

export default Root;
