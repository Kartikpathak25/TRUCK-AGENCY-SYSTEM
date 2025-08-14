import React, { useState, useEffect } from 'react';
import './EditTruck.css';

const EditTruck = ({ initialData, onUpdate, onClose }) => {
  const [formData, setFormData] = useState({
    id: '',
    model: '',
    location: '',
    capacity: '',
    status: 'Active'
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Truck</h2>

      <input
        type="text"
        name="id"
        value={formData.id}
        disabled
      />
      <input
        type="text"
        name="model"
        placeholder="Model"
        value={formData.model}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="capacity"
        placeholder="Capacity"
        value={formData.capacity}
        onChange={handleChange}
        required
      />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Active">Active</option>
        <option value="Maintenance">Maintenance</option>
      </select>

      <div className="modal-actions">
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default EditTruck;
