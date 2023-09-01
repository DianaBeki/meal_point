import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: null,
};

const mealCategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = mealCategorySlice.actions;

export default mealCategorySlice.reducer;
