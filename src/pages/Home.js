import React, { useEffect } from "react";
import CocktailList from "../components/CocktailList";
import "../pages/main.css";

const Home = ({ setUser }) => {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [cocktails, setCocktails] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const response = await fetch(
          `www.thecocktaildb.com/api/json/v1/1/random.php`
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

  return <CocktailList loading={loading} cocktails={cocktails} />;
};

export default Home;
