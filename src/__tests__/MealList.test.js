import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import {
  render, screen,
} from '@testing-library/react';
import MealList from '../components/MealList';

const mockStore = configureStore();

describe('test meals ', () => {
  it('Render meals', () => {
    const mealData = {
      loading: false,
      error: null,
      meals: [
        { strCategory: 'Category 1', strCategoryThumb: 'image1.jpg' },
        { strCategory: 'Category 2', strCategoryThumb: 'image2.jpg' },
      ],
    };

    const store = mockStore({
      meal: mealData,
    });

    store.dispatch = jest.fn(() => Promise.resolve());

    render(
      <>
        <BrowserRouter>
          <Provider store={store}>
            <MealList />
          </Provider>
        </BrowserRouter>
      </>,
    );

    const elementsWithClass = screen.getAllByTestId('meals-list');
    expect(elementsWithClass).toHaveLength(1);
  });
});
