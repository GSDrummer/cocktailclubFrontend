import React from "react";
import DrinkCard from "../components/Drink-Card/index";


const Home = ({ setUser }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
      <DrinkCard/>
      </div>
     
    </div>
  );
};

export default Home;
