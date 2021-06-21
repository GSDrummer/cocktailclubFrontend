import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./components/Search";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Signup";
import Profile from "./components/Profile";

const App = () => {
  const [user, setUser] = useState(null);

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
          </Route>
        ) : (
          <Redirect to="/" />
        )}
        {user ? (
          <Route path="/profile">
            <Navbar user={user} setUser={setUser} />
            <Profile user={user} setUser={setUser} />
          </Route>
        ) : (
          <Redirect to="/" />
        )}
        <Route path="/signup">
          <Register user={user} setUser={setUser} component={Register} />
        </Route>
      </BrowserRouter>

    </div>
  );
};

export default App;
