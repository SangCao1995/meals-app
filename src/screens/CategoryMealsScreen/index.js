import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, MealList} from '../../components';
import {mealsData} from '../../constants/common';
import {useSelector} from 'react-redux';

export const CategoryMealsScreen = props => {
  const categoryMeal = props.route.params.categoryMeal;

  const displayMeals = mealsData.filter(
    meal => meal.categoryIds.indexOf(categoryMeal.id) >= 0,
  );

  const filteredMeals = useSelector(state => state.meals.filteredMeals);
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
