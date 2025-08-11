import React, { useState } from 'react';
import './AddTruck.css';

const AddTruckModal = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    id: '',
    model: '',
    capacity: '',
    location: '',
    status: 'active',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (formData.id && formData.model && formData.capacity && formData.location) {
      onAdd(formData);
      onClose();
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Truck</h2>
        <input name="id" placeholder="Plate Number" value={formData.id} onChange={handleChange} />
        <input name="model" placeholder="Model" value={formData.model} onChange={handleChange} />
        <input name="capacity" placeholder="Capacity (Liters)" value={formData.capacity} onChange={handleChange} />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="maintenance">Maintenance</option>
        </select>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Add Truck</button>
        </div>
      </div>
    </div>
  );
};

export default AddTruckModal;
