import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../components/ui/AppText';
import ScreenContext from '../context/screen/screenContext';
import TodoContext from '../context/todo/todoContext';

const TodoItem = props => {
  const { title, id } = props;
  const { changeScreen } = useContext(ScreenContext);
  const { removeTodo } = useContext(TodoContext);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => changeScreen(id)}
      onLongPress={() => removeTodo(id)}
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
