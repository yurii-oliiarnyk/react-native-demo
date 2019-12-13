import React, { useState, useEffect, useContext, useCallback } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import TodoContext from '../context/todo/todoContext';
import AppLoader from '../components/ui/AppLoader';
import AppText from '../components/ui/AppText';
import { THEME } from '../theme';
import AppButton from '../components/ui/AppButton';

const MainScreen = () => {
  const todosContext = useContext(TodoContext);
  const { todos, fetchTodos, loading, error } = todosContext;
  const [maxWidth, setMaxWidth] = useState(Dimensions.get('window').width);

  const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

  useEffect(() => {
    loadTodos();
  }, []);

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

  if (loading) {
    return <AppLoader />;
  }

  if (error) {
    return (
      <View style={styles.center}>
        <AppText style={styles.error}>{error}</AppText>
        <AppButton onPress={loadTodos}>Повторити</AppButton>
      </View>
    );
  }

  return (
    <View>
      <AddTodo />
      <View style={{ maxWidth }}>
        <TodoList todos={todos} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center'
  },
  error: {
    fontSize: 18,
    color: THEME.MAIN_COLOR
  }
});

export default MainScreen;
