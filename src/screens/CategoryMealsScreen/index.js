import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Header} from '../../components';
import {mealsData} from '../../constants/common';
import {MealItem} from './components';

export const CategoryMeals = props => {
  const categoryMeal = props.route.params.categoryMeal;

  const displayMeals = mealsData.filter(
    meal => meal.categoryIds.indexOf(categoryMeal.id) >= 0,
  );
  return (
    <View style={styles.container}>
      <Header
        backButton
        title={categoryMeal.title}
        onPress={() => props.navigation.goBack()}
      />
      <FlatList
        contentContainerStyle={{padding: 10}}
        keyExtractor={(item, index) => item.id}
        data={displayMeals}
        renderItem={({item}) => <MealItem data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
