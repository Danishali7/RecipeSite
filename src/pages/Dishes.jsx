import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/popular.css";
const Dishes = () => {
  const [dish, setDish] = useState([]);
  let params = useParams();
  const getDishes = async (name) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
    );
    const data = await response.json();
    setDish(data.meals);
  };
  useEffect(() => {
    // getDishes(params.type);
  }, [params.type]);
  //   console.log(dish);
  return (
    <div className="dishes">
      {dish.map((item) => {
        return (
          <Link to={`/Recipedetails/${item.idMeal}`} key={item.idMeal}>
            <div className="recipeCard dishCard">
              <img
                className="recipeImg"
                src={item.strMealThumb}
                alt={item.strMeal}
              />
              <div className="gradient"></div>
              <p className="recipeName">{item.strMeal}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Dishes;
