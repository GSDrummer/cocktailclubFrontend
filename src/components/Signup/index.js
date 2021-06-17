import "./main.css";
import React, { useState } from "react";
import { signUp } from "../../utils";

const Register = ({ user, setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    if (event.target.id === "username") {
      setUsername(event.target.value);
    } else if (event.target.id === "password") {
      setPassword(event.target.value);
    } else if (event.target.id === "email") {
      setEmail(event.target.value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    signUp(username, email, password, setUser);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign up!</h1>
      <form onSubmit={onSubmit} className="signup-form">
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
        <div className="email-container">
          <label htmlFor="email">Email:</label>
          <input
            onChange={onChange}
            value={email}
            className="email-signin"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
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
          className="submit-signup"
          id="submit"
          type="submit"
          value="Sign up!"
        />
      </form>
    </div>
  );
};

export default Register;
