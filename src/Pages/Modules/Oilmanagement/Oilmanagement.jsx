import React, { useState } from 'react';
import Sidebar from '../../../Component/SideBar/Sidebar';
import Truckfill from './Operation/Fill From Truck/Truck Filled/Truckfill';
import './Oilmanagement.css';

const Oilmanagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [operations, setOperations] = useState([]);
  const [formData, setFormData] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const handleFillTanker = () => {
    setFormData({
      tankerId: '',
      product: '',
      quantity: '',
      receivedDate: '',
      driverName: '',
      petrolpumpName: ''
    });
    setEditIndex(null);
    setShowForm(true);
  };

  const handleEdit = (index) => {
    setFormData(operations[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const confirm = window.confirm('Are you sure you want to delete this entry?');
    if (confirm) {
      setOperations((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleFormSubmit = (updated) => {
    if (editIndex !== null) {
      // Update existing entry
      setOperations((prev) =>
        prev.map((op, i) => (i === editIndex ? updated : op))
      );
    } else {
      // Add new entry
      setOperations((prev) => [...prev, updated]);
    }
    setShowForm(false);
    setEditIndex(null);
  };

  return (
    <div className="oil-dashboard">
      <Sidebar />

      <div className="oil-content">
        <h1>Oil Management - Operations History</h1>

        <div className="oil-actions">
          <button onClick={handleFillTanker} className="fill-btn">Fill From Tanker</button>
          <button onClick={handleFillTanker} className="fill-btn">Fill Truck</button>
        </div>

        <table className="oil-table">
          <thead>
            <tr>
              <th>Tanker ID</th>
              <th>Product</th>
              <th>Petrol Pump</th>
              <th>Quantity (L)</th>
              <th>Date Received</th>
              <th>Driver Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {operations.map((op, index) => (
              <tr key={index}>
                <td>{op.tankerId}</td>
                <td>{op.product}</td>
                <td>{op.petrolpumpName}</td>
                <td>{op.quantity}</td>
                <td>{new Date(op.receivedDate).toLocaleDateString()}</td>
                <td>{op.driverName}</td>
                <td>
                  <button onClick={() => handleEdit(index)} className="action-btn edit">Edit</button>
                  <button onClick={() => handleDelete(index)} className="action-btn delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showForm && (
          <Truckfill
            initialData={formData}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setShowForm(false);
              setEditIndex(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Oilmanagement;
