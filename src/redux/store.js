import { configureStore } from '@reduxjs/toolkit';
import mealReducer from './mealSlice';
import mealCategoryReducer from './mealCategorySlice';

const store = configureStore({
  reducer: {
    meal: mealReducer,
    category: mealCategoryReducer,
  },
});

export default store;
