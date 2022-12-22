import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Notfound from "./Notfound";

const Searched = () => {
  const [searchItem, setSearchItem] = useState([]);
  let params = useParams();
  const getSearchedItem = async (searchName) => {
    const resp = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`
    );
    const data = await resp.json();
    setSearchItem(data.meals);
  };
  useEffect(() => {
    // getSearchedItem(params.search);
  }, [params.search]);
  return (
    <div className="searchedDish dishes">
      {searchItem === null ? (
        <Notfound />
      ) : (
        searchItem.map((item) => {
          return (
            <Link key={item.idMeal} to={`/Recipedetails/${item.idMeal}`}>
              <div className="searchedItems">
                <div className="searchedCard recipeCard">
                  <img
                    className="recipeImg"
                    src={item.strMealThumb}
                    alt={item.strMeal}
                  />
                </div>
                <h4>{item.strMeal}</h4>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Searched;
