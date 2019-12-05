import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const TodoScreen = props => {
  const { goBack, todo } = props;

  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title="Назад" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TodoScreen;
