import React, { useEffect, useState } from "react";
import CocktailList from "../components/CocktailList";
import "../pages/main.css";

const Home = ({ user, setUser }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(randomCharacter);
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
  }, []);

  return (

    <div>
      <h2>Discover new Cocktails</h2>
      <CocktailList loading={loading} cocktails={cocktails} />   
  </div>)
    
  };

export default Home;
