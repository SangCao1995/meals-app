import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from '../../components';

export const FilterScreen = props => {
  return (
    <View style={{flex: 1}}>
      <Header
        title={'Filter'}
        onMenuCLick={() => props.navigation.toggleDrawer()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
