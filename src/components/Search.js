import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleFetch = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      );
      console.log(response);
      if (response.status !== 200) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      // console.log(data);
      setData(data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    handleFetch();
    e.preventDefault();

    // const matches = data?.drinks[0]?.strDrink?.filter(
    //   (item) => item === search
    // );
    // console.log(matches);
  };
  if (error) return <h1>{error}</h1>;
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
      {loading ? (
        <div>Loading</div>
      ) : (
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
      )}
    </div>
  );
};

export default Search;
