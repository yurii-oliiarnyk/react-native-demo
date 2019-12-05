import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import Navbar from './src/components/Navbar';
import TodoScreen from './src/screens/TodoScreen';

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: '1',
      title: 'Вивчити React-native'
    },
    {
      id: '2',
      title: 'Написати пет-проект'
    }
  ]);
  const [todoId, setTodoId] = useState(null);

  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      title
    };

    setTodos(prev => [newTodo, ...prev]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.app}>
      <Navbar title="Todo App" />
      <View style={styles.container}>
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
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {},
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
