import "./App.css";
import React, { useState } from "react";
import { signUp, userLogin } from "./utils/index";

import Search from "./components/Search";

const App = () => {
  const [user, setUser] = useState();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Search drinks={data} />
    </div>
  );
};

export default App;
