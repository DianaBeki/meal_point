/* eslint-disable */
import mealReducer, { fetchMeal } from '../redux/mealSlice';

describe('mealSlice reducer', () => {
  it('should handle initial state', () => {
    expect(mealReducer(undefined, {})).toEqual({
      meals: [],
      loading: false,
      error: '',
    });
  });

  it('should handle fetchMeal.pending', () => {
    expect(mealReducer(undefined, fetchMeal.pending)).toEqual({
      meals: [],
      loading: true,
      error: '',
    });
  });

  it('should handle fetchMeal.fulfilled', () => {
    const action = {
      type: fetchMeal.fulfilled.type,
      payload: [{ meal: 'data' }],
    };

    expect(mealReducer(undefined, action)).toEqual({
      meals: [{ meal: 'data' }],
      loading: false,
      error: '',
    });
  });

  it('should handle fetchMeal.rejected', () => {
    const action = {
      type: fetchMeal.rejected.type,
      error: { message: 'Error message' },
    };

    expect(mealReducer(undefined, action)).toEqual({
      meals: [],
      loading: false,
      error: 'Error message',
    });
  });
});