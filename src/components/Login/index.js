import "./main.css";
import React, { useState } from "react";
import { userLogin } from "../../utils";
import { Link } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onChange = (event) => {
    if (event.target.id === "username") {
      setUsername(event.target.value);
    } else if (event.target.id === "password") {
      setPassword(event.target.value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      userLogin(username, password, setUser);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Log In</h1>
      <form onSubmit={onSubmit} className="login-form">
        <div className="username-container">
          <label htmlFor="username">Username:</label>
          <input
            onChange={onChange}
            value={username}
            className="username-signin"
            id="username"
            type="username"
            name="username"
            placeholder="Username"
          />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password:</label>
          <input
            onChange={onChange}
            value={password}
            className="password-signin"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <input
          className="submit-login"
          id="submit"
          type="submit"
          value="Log in"
        />
        <Link to="/signup" className="signup-link">
          Create New Account
        </Link>
      </form>
    </div>
  );
};

export default Login;
