import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  meals: [],
  loading: false,
  error: '',
};

export const fetchMeal = createAsyncThunk('meal/getMeal', async () => axios
  .get('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then((res) => res.data.categories));

export const mealSlice = createSlice({
  name: 'meal',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMeal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMeal.fulfilled, (state, action) => {
      state.loading = false;
      state.meals = action.payload;
      state.error = '';
    });
    builder.addCase(fetchMeal.rejected, (state, action) => {
      state.loading = false;
      state.meals = [];
      state.error = action.error.message;
    });
  },
});

export default mealSlice.reducer;
