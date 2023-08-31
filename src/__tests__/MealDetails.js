/* eslint-disable */
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MealDetails from '../components/MealDetails';

 describe('MealDetails', () => {
  it('renders category details', async () => {
    const mock = new MockAdapter(axios);
    const category = 'Seafood';
    const responseData = {
      meals: [
        {
          strMeal: 'Meal 1',
          strMealThumb: 'meal1.jpg',
        },
        // Add more mock data here if needed
      ],
    };
    mock
      .onGet(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`)
      .reply(200, responseData);

    render(
      <MemoryRouter initialEntries={[`/details/${category}`]}>
        <Route path="/details/:category">
          <MealDetails />
        </Route>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Meal 1')).toBeInTheDocument();
    });
  });
});
