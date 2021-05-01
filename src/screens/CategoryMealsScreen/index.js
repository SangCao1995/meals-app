import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Header, MealList} from '../../components';
import {useSelector} from 'react-redux';

export const CategoryMealsScreen = props => {
  const categoryMeal = props.route.params.categoryMeal;

  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryMeal.id) >= 0,
  );

  return (
    <View style={styles.container}>
      <Header
        title={categoryMeal.title}
        onBackClick={() => props.navigation.goBack()}
      />
      {displayMeals.length === 0 ? (
        <View style={styles.content}>
          <Text>No meals found, maybe check your filters?</Text>
        </View>
      ) : (
        <MealList data={displayMeals} navigation={props.navigation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
