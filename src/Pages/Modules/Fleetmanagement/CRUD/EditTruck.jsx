// src/pages/FleetManagement/CRUD/EditTruck.jsx
import React, { useState } from 'react';
import './EditTruck.css';

const Edit = ({ truck, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({ ...truck });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onUpdate(formData);
    onClose();
  };

  return (
    <div className="edit-truck-modal">
      <div className="edit-truck-box">
        <h2>Edit Truck Details</h2>

        <label>
          Plate Number:
          <input name="id" value={formData.id} onChange={handleChange} disabled />
        </label>

        <label>
          Model:
          <input name="model" value={formData.model} onChange={handleChange} />
        </label>

        <label>
          Location:
          <input name="location" value={formData.location} onChange={handleChange} />
        </label>

        <label>
          Capacity:
          <input name="capacity" value={formData.capacity} onChange={handleChange} />
        </label>

        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </label>

        <div className="edit-truck-actions">
          <button onClick={handleSubmit}>Update</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
