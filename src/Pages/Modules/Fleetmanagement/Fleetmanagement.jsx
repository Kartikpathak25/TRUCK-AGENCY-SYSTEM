import React, { useState } from 'react';
import './Fleetmanagement.css';
import AddTruckModal from '../CRUD/AddTruck'; 
const initialTrucks = [
  {
    id: 'TRK-001',
    model: 'Volvo FH16',
    location: 'Mumbai Terminal',
    nextService: '15/4/2024',
    capacity: '25,000 L',
    status: 'active',
  },
  {
    id: 'TRK-002',
    model: 'Scania R Series',
    location: 'Delhi Depot',
    nextService: '10/4/2024',
    capacity: '30,000 L',
    status: 'maintenance',
  },
  {
    id: 'TRK-003',
    model: 'Mercedes Actros',
    location: 'Bangalore Hub',
    nextService: '20/4/2024',
    capacity: '28,000 L',
    status: 'active',
  },
];

const Fleetmanagement = () => {
  const [trucks, setTrucks] = useState(initialTrucks);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTruck = (newTruck) => {
    setTrucks([...trucks, newTruck]);
  };

  const filteredTrucks = trucks.filter((truck) => {
    const term = searchTerm.toLowerCase();
    return (
      truck.id.toLowerCase().includes(term) ||
      truck.model.toLowerCase().includes(term) ||
      truck.location.toLowerCase().includes(term)
    );
  });

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>OilFlow</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li className="active">Fleet Management</li>
            <li>Oil Management</li>
            <li>City Operations</li>
            <li>User Management</li>
            <li>Analytics</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </nav>
      </aside>
  

    

      <main className="main-content">
        <header className="header">
          <h1>Fleet Management</h1>
          <div className="header-actions">
            <input
              type="text"
              placeholder="Search trucks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => setShowModal(true)}>Add New Truck</button>
          </div>
        </header>

        <section className="truck-grid">
          {filteredTrucks.length > 0 ? (
            filteredTrucks.map((truck) => (
              <div key={truck.id} className={`truck-card ${truck.status}`}>
                <h3>{truck.id}</h3>
                <p><strong>Model:</strong> {truck.model}</p>
                <p><strong>Location:</strong> {truck.location}</p>
                <p><strong>Next Service:</strong> {truck.nextService}</p>
                <p><strong>Capacity:</strong> {truck.capacity}</p>
                <p className="status"><strong>Status:</strong> {truck.status}</p>
                <div className="actions">
                  <button>Edit </button>
                  <button>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No trucks match your search.</p>
          )}
        </section>

        {showModal && (
          <AddTruckModal
            onClose={() => setShowModal(false)}
            onAdd={handleAddTruck}
          />
        )}
      </main>
    </div>
  );
};

export default Fleetmanagement;
