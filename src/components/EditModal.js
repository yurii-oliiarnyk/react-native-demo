import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Modal, Alert } from 'react-native';
import AppButton from '../components/ui/AppButton';
import { THEME } from '../theme';

const EditModal = props => {
  const { visible, onCancel, value, onSave } = props;
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Помилка',
        `Мінімальна кількість 3 символів. Зараз ${
          title.trim().length
        } символів.`
      );
    } else {
      onCancel();
      onSave(title);
    }
  };

  const cancelHandler = () => {
    setTitle(value);
    onCancel();
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={false}
      presentationStyle="formSheet"
    >
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Введіть нову назву"
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <AppButton onPress={cancelHandler} color={THEME.DANGER_COLOR}>
              Відмінити
            </AppButton>
          </View>
          <View style={styles.button}>
            <AppButton onPress={() => saveHandler()}>Зберегти</AppButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 30
  },
  buttons: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '35%'
  },
  input: {
    width: '100%',
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2
  }
});

export default EditModal;
