import React from "react";
import Login from "../components/Login";

const Home = ({ setUser }) => {
  return (
    <>
      <Login setUser={setUser} />
    </>
  );
};

export default Home;
