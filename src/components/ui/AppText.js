import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AppText = props => {
  const { children, style } = props;

  return <Text style={{ ...styles.default, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular'
  }
});

export default AppText;
