import React, { useState } from "react";
import { FaCheckSquare, FaMoon, FaRegSquare, FaSun } from "react-icons/fa";

const Settings = () => {
  const [theme, setTheme] = useState(false);
  const [chat, setChat] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false); // New state for checkbox

  const handleKeepSignedInChange = () => {
    setKeepSignedIn(!keepSignedIn);
  };

  const handleTheme = () => {
    setTheme(!theme);
  };

  const handleChat = () => {
    setChat(!chat);
  };

  return (
    <div>
      <h1 className="title">Settings</h1>
      <div className="block pad">
        <div onClick={handleKeepSignedInChange}>
          {keepSignedIn ? (
            <FaRegSquare color="#0c9" size={40} />
          ) : (
            <FaCheckSquare color="#0c9" size={40} />
          )}
        </div>
        <p style={{ margin: 20 }}>Keep me logged in</p>
      </div>
      <div className="block pad">
        <div onClick={handleChat}>
          {chat ? (
            <FaRegSquare color="#0c9" size={40} />
          ) : (
            <FaCheckSquare color="#0c9" size={40} />
          )}
        </div>
        <p style={{ margin: 20 }}>Save my Chat History</p>
      </div>
      <div className="block pad">
        <div onClick={handleTheme}>
          {theme ? (
            <FaMoon color="#00a8b5" size={40} />
          ) : (
            <FaSun color="#00a8b5" size={40} />
          )}
        </div>
        <p style={{ margin: 20 }}>
          Theme: {theme ? "Dark Mode" : "Light mode"}
        </p>
      </div>
      <div className="pad">
        <button style={{ background: "#86bc25" }} type="submit">
          Save
        </button>
        <button style={{ background: "tomato" }} type="submit">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Settings;
