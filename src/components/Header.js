import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Colors} from '../themes';

export const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
  },
  title: {
    fontWeight: 'bold',
    color: Platform.OS === 'android' ? 'white' : Colors.primary,
    fontSize: 20,
  },
});
