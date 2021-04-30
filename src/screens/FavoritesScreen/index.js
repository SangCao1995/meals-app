import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, MealList} from '../../components';
import {useSelector} from 'react-redux';

export const FavoritesScreen = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  console.log(favoriteMeals);
  return (
    <View style={{flex: 1}}>
      <Header
        title={'Your favorites'}
        onMenuCLick={() => props.navigation.toggleDrawer()}
      />
      <MealList data={favoriteMeals} navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});
