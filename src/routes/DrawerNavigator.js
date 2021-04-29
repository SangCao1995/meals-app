import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from './TabNavigator';
import {SCREEN} from './Screen';
import {FiltersScreen} from '../screens';
import {Colors} from '../themes';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = props => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.accent,
        labelStyle: {fontFamily: 'OpenSans-Bold'},
      }}>
      <Drawer.Screen
        name={SCREEN.TAB}
        component={TabNavigator}
        options={{title: 'Meals'}}
      />
      <Drawer.Screen
        name={SCREEN.FILTERS}
        component={FiltersScreen}
        options={{title: 'Filters'}}
      />
    </Drawer.Navigator>
  );
};
