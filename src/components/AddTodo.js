import React, { useState, useContext } from 'react';
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { THEME } from '../theme';
import TodoContext from '../context/todo/todoContext';

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      addTodo(value);
      setValue('');
      Keyboard.dismiss();
    } else {
      Alert.alert('Поле пусте');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Введіть назву справи..."
      />
      <AntDesign.Button onPress={() => pressHandler()} name="pluscircleo">
        Добавити
      </AntDesign.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '60%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR
  }
});

export default AddTodo;
