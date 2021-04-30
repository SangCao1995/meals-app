import {mealsType} from './actionTypes';

export const mealsAction = {
  toggleFavoriteMeal,
};

function toggleFavoriteMeal(data) {
  return {
    type: mealsType.TOGGLE_FAVORITE_MEAL,
    data,
  };
}
