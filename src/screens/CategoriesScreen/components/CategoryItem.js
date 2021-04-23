import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const CategoryItem = ({data, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{data.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
