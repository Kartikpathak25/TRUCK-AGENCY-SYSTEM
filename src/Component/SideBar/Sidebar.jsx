// src/Component/Layouts/SideBar/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>🛢️ OilFlow Admin</h2>
      <ul>
        <li><NavLink to="/admin-dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/fleet">Fleet Management</NavLink></li>
        <li><NavLink to="/oil">Oil Management</NavLink></li>
        <li><NavLink to="/city">City Operations</NavLink></li>
        <li><NavLink to="/users">User Management</NavLink></li>
        <li><NavLink to="/analytics">Analytics</NavLink></li>
        <li><NavLink to="/settings">Settings</NavLink></li>
        <li><NavLink to="/login">Logout</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;

