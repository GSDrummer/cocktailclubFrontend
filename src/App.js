import "./App.css";
import React, { useState } from "react";
import { signUp, userLogin } from "./utils/index";

const App = () => {
  const [user, setUser] = useState();
  const [user, setUser] = useState();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

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
      setLoading(true);
      setSearch();
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  if (error) return <h1>{error}</h1>;
  if (!loading)
    return (
      <div className="App">
        <Search drinks={data} />
      </div>
    );
};

export default App;
