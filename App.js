import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MainScreen from './src/screens/MainScreen';
import Navbar from './src/components/Navbar';
import TodoScreen from './src/screens/TodoScreen';

const loadApplication = async () => {
  await Font.loadAsync({
    'roboto-regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./src/assets/fonts/Roboto-Bold.ttf')
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(null);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

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
