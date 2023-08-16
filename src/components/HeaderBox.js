import React from 'react';
import '../App.css';
const HeaderBox = ({ title, onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="header">
      <div className="header-title">{title}</div>
      <div className="header-profile">
        <img src={'https://shayari-quotes-status.in/ezoimgfmt/blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpe7-_576Z2_ByrnziPMtvKwKvzDszknV8CdjMY3EKfSVInNIgnmi9A6gSAYL37hFHTE6PfiArqrA1lO0SDZ8oKZnw3jh0QY4ZVeb8L61d3zkO088fGPhyajAA3w0RuTzbcy4iT7EKAbBXBkH_s50kGxae9FL3jEq3OkSjLBqObORPyE_e9TZxFZthmw/w213-h320/pexels-dreamlens-production-2913125-min.jpg?ezimgfmt=rs:213x320/rscb1/ngcb1/notWebP'} alt="Profile" className="header-profile-image" />
        <div className="header-logout" >
          <small>James Sudhir</small>
          <small onClick={handleLogout}>Logout</small>
        </div>
      </div>
    </div>
  );
};

export default HeaderBox;
