import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from './TabNavigator';
import {SCREEN} from './Screen';
import {FilterScreen} from '../screens';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = props => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={SCREEN.TAB} component={TabNavigator} />
      <Drawer.Screen name={SCREEN.FILTER} component={FilterScreen} />
    </Drawer.Navigator>
  );
};
