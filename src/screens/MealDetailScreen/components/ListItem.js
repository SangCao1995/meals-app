import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderWidth: 1,
    borderRightColor: '#ccc',
  },
});
