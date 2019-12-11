import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

const MainScreen = props => {
  const { todos, removeTodo, addTodo, openTodo } = props;
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
      <AddTodo onSubmit={addTodo} />
      <View style={{ maxWidth }}>
        <TodoList todos={todos} onRemove={removeTodo} onOpen={openTodo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
