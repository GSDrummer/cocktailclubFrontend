import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { userLogin } from "../../utils";

const Login = () => {
  const [user, setUser] = useState();

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("api/users/login", {
  //       email,
  //       password,
  //     })
  //     .then((res) => {
  //       if (res.data.status === "OK") {
  //         sessionStorage.setItem("loggedIn", "true");
  //         sessionStorage.setItem("email", res.data.emailAddress);
  //         sessionStorage.setItem("username", res.data.username);
  //         sessionStorage.setItem("userID", res.data.userID);
  //         history.push("/main");
  //       } else {
  //         history.push("/signup");
  //       }
  //     });
  // };
};

export default Login;
