import React from 'react';
import { FlatList, Text } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = props => {
  const { todos, onRemove, onOpen } = props;

  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <TodoItem {...item} onRemove={onRemove} onOpen={onOpen} />}
      ListEmptyComponent={<Text>Список порожній</Text>}
    />
  );
};

export default TodoList;
