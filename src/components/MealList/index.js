import React from 'react';
import {FlatList} from 'react-native';
import {MealItem} from '../';
import {SCREEN} from '../../routes/Screen';

export const MealList = ({data, navigation}) => {
  return (
    <FlatList
      contentContainerStyle={{padding: 10}}
      keyExtractor={(item, index) => item.id}
      data={data}
      renderItem={({item}) => (
        <MealItem
          key={item.id}
          data={item}
          onPress={() =>
            navigation.navigate(SCREEN.MEAL_DETAIL, {mealDetail: item})
          }
        />
      )}
    />
  );
};
