import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MealDetails = () => {
  const { category } = useParams(); // Get the category identifier from URL parameters
  const [categoryDetails, setCategoryDetails] = useState([]);
  console.log('Category:', category);

  useEffect(() => {
    // Fetch the category details based on the category identifier
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`)
      .then(response => {
        console.log('Category details:', response.data);
        setCategoryDetails(response.data.meals);
      })
      .catch(error => {
        console.error('Error fetching category details:', error);
      });
  }, [category]);

  return (
    <div className="details">
        <div className='icon-title'>
            <Link to="/">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="back-icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg></Link>
        <h2 className='title'>More options under {category}</h2>
        </div>
      {categoryDetails.length > 0 ? (
        <div className='meals'>
          {categoryDetails.map((meal, index) => (
            <div key={index} className='group'>
                <div className='imgContainer'>
              <img className='mealsImg' src={meal.strMealThumb} alt={meal.strMeal} />
                </div>
              <h3 className='mealName'>{meal.strMeal}</h3>
            </div>
          ))}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default MealDetails;
