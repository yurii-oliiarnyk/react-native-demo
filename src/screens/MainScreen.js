import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

const MainScreen = props => {
  const { todos, removeTodo, addTodo, openTodo } = props;

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      <TodoList todos={todos} onRemove={removeTodo} onOpen={openTodo} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
