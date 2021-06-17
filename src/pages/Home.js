import React from "react";
import Login from "../components/Login";

const Home = ({ setUser, user }) => {
  return (
    <>
      <Login setUser={setUser} user={user} />
    </>
  );
};

export default Home;
