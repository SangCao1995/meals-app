import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Colors} from '../themes';
import Icon from '../images/icons';

export const Header = ({title, backButton, onPress}) => {
  return (
    <View style={styles.header}>
      {backButton ? (
        <Icon.MaterialIcons
          name={'arrow-back-ios'}
          size={24}
          color={Platform.OS === 'android' ? 'white' : Colors.primary}
          onPress={onPress}
        />
      ) : (
        <View />
      )}
      <Text style={styles.title}>{title}</Text>
      {backButton ? <View style={{width: 24}} /> : <View />}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    color: Platform.OS === 'android' ? 'white' : Colors.primary,
    fontSize: 20,
  },
});
