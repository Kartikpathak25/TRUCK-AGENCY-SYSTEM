import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from '../../../Component/SideBar/Sidebar';
import './Fleetmanagement.css';
import Truckfill from '../OilManagement/Operation/Fill From Truck/Truck Filled/Truckfill'; // ✅ Import your form

const Fleetmanagement = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [editTruck, setEditTruck] = useState(null);
  const [trucks, setTrucks] = useState([
    {
      id: 'TRK-001',
      model: 'Volvo FH16',
      location: 'Mumbai Terminal',
      nextService: '15/4/2024',
      capacity: '25,000 L',
      status: 'Active'
    },
    {
      id: 'TRK-002',
      model: 'Scania R Series',
      location: 'Delhi Depot',
      nextService: '10/4/2024',
      capacity: '30,000 L',
      status: 'Maintenance'
    },
    {
      id: 'TRK-003',
      model: 'Mercedes Actros',
      location: 'Bangalore Hub',
      nextService: '20/4/2024',
      capacity: '28,000 L',
      status: 'Active'
    }
  ]);

  const navigate = useNavigate();

  const handleAddTruck = (newTruck) => {
    setTrucks(prev => [...prev, { ...newTruck, nextService: 'TBD' }]);
  };

  const handleUpdateTruck = (updatedTruck) => {
    setTrucks(prev =>
      prev.map(truck => (truck.id === updatedTruck.id ? updatedTruck : truck))
    );
  };

  const filteredTrucks = trucks.filter(truck => {
    const matchesSearch =
      truck.id.toLowerCase().includes(search.toLowerCase()) ||
      truck.model.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filter === 'All' || truck.status === filter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="fleet-dashboard">
      <Sidebar />

      <div className="fleet-content">
        <h1>Fleet Management</h1>

        <div className="fleet-controls">
          <input
            type="text"
            placeholder="Search by plate or model..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
           
          </select>
        </div>

        <div className="fleet-actions-top">
          <button className="add-button" onClick={() => setShowForm(true)}>Add</button>
          <button className="fill-button" onClick={() => navigate('truckfill')}>Fill from Tanker</button>
        </div>

        <div className="fleet-cards">
          {filteredTrucks.map(truck => (
            <div key={truck.id} className="fleet-card">
              <h3>{truck.id} ({truck.model})</h3>
              <p><strong>Location:</strong> {truck.location}</p>
              <p><strong>Capacity:</strong> {truck.capacity}</p>
              <p><strong>Status:</strong> <span className={truck.status === 'Active' ? 'active' : 'Inactive'}>{truck.status}</span></p>
              <div className="fleet-actions">
                <button onClick={() => setEditTruck(truck)}>Edit Details</button>
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Nested route for Truckfill */}
        <Routes>
          <Route
            path="truckfill"
            element={
              <Truckfill
                initialData={null}
                onSubmit={(data) => {
                  console.log('Truckfill submitted:', data);
                  navigate('/fleet'); // go back after submit
                }}
                onCancel={() => navigate('/fleet')}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Fleetmanagement;
