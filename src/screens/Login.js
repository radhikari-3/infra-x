import React, { useState } from "react";
import "../App.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/logo.png";
import bg from "../assets/bg.webp";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false); // New state for checkbox

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleKeepSignedInChange = () => {
    setKeepSignedIn(!keepSignedIn);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated login logic
    if (username === "admin" && password === "password") {
      // Store token in local storage
      localStorage.setItem("token", "myToken");

      // Redirect to dashboard page
      window.location.href = "/chat";
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="box">
      <img src={logo} alt="logo" />
      <div className="block">
        <img src={bg} alt="logo" className="bg" />
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="header-title">
              <h2 className="black">Infra</h2>
              <h2 className="green">X</h2>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div className="toggle-password" onClick={handleTogglePassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <div className="block">
                <input
                  className="check"
                  type="checkbox"
                  checked={keepSignedIn}
                  onChange={handleKeepSignedInChange}
                />
                <small>Keep me logged in</small>
              </div>
            </div>
            <div className="error">{error}</div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
