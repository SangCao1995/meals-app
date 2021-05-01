import {mealsData} from '../../constants';
import {mealsType} from '../actions/actionTypes';

const initialState = {
  meals: mealsData,
  filteredMeals: mealsData,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case mealsType.TOGGLE_FAVORITE_MEAL:
      const existingIndex = state.favoriteMeals.findIndex(
        favoriteMeal => favoriteMeal.id === action.data.id,
      );
      if (existingIndex >= 0) {
        const updatedFavMeal = [...state.favoriteMeals];
        updatedFavMeal.splice(existingIndex, 1);
        return {...state, favoriteMeals: updatedFavMeal};
      } else {
        const favoritemeal = action.data;
        const favoriteMeals = [...state.favoriteMeals, favoritemeal];
        return {...state, favoriteMeals};
      }
    case mealsType.SET_FILTERS:
      const appliedFilters = action.data;
      const updatedFilters = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeals: updatedFilters};
  }
  return state;
};

export default mealsReducer;
