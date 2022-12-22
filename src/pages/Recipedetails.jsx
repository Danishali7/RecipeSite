import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
const Recipedetails = () => {
  const params = useParams();
  const [recipeDetails, setRecipeDetails] = useState([]);

  const getRecipeDetails = async (mealId) => {
    const resp = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await resp.json();
    setRecipeDetails(data.meals);
  };

  useEffect(() => {
    getRecipeDetails(params.id);
  }, [params.id]);

  return (
    <>
      {recipeDetails.map((item) => {
        // Because api doesn't includes 20 items for each recipe . items like ingredients and ingredients measures

        const ingredientData = [
          item.strIngredient1,
          item.strIngredient2,
          item.strIngredient3,
          item.strIngredient4,
          item.strIngredient5,
          item.strIngredient6,
          item.strIngredient7,
          item.strIngredient8,
          item.strIngredient9,
          item.strIngredient10,
          item.strIngredient11,
          item.strIngredient12,
          item.strIngredient13,
          item.strIngredient14,
          item.strIngredient15,
          item.strIngredient16,
          item.strIngredient17,
          item.strIngredient18,
          item.strIngredient19,
          item.strIngredient20,
        ];
        const measuresData = [
          item.strMeasure1,
          item.strMeasure2,
          item.strMeasure3,
          item.strMeasure4,
          item.strMeasure5,
          item.strMeasure6,
          item.strMeasure7,
          item.strMeasure8,
          item.strMeasure9,
          item.strMeasure10,
          item.strMeasure11,
          item.strMeasure12,
          item.strMeasure13,
          item.strMeasure14,
          item.strMeasure15,
          item.strMeasure16,
          item.strMeasure17,
          item.strMeasure18,
          item.strMeasure19,
          item.strMeasure20,
        ];
        const filteredIngreData = ingredientData.filter((val) => {
          return val !== "";
        });
        const filteredMeasData = measuresData.filter((val) => {
          return val !== " ";
        });
        return (
          <div className="recipeDetailCont" key={item.idMeal}>
            <h2>{item.strMeal}</h2>
            <div className="instructionsCont">
              <h4>Instructions</h4>
              <p className="instructions">{item.strInstructions}</p>
            </div>

            <h4>Ingredients</h4>

            <div className="ingredientsCont">
              <div className="ingredient">
                <ul>
                  {filteredIngreData.map((ingredient, ind) => {
                    return <li key={ind}>{ingredient}</li>;
                  })}
                </ul>
                <ul className="measures">
                  {filteredMeasData.map((measure, ind) => {
                    return <li key={ind}>{measure}</li>;
                  })}
                </ul>
              </div>
              <div className="mediaCont">
                <div className="videoContainer">
                  <a
                    href={item.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="videoThumbnail"
                      src={item.strMealThumb}
                      alt={item.strMeal}
                    />
                    <FaPlay />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Recipedetails;
