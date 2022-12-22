import React, { useEffect, useState } from "react";
import "../css/popular.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggieData();
  }, []);

  // fetching Veggie meals recipes and setting to local storage for not more fetching every time page refresh
  const getVeggieData = async () => {
    let checkStorage = localStorage.getItem("Veggie");
    if (checkStorage) {
      setVeggie(JSON.parse(checkStorage));
    } else {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
      );
      const data = await api.json();
      // trimming data to 12 items
      const trimmedData = data.meals.slice(0, 12);

      localStorage.setItem("Veggie", JSON.stringify(trimmedData));
      setVeggie(trimmedData);
    }
  };
  return (
    <div className="VeggieContainer popularContainer">
      <div className="wrapper veggieWrapper">
        <h3 className="VeggieHeading popularHeading">Vegetarian</h3>
        <Splide
          options={{
            perPage: 4,
            gap: "4rem",
            drag: "free",
            pagination: false,
            mediaQuery: "max",
            breakpoints: {
              929: {
                perPage: 3,
                gap: "3rem",
              },
              465: {
                perPage: 2,
                gap: "2rem",
              },
            },
          }}
        >
          {veggie.map((item) => {
            return (
              <SplideSlide key={item.idMeal}>
                <Link to={`/Recipedetails/${item.idMeal}`}>
                  <div className="recipeCard veggieCard">
                    <img
                      className="recipeImg"
                      src={item.strMealThumb}
                      alt={item.strMeal}
                    />
                    <div className="gradient"></div>
                    <p className="recipeName">{item.strMeal}</p>;
                  </div>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Veggie;
