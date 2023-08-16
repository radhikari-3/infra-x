import React from "react";
import "../App.css";
import profile from "../assets/profile.avif";

const HeaderBox = ({ title, onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="header">
      <div className="header-title">
        <h3>Infra</h3>
        <h3 className="green">X</h3>
      </div>
      <div className="header-profile">
        <img src={profile} alt="Profile" className="header-profile-image" />
        <div className="header-logout">
          <small>Rohit Adhikari</small>
          <small onClick={handleLogout}>Logout</small>
        </div>
      </div>
    </div>
  );
};

export default HeaderBox;
