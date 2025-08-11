// src/Dashboard/AdminDashboard/AdminDashboard.jsx
import React from 'react';


import './AdminDashboard.css';
import Sidebar from '../../Component/SideBar/Sidebar';

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar/>
      <div className="main-content">
        <h1>Dashboard Overview</h1>
        <div className="cards">
          <div className="card">
            <h3>Total Trucks</h3>
            <p>12</p>
            <span className="positive">+8.2%</span>
          </div>
          <div className="card">
            <h3>Active Tankers</h3>
            <p>8</p>
            <span className="positive">+3.1%</span>
          </div>
          <div className="card">
            <h3>Oil Filled Today</h3>
            <p>125K L</p>
            <span className="positive">+12.5%</span>
          </div>
          <div className="card">
            <h3>Pending Deliveries</h3>
            <p>5</p>
            <span className="negative">-2.3%</span>
          </div>
        </div>

        <div className="status">
          <h3>Fleet Status</h3>
          <ul>
            <li>Active Vehicles: 18/20</li>
            <li>In Maintenance: 2/20</li>
            <li>GPS Online: 17/20</li>
          </ul>
        </div>

        <div className="operations">
          <h3>Today's Operations</h3>
          <ul>
            <li>Completed Fills: 24</li>
            <li>In Progress: 3</li>
            <li>Scheduled: 8</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
