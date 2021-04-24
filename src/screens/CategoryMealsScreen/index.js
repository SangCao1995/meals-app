import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Header} from '../../components';
import {SCREEN} from '../../routes/Screen';

export const CategoryMeals = props => {
  const categoryMeal = props.route.params.categoryMeal;

  return (
    <View style={styles.container}>
      <Header
        backButton
        title={categoryMeal.title}
        onPress={() => props.navigation.goBack()}
      />
      <Text>CategoriesScreen</Text>
      <Text>{categoryMeal.title}</Text>
      <Button
        title={'Go to meal detail'}
        onPress={() => {
          props.navigation.navigate(SCREEN.MEAL_DETAIL);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
