import "./App.css";
import React, { useState } from "react";
import { signUp, userLogin } from "./utils/index";

import Search from "./components/Search";

const App = () => {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Search drinks={data} />
    </div>
  );
};

export default App;
