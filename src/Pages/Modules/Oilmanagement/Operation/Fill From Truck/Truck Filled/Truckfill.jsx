import React, { useState, useEffect } from 'react';
import styles from './Truckfill.css'; // ✅ Scoped styles

export default function Truckfill({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    tankerId: '',
    product: '',
    quantity: '',
    receivedDate: '',
    driverName: '',
    petrolpumpName: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.overlay}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2>Update Tanker Details</h2>

        <label>
          Tanker ID
          <input
            type="text"
            name="tankerId"
            value={formData.tankerId}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Product
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Petrol Pump Name
          <input
            type="text"
            name="petrolpumpName"
            value={formData.petrolpumpName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Quantity (L)
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date Received
          <input
            type="date"
            name="receivedDate"
            value={formData.receivedDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Driver Name
          <input
            type="text"
            name="driverName"
            value={formData.driverName}
            onChange={handleChange}
            required
          />
        </label>

        <div className={styles.buttonRow}>
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
