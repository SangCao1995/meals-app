import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {SCREEN} from '../../routes/Screen';

export const CategoryMeals = props => {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
