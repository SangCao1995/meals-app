import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN} from './Screen';
import {CategoriesScreen, CategoryMeals, MealDetailScreen} from '../screens';

const Stack = createStackNavigator();
export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN.CATEGORIES} component={CategoriesScreen} />
      <Stack.Screen name={SCREEN.CATEGORY_MEALS} component={CategoryMeals} />
      <Stack.Screen name={SCREEN.MEAL_DETAIL} component={MealDetailScreen} />
    </Stack.Navigator>
  );
};
