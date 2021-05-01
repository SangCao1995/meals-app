import React, {useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Header} from '../../components';
import {ListItem} from './components';
import {useDispatch} from 'react-redux';
import {mealsAction} from '../../store/actions';
import {useSelector} from 'react-redux';

export const MealDetailScreen = props => {
  const mealDetail = props.route.params.mealDetail;
  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(
      favoriteMeal => favoriteMeal.id === mealDetail.id,
    ),
  );
  const dispatch = useDispatch();
  const toggleFavoriteHandle = useCallback(() => {
    dispatch(mealsAction.toggleFavoriteMeal(mealDetail));
  }, [dispatch, mealDetail]);

  return (
    <View style={{flex: 1}}>
      <Header
        isHeaderRight
        title={mealDetail.title}
        onBackClick={() => props.navigation.goBack()}
        onfavoriteClick={() => toggleFavoriteHandle()}
        isFavoriteMeal={currentMealIsFavorite}
      />
      <ScrollView>
        <Image
          source={{uri: mealDetail.imageUrl}}
          style={{width: '100%', height: 200}}
        />
        <View style={styles.details}>
          <Text>{mealDetail.duration}m</Text>
          <Text>{mealDetail.complexity.toUpperCase()}</Text>
          <Text>{mealDetail.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.title}>Ingredient</Text>
        {mealDetail.ingredients.map(ingredient => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
        <Text style={styles.title}>Step</Text>
        {mealDetail.steps.map(step => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'center',
  },
});
