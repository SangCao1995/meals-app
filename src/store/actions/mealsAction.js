import {mealsType} from './actionTypes';

export const mealsAction = {
  toggleFavoriteMeal,
  setFilters,
};

function toggleFavoriteMeal(data) {
  return {
    type: mealsType.TOGGLE_FAVORITE_MEAL,
    data,
  };
}

function setFilters(data) {
  return {
    type: mealsType.SET_FILTERS,
    data,
  };
}
