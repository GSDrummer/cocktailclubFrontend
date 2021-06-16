import React, { useState } from "react";

const Search = async ({ drinks }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // hi hi
    const matches = drinks.filter((item) => item === search);
    console.log(matches);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="search-label">
          Search for a Cocktail:
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
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
    </div>
  );
};
export default Search;
