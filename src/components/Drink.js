import React, { useState } from "react";

const Drink = ({ drinks, search }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="drink-name"> {data.drinks[0].strDrink}</div>
      <div>
        <img
          className="drink-thumb"
          alt="drink"
          src={data.drinks[0].strDrinkThumb}
        ></img>
      </div>
      <div className="ingredients">
        Ingredients: {data.drinks[0].strIngredient1},
        {data.drinks[0].strIngredient2},{data.drinks[0].strIngredient3},
        {data.drinks[0].strIngredient4}
      </div>
      <div className="glass-type">Glassware: {data.drinks[0].strGlass}</div>
      <div className="drink-method">
        Instructions: {data.drinks[0].strInstructions}
      </div>
    </div>
  );
};

export default Drink;
