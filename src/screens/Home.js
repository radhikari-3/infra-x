import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import {
  FiActivity,
  FiBookmark,
  FiMessageSquare,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import "../App.css";
import Chat from "./Chat";
import Users from "./Users";
import Activity from "./Activity";
import Bookmark from "./Bookmark";
import Settings from "./Settings";
import Login from "./Login";
import HeaderBox from "../components/HeaderBox";

function SidebarItem({ to, exact, icon, children }) {
  return (
    <li>
      <NavLink exact={exact} to={to}>
        {icon}
        {children}
      </NavLink>
    </li>
  );
}

function Home() {
  const isAuthenticated = !!localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <Router>
      {isAuthenticated ? <HeaderBox onLogout={logout} /> : false}
      <div className="admin-panel">
        {isAuthenticated ? (
          <>
            <div className="sidebar">
              <ul>
                <SidebarItem exact to="/chat" icon={<FiMessageSquare />}>
                  InfraX Chat
                </SidebarItem>
                <SidebarItem to="/activity" icon={<FiActivity />}>
                  Activity Log
                </SidebarItem>
                <SidebarItem to="/bookmarks" icon={<FiBookmark />}>
                  Bookmarks
                </SidebarItem>
                <SidebarItem to="/users" icon={<FiUsers />}>
                  Users
                </SidebarItem>
                <SidebarItem to="/settings" icon={<FiSettings />}>
                  Settings
                </SidebarItem>
              </ul>
            </div>
          </>
        ) : (
          false
        )}
        <div className="dashboard">
          <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route
              path="/login"
              element={isAuthenticated ? <Navigate to="/chat" /> : <Login />}
            />
            <Route exact path="/chat" element={<Chat />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/activity" element={<Activity />} />
            <Route exact path="/bookmarks" element={<Bookmark />} />
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Home;
