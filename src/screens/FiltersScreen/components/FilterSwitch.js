import React from 'react';
import {View, Text, Switch, Platform, StyleSheet} from 'react-native';
import {Colors} from '../../../themes';

export const FilterSwitch = ({label, state, onValueChange}) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        value={state}
        onValueChange={onValueChange}
        thumbColor={Platform.OS === 'android' ? Colors.primary : 'white'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});
