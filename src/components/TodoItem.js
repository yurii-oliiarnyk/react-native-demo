import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../components/ui/AppText';

const TodoItem = props => {
  const { title, id, onRemove, onOpen } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onOpen(id)}
      onLongPress={() => onRemove(id)}
    >
      <View style={styles.todo}>
        <AppText>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 10
  }
});

export default TodoItem;
