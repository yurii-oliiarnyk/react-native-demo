import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
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
  const [todoId, setTodoId] = useState('2');

  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      title
    };

    setTodos(prev => [newTodo, ...prev]);
  };

  const updateTodo = (id, title) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.title = title;
        }

        return todo;
      })
    );
  };

  const removeTodo = id => {
    const todo = todos.find(todo => todo.id === id);

    Alert.alert(
      'Видалення',
      `Ви впевнені, що хочете видалити "${todo.title}"?`,
      [
        { text: 'Відмінити', style: 'cancel' },
        {
          text: 'Видалити',
          onPress: () => {
            setTodoId(null);
            setTodos(prev => prev.filter(todo => todo.id !== id));
          }
        }
      ],
      { cancelable: true }
    );
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
            removeTodo={removeTodo}
            updateTodo={updateTodo}
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
