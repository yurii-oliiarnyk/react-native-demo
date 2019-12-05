import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Alert } from 'react-native';

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
      <Button title="Добавити" onPress={() => pressHandler()} />
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
    borderBottomColor: '#3949ab'
  },
  button: {}
});

export default AddTodo;
