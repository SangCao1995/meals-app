import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Header, MealList} from '../../components';
import {useSelector} from 'react-redux';

export const FavoritesScreen = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  return (
    <View style={{flex: 1}}>
      <Header
        title={'Your favorites'}
        onMenuCLick={() => props.navigation.toggleDrawer()}
      />
      {favoriteMeals.length === 0 ? (
        <View style={styles.content}>
          <Text>No favorite meals found. Start adding one!</Text>
        </View>
      ) : (
        <MealList data={favoriteMeals} navigation={props.navigation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
