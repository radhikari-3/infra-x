import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { FiActivity, FiBookmark, FiMessageSquare, FiSettings, FiUsers } from 'react-icons/fi';
import '../App.css';
import Chat from './Chat';
import Users from './Users';
import Activity from './Activity';
import Bookmark from './Bookmark';
import Settings from './Settings';
import Login from './Login';
import Home from './Home';

function RouteBox() {
  const isAuthenticated = !!localStorage.getItem('token');
  console.log(isAuthenticated,'message')
  return (
    <Router>
      <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
      />
      </Routes>
    </Router>
  );
}

export default RouteBox;
