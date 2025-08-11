import React from "react";
import "./Oilmanagement.css";

const operations = [
  {
    date: "25/1/2024",
    time: "10:30:00 am",
    type: "Tanker Fill",
    tanker: "1",
    truck: "-",
    quantity: "40,000",
    location: "Refinery A",
    status: "completed",
  },
  {
    date: "25/1/2024",
    time: "2:15:00 pm",
    type: "Truck Fill",
    tanker: "1",
    truck: "1",
    quantity: "25,000",
    location: "Mumbai Terminal",
    status: "completed",
  },
  {
    date: "25/1/2024",
    time: "4:45:00 pm",
    type: "Truck Fill",
    tanker: "2",
    truck: "3",
    quantity: "28,000",
    location: "Bangalore Hub",
    status: "pending",
  },
];

function getStatusClass(status) {
  return status === "completed" ? "status-completed"
       : status === "pending" ? "status-pending"
       : "";
}

export default function Oilmanagement() {
  return (
    <div className="oil-management-container">
      <h2>Oil Management</h2>
      <div className="operations-card">
        <div className="operations-header">
          Operations History
        </div>
        <input
          className="search-input"
          type="text"
          placeholder="Search operations..."
          disabled
        />

        <table className="operations-table">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Type</th>
              <th>Tanker</th>
              <th>Truck</th>
              <th>Quantity (L)</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {operations.map((op, idx) => (
              <tr key={idx}>
                <td>{op.date} {op.time}</td>
                <td>
                  <span className={`type-badge type-${op.type.replace(" ", "").toLowerCase()}`}>
                    {op.type}
                  </span>
                </td>
                <td>{op.tanker}</td>
                <td>{op.truck}</td>
                <td>{op.quantity}</td>
                <td>{op.location}</td>
                <td>
                  <span className={getStatusClass(op.status)}>
                    {op.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
