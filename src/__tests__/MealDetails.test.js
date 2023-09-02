import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MealDetails from '../components/MealDetails';

describe('test meals ', () => {
  it('Render meals', async () => {
    const category = 'Chicken';
    const categoryDetails = [
      { strMeal: 'Meal 1', strMealThumb: 'image1.jpg' },
      { strMeal: 'Meal 2', strMealThumb: 'image2.jpg' },
    ];

    axios.get.mockResolvedValue({ data: { meals: categoryDetails } });

    render(
      <MemoryRouter initialEntries={[`/details/${category}`]}>
        <Routes>
          <Route path="/details/:category" element={<MealDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => {
      // Verify that the category details are rendered
      const headingElement = screen.getByTestId('category-heading');
      expect(headingElement).toBeInTheDocument();
      expect(headingElement).toHaveTextContent(`More options under ${category}`);
      expect(screen.getByAltText('Meal 1')).toBeInTheDocument();
      expect(screen.getByAltText('Meal 2')).toBeInTheDocument();
    });
  });
});
