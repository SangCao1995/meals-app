import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREEN} from './Screen';
import {CategoriesScreen, FavoritesScreen} from '../screens';
import {Colors} from '../themes';
import Icon from '../images/icons';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused}) => {
    let focusedIcon = focused ? Colors.accent : 'gray';

    if (route.name === SCREEN.CATEGORIES) {
      return (
        <Icon.Ionicons name={'ios-restaurant'} size={24} color={focusedIcon} />
      );
    } else {
      return <Icon.Ionicons name={'ios-star'} size={24} color={focusedIcon} />;
    }
  },
});

const tabBarOptions = {
  activeTintColor: Colors.accent,
};

export const TabNavigator = props => {
  return (
    <Tab.Navigator
      {...props}
      initialRouteName={SCREEN.CATEGORIES}
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}>
      <Tab.Screen
        name={SCREEN.CATEGORIES}
        component={CategoriesScreen}
        options={{title: 'Meals'}}
      />
      <Tab.Screen
        name={SCREEN.FAVORITES}
        component={FavoritesScreen}
        options={{title: 'Favorites'}}
      />
    </Tab.Navigator>
  );
};
