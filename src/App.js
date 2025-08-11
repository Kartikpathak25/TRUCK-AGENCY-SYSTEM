// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Dashboard/AdminDashboard/AdminDashboard';
import Fleetmanagement from './Pages/Modules/Fleetmanagement/Fleetmanagement';
import Oilmanagement from './Pages/Modules/OilManagement/Oilmanagement';
import Login from './Pages/Login';
import Cityoperation from './Pages/Modules/CityOperation/Cityoperation';
import Usermanagement from './Pages/Modules/Usermanagement/Usermanagement';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/fleet" element={<Fleetmanagement />} />
        <Route path="/oil" element={<Oilmanagement/>} />
        <Route path="/city" element={<Cityoperation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users"  element={<Usermanagement/>}/>
      </Routes>
    </Router>
  );
};

export default App;
