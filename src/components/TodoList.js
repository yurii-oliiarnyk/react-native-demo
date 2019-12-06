import React from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = props => {
  const { todos, onRemove, onOpen } = props;

  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <TodoItem {...item} onRemove={onRemove} onOpen={onOpen} />}
      ListEmptyComponent={
        <View style={styles.emptyList}>
          <Image style={styles.image} source={require('../assets/images/no-items.png')} />
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  emptyList: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

export default TodoList;
