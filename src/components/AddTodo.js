import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Alert } from 'react-native';
import { THEME } from '../theme';

const AddTodo = props => {
  const { onSubmit } = props;

  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
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
      <Button title="Добавити" onPress={() => pressHandler()} color={THEME.MAIN_COLOR} />
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
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR
  },
  button: {}
});

export default AddTodo;
