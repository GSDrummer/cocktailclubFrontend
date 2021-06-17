import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import About from "./components/About";
import Register from "./components/Signup";
import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            path="/login"
            component={Login}
            user={user}
            setUser={setUser}
          />
          <Route path="/home" component={Home} user={user} setUser={setUser} />
          <Route path="/signup" component={Register} />
          <Route path="/cocktails" component={Search} />
          <Route path="/about" component={About} />
        </Switch>
        {/* {user ? <Home /> : <Redirect to="/login" />} */}
      </div>
    </BrowserRouter>
  );
};

export default App;
