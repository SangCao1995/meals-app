import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {SCREEN} from './Screen';
import {CategoriesScreen, FavoritesScreen} from '../screens';
import {Colors} from '../themes';
import Icon from '../images/icons';

const Tab = createMaterialBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused}) => {
    let focusedIcon = focused ? 'white' : 'gray';

    if (route.name === SCREEN.CATEGORIES) {
      return (
        <Icon.Ionicons name={'ios-restaurant'} size={24} color={focusedIcon} />
      );
    } else {
      return <Icon.Ionicons name={'ios-star'} size={24} color={focusedIcon} />;
    }
  },
});

export const TabNavigator = props => {
  return (
    <Tab.Navigator
      {...props}
      initialRouteName={SCREEN.CATEGORIES}
      screenOptions={screenOptions}
      activeColor={'white'}
      shifting={true}>
      <Tab.Screen
        name={SCREEN.CATEGORIES}
        component={CategoriesScreen}
        options={{title: 'Meals', tabBarColor: Colors.primary}}
      />
      <Tab.Screen
        name={SCREEN.FAVORITES}
        component={FavoritesScreen}
        options={{title: 'Favorites', tabBarColor: Colors.accent}}
      />
    </Tab.Navigator>
  );
};
