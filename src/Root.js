import React, { useContext } from 'react';
import MainLayout from './layouts/MainLayout';
import MainScreen from './screens/MainScreen';
import TodoScreen from './screens/TodoScreen';
import ScreenContext from './context/screen/screenContext';

const Root = () => {
  const screenContext = useContext(ScreenContext);
  const { todoId } = screenContext;

  return (
    <MainLayout>
      {!todoId && <MainScreen />}
      {todoId && <TodoScreen />}
    </MainLayout>
  );
};

export default Root;
