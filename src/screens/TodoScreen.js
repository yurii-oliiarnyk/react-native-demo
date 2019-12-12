import React, { useState, useContext } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { THEME } from '../theme';
import AppCard from '../components/ui/AppCard';
import EditModal from '../components/EditModal';
import AppTextBold from '../components/ui/AppTextBold';
import AppButton from '../components/ui/AppButton';
import TodoContext from '../context/todo/todoContext';
import ScreenContext from '../context/screen/screenContext';

const TodoScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { todos, removeTodo, updateTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);
  const todo = todos.find(todo => todo.id === todoId);

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
          <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        </View>
        <View style={styles.cardCol}>
          <AppButton
            color={THEME.MAIN_COLOR}
            onPress={() => setModalVisible(true)}
          >
            <FontAwesome name="edit" size={20} />
          </AppButton>
        </View>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton
            color={THEME.GREY_COLOR}
            onPress={() => changeScreen(null)}
          >
            <AntDesign name="back" size={20} color="#fff" />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.DANGER_COLOR}
            onPress={() => removeTodo(todo.id)}
          >
            <FontAwesome name="remove" size={20} color="#fff" />
          </AppButton>
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
    width: Dimensions.get('window').width > 400 ? 150 : 100
  },
  title: {
    fontSize: 20
  }
});

export default TodoScreen;
