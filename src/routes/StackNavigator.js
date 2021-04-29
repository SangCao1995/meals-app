import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN} from './Screen';
import {CategoryMealsScreen, MealDetailScreen} from '../screens';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createStackNavigator();
export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN.DRAWER} component={DrawerNavigator} />
      <Stack.Screen
        name={SCREEN.CATEGORY_MEALS}
        component={CategoryMealsScreen}
      />
      <Stack.Screen name={SCREEN.MEAL_DETAIL} component={MealDetailScreen} />
    </Stack.Navigator>
  );
};
