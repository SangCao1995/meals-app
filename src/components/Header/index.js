import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Colors} from '../../themes';
import Icon from '../../images/icons';

export const Header = ({
  title,
  onBackClick,
  onfavoriteClick,
  onMenuCLick,
  onSaveClick,
}) => {
  return (
    <View style={styles.header}>
      {onMenuCLick && (
        <Icon.Ionicons
          name={'menu'}
          size={24}
          color={Platform.OS === 'android' ? 'white' : Colors.primary}
          onPress={onMenuCLick}
        />
      )}
      {onBackClick && (
        <Icon.MaterialIcons
          name={'arrow-back-ios'}
          size={24}
          color={Platform.OS === 'android' ? 'white' : Colors.primary}
          onPress={onBackClick}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      {onfavoriteClick ? (
        <Icon.Ionicons
          name={'ios-star'}
          size={24}
          color={Platform.OS === 'android' ? 'white' : Colors.primary}
        />
      ) : (
        <View style={{width: 24}} />
      )}
      {onSaveClick ? (
        <Icon.Ionicons
          name={'ios-save'}
          size={24}
          color={Platform.OS === 'android' ? 'white' : Colors.primary}
          onPress={onSaveClick}
        />
      ) : (
        <View style={{width: 24}} />
      )}
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
    fontFamily: 'OpenSans-Bold',
    color: Platform.OS === 'android' ? 'white' : Colors.primary,
    fontSize: 20,
  },
});
