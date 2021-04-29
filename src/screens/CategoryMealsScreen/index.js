import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Header, MealList} from '../../components';
import {mealsData} from '../../constants/common';

export const CategoryMealsScreen = props => {
  const categoryMeal = props.route.params.categoryMeal;

  const displayMeals = mealsData.filter(
    meal => meal.categoryIds.indexOf(categoryMeal.id) >= 0,
  );
  return (
    <View style={styles.container}>
      <Header
        title={categoryMeal.title}
        onBackClick={() => props.navigation.goBack()}
      />
      <MealList data={displayMeals} navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
