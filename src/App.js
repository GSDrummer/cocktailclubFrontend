import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./components/Search";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Signup";
import Favourites from "./components/Favourites";
import Cocktail from "./components/Cocktail";
import { useMediaQuery } from 'react-responsive';

const App = () => {
  const [user, setUser] = useState();
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }


  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <Route path="/">
            <Login user={user} setUser={setUser} />
          </Route>
        ) : (
          <Redirect to="/home" />
        )}
        {user ? (
          <Route path="/home">
            <Navbar user={user} setUser={setUser} />
            <Home user={user} setUser={setUser} />
          </Route>
        ) : (
          <Redirect to="/" />
        )}
        {user ? (
          <Route path="/about">
            <Navbar user={user} setUser={setUser} />
            <About user={user} setUser={setUser} />
          </Route>
        ) : (
          <Redirect to="/" />
        )}
        {user ? (
          <Route path="/cocktails">
            <Navbar user={user} setUser={setUser} />
            <Search user={user} setUser={setUser} />
            <Cocktail user={user} setUser={setUser} />
          </Route>
        ) : (
          <Redirect to="/" />
        )}
        {user ? (
          <Route path="/favourites">
            <Navbar user={user} setUser={setUser} />
            <Favourites user={user} setUser={setUser} />
          </Route>
        ) : (
          <Redirect to="/" />
        )}
        <Route path="/signup">
          <Register user={user} setUser={setUser} component={Register} />
        </Route>
      </BrowserRouter>
      <div>
    <footer className="footer">&copy;2021
     <p>Josh Howcroft, Luke Ellwood</p>
     </footer>
    </div>
    </div>
  );
};

export default App;
