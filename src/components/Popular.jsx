import "../css/popular.css";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
const Popular = () => {
  const [popular, setPopular] = useState([]);

  // fetching popular meals recipes and setting to local storage for not more fetching every time page refresh
  const getPopularData = async () => {
    let checkStorage = localStorage.getItem("popular");
    if (checkStorage) {
      setPopular(JSON.parse(checkStorage));
    } else {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.meals));
      setPopular(data.meals);
      // console.log(data);
    }
  };

  useEffect(() => {
    getPopularData();
  }, []);
  return (
    <div className="popularContainer">
      <div className="wrapper">
        <h3 className="popularHeading">Popular</h3>
        <Splide
          options={{
            perPage: 4,
            gap: "3rem",
            drag: "free",
            pagination: false,
            mediaQuery: "max",
            breakpoints: {
              827: {
                perPage: 3,
                gap: "3rem",
              },
              465: {
                perPage: 2,
                gap: "1.5rem",
              },
            },
          }}
        >
          {popular.map((item) => {
            return (
              <SplideSlide key={item.idMeal}>
                <Link to={`/Recipedetails/${item.idMeal}`}>
                  <div className="recipeCard">
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

export default Popular;
