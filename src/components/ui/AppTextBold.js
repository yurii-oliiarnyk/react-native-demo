import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AppTextBold = props => {
  const { children, style } = props;

  return <Text style={{ ...styles.default, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-bold'
  }
});

export default AppTextBold;
