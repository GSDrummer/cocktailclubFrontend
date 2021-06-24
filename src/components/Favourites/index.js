import React, { useState } from "react";
import "./main.css";
import Cocktail from "../Cocktail";

const Favourites = ({ user, setUser }) => {
  console.log(user.favourites);
  return (
    <div>
      <h1>{user.username} Here Are Your Favourite Cocktails</h1>
    </div>
  );
};

export default Favourites;
