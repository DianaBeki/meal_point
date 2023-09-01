import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMeal } from '../redux/mealSlice';
import '../App.css';

const MealList = () => {
  const meal = useSelector((state) => state.meal); // Access meal data from the store
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchMeal()); // Dispatch the fetchMeal action
  }, [dispatch]);

  return (
    <div className="">
      <div className="header-text">
        <h1 className="title">Menu Categories</h1>
        <input
          type="text"
          placeholder="Search..."
          className="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {meal.loading && <div>Loading...</div>}
      {!meal.loading && meal.error ? (
        <div>
          Error:
          {meal.error}
        </div>
      ) : null}
      {!meal.loading && meal.meals.length ? (
        <div className="meals">
          {meal.meals
            .filter((mealCategory) => mealCategory.strCategory
              .toLowerCase()
              .includes(searchQuery.toLowerCase())).map((mealCategory) => (
                <Link to={`/details/${encodeURIComponent(mealCategory.strCategory)}`} key={mealCategory.strCategory}>
                  <ul className="group">
                    <li className="imgContainer">
                      <img className="mealsImg" src={mealCategory.strCategoryThumb} alt="" />
                    </li>
                    <li className="mealName">{mealCategory.strCategory}</li>
                  </ul>
                </Link>
            ))}
        </div>
      ) : null}
    </div>
  );
};

export default MealList;
