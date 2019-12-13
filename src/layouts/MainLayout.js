import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navbar from '../components/Navbar';

const MainLayout = props => {
  const { children } = props;

  return (
    <View style={styles.app}>
      <Navbar title="Todo App" />
      <View style={styles.container}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    flex: 1
  }
});

export default MainLayout;
