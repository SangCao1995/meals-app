import {mealsData} from '../../constants';

const initialState = {
  meals: mealsData,
  filteredMeals: mealsData,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
