import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { THEME } from '../theme';
import AppCard from '../components/ui/AppCard';
import EditModal from '../components/EditModal';

const TodoScreen = props => {
  const { goBack, todo, removeTodo, updateTodo } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const saveHandler = title => {
    updateTodo(todo.id, title);
    setModalVisible(false);
  };

  return (
    <View>
      <EditModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onSave={saveHandler}
        value={todo.title}
      />

      <AppCard style={styles.card}>
        <View style={styles.cardCol}>
          <Text style={styles.title}>{todo.title}</Text>
        </View>
        <View style={styles.cardCol}>
          <Button
            title="Редагувати"
            color={THEME.MAIN_COLOR}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" color={THEME.GREY_COLOR} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={() => removeTodo(todo.id)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    marginBottom: 20,
    padding: 10
  },
  cardCol: {
    padding: 5
  },
  button: {
    width: '45%'
  },
  title: {
    fontSize: 20
  }
});

export default TodoScreen;
