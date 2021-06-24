import React, { useEffect, useState } from "react";
import CocktailList from "../CocktailList";
import "./main.css";

const Search = ({ user, setUser }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

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
              user,
              setUser,
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
    <div>
    <div>
    <main className="search-container">
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
      </form>
      <CocktailList loading={loading} cocktails={cocktails} />
     
    </main>
    </div>
    <div>
    <footer className="footer">&copy;2020
     <p>Josh Howcroft, Luke Ellwood</p>
</footer>
    </div>
     
</div>
  );
};

export default Search;
