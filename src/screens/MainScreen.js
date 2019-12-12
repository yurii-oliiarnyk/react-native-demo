import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import TodoContext from '../context/todo/todoContext';

const MainScreen = () => {
  const todosContext = useContext(TodoContext);
  const { todos } = todosContext;
  const [maxWidth, setMaxWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width;
      setMaxWidth(width);
    };

    Dimensions.addEventListener('change', update);

    return () => {
      Dimensions.removeEventListener('change', update);
    };
  });

  return (
    <View>
      <AddTodo />
      <View style={{ maxWidth }}>
        <TodoList todos={todos} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
