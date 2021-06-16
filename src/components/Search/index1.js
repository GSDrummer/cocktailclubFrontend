import React, { useState, useEffect } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
    );
    console.log(response);
    const data = await response.json();
    // const tempArr = data;
    // tempArr=[...tempArr]
    setData([data]);
    console.log(data);
    // setLoading(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFetch(input);
    setInput("");
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // const matches = data.filter((item) => item === input);
    // if (!matches) {
    //   console.log("No Matches");
    // } else {
    //   console.log("Matches found!");
    // }
  };

  // const getImg = () => {
  //   return data.drinks[1].strThumb;
  // };

  if (error) return <h1>{error}</h1>;
  if (!loading)
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label className="search-label">
            Search for a Cocktail:
            <input
              type="text"
              name="search"
              placeholder="Enter cocktail or ingredient name"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
          </label>
          <button type="submit">Search</button>
        </form>
        {data && <CocktailComponent />}
      </div>
    );
};

const CocktailComponent = (props) => {
  return (
    <div>
      <img src={props.image}></img>
    </div>
  );
};

export default Search;

// <div>
//   <div className="drink-name"> Drink: {data.drinks[0].strDrink}</div>
//   <div>
//     <img className="drink-thumb" alt="drink" src={data}></img>
//   </div>
//   <div className="ingredients">
//     Ingredients: {data.drinks[0].strIngredient1},
//     {data.drinks[0].strIngredient2},{data.drinks[0].strIngredient3},
//     {data.drinks[0].strIngredient4}
//   </div>
//   <div className="glass-type">Glassware: {data.drinks[0].strGlass}</div>
//   <div className="drink-method">
//     Instructions: {data.drinks[0].strInstructions}
//   </div>
// </div>;
