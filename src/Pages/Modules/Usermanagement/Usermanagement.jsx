import React, { useState } from 'react';
import './Usermanagement.css';
import Sidebar from '../../../Component/SideBar/Sidebar';

const users = [
  {
    initials: 'JA',
    name: 'John Admin',
    email: 'admin@oilflow.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '25/1/2024 10:30:00 am',
    created: '1/1/2024'
  },
  {
    initials: 'MW',
    name: 'Mike Wilson',
    email: 'mike.wilson@oilflow.com',
    role: 'Tanker',
    status: 'active',
    lastLogin: '25/1/2024 9:15:00 am',
    created: '5/1/2024'
  },
  {
    initials: 'SJ',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@oilflow.com',
    role: 'Tanker',
    status: 'active',
    lastLogin: '24/1/2024 4:45:00 pm',
    created: '10/1/2024'
  },
  {
    initials: 'RB',
    name: 'Robert Brown',
    email: 'robert.brown@oilflow.com',
    role: 'Tanker',
    status: 'inactive',
    lastLogin: '20/1/2024 2:20:00 pm',
    created: '8/1/2024'
  }
];

export default function Usermanagement() {
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('All Roles');
  const filtered = users.filter(u =>
    (role === 'All Roles' || u.role === role) &&
    (u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <div className="user-mgmt-main">
            <Sidebar/>

      <div className="user-mgmt-top">
        <h2>User Management</h2>
        <button className="add-user-btn">+ Add New User</button>
      </div>
      <div className="user-mgmt-filter">
        <input
          type="text"
          placeholder="Search users by name or email..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option>All Roles</option>
          <option>Admin</option>
          <option>Tanker</option>
        </select>
      </div>
      <div className="user-mgmt-table-wrap">
        <table className="user-mgmt-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(u => (
              <tr key={u.email}>
                <td>
                  <div className="user-info">
                    <div className="initials">{u.initials}</div>
                    <div>
                      <div className="name">{u.name}</div>
                      <div className="email">{u.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`role-pill ${u.role === "Admin" ? "role-admin" : "role-tanker"}`}>{u.role}</span>
                </td>
                <td>
                  <span className={`status-pill ${u.status === "active" ? "status-active" : "status-inactive"}`}>{u.status}</span>
                </td>
                <td>{u.lastLogin}</td>
                <td>{u.created}</td>
                <td className="actions">
                  <button className="edit-btn" title="Edit">
                    {/* Edit SVG */}
                  </button>
                  <button className="delete-btn" title="Delete">
                    {/* Delete SVG */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
