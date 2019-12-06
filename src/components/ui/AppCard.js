import React from 'react';
import { StyleSheet, View } from 'react-native';

const AppCard = props => {
  const { children, style } = props;

  return <View style={{ ...styles.default, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  default: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: 2,
      height: 10
    },
    elevation: 20,
    backgroundColor: '#fff',
    borderRadius: 10
  }
});

export default AppCard;
