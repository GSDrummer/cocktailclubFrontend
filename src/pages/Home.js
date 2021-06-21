import React from "react";
import RecipeReviewCard from "../components/Drink-Card/index";


const Home = ({ setUser }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="list-drinks">
      <RecipeReviewCard/>
      <RecipeReviewCard/>
      <RecipeReviewCard/>
      <RecipeReviewCard/>
      <RecipeReviewCard/>
      </div>
     
    </div>
  );
};

export default Home;
