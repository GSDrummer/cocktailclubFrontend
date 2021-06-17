import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import React from "react";

import Search from "./components/Search";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/cocktails" component={Search} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
