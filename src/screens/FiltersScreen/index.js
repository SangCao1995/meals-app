import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from '../../components';

export const FiltersScreen = props => {
  return (
    <View style={{flex: 1}}>
      <Header
        title={'Filters'}
        onMenuCLick={() => props.navigation.toggleDrawer()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
