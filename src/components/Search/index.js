import React, { useEffect } from "react";
import CocktailList from "../CocktailList";
import "./main.css";

const Search = ({ user, setUser }) => {
  //Setting states in functional components

  //Loading state
  const [loading, setLoading] = React.useState(false);

  //Search state
  const [searchTerm, setSearchTerm] = React.useState("");

  //Cocktails state
  const [cocktails, setCocktails] = React.useState([]);

  //Using empty array[] as second array make to run useEffect ony ones when component mounts
  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strInstructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strGlass,
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strInstructions,
              glass: strGlass,
              recipe: [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
              ],
            };
          });
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getDrinks();
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="home-container">
      <form onSubmit={handleSubmit}>
        <label>
          Search for a Cocktail:
          <input
            type="text"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
};

export default Search;
