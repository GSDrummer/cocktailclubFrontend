import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import About from "./components/About";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/cocktails" component={Search} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
