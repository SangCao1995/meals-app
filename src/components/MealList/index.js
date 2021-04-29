import React from 'react';
import {FlatList} from 'react-native';
import {MealItem} from '../../screens/CategoryMealsScreen/components';
import {SCREEN} from '../../routes/Screen';

export const MealList = ({data, navigation}) => {
  return (
    <FlatList
      contentContainerStyle={{padding: 10}}
      keyExtractor={(item, index) => item.id}
      data={data}
      renderItem={({item}) => (
        <MealItem
          data={item}
          onPress={() =>
            navigation.navigate(SCREEN.MEAL_DETAIL, {mealDetail: item})
          }
        />
      )}
    />
  );
};
