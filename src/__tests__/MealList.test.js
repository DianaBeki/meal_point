/* eslint-disable */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchMeal } from '../redux/mealSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('mealSlice async actions', () => {
  it('creates fetchMeal action', async () => {
    const mock = new MockAdapter(axios);
    const responseData = [{ meal: 'data' }];

    mock.onGet('https://www.themealdb.com/api/json/v1/1/categories.php').reply(200, {
      categories: responseData,
    });

    const expectedActions = [
      fetchMeal.pending.type,
      fetchMeal.fulfilled.type,
    ];

    const store = mockStore({});

    await store.dispatch(fetchMeal());

    const actionTypes = store.getActions().map((action) => action.type);
    expect(actionTypes).toEqual(expectedActions);
  });
});



