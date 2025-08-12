import React, { useState } from 'react';
import Sidebar from '../../../Component/SideBar/Sidebar';
import Truckfill from './Operation/Fill From Truck/Truck Filled/Truckfill';

import './Oilmanagement.css';

const operations = [/* ...same as before... */];

const Oilmanagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    tankerId: 'TNK-001',
    product: 'Diesel',
    quantity: 1200,
    receivedDate: '2025-08-12',
    driverName: 'Ram Kumar'
  });

  const handleEdit = (id) => {
    console.log(`Edit operation ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete operation ${id}`);
  };

  const handleFillTanker = () => {
    setShowForm(true);
  };

  const handleFillTruck = () => {
    setShowForm(true); // Assuming same form for now
  };

  const handleFormSubmit = (updated) => {
    console.log('Form submitted:', updated);
    setFormData(updated);
    setShowForm(false);
  };

  return (
    <div className="oil-dashboard">
      <Sidebar />

      <div className="oil-content">
        <h1>Oil Management - Operations History</h1>

        <div className="oil-actions">
          <button onClick={handleFillTanker} className="fill-btn">Fill From Tanker</button>
          <button onClick={handleFillTruck} className="fill-btn">Fill Truck</button>
        </div>

        <table className="oil-table">
          {/* ...same table as before... */}
        </table>

        {showForm && (
          <Truckfill
            initialData={formData}
            onSubmit={handleFormSubmit}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Oilmanagement;
