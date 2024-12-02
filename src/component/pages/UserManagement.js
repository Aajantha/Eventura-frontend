import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');

  // Fetch users once on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          // Redirect or show a message to user
          return;
        }
    
        const response = await axios.get('http://localhost:5000/api/auth/users', {
          headers: { Authorization: `Bearer ${token}` },
        });
    
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error.response ? error.response.data : error.message);
      }
    };
    

    fetchUsers();
  }, []);

  // Handle edit icon click
  const handleEditClick = (id, currentRole) => {
    setEditingUserId(id);
    setSelectedRole(currentRole);
  };

  // Handle role change
  const handleRoleChange = async (id, newRole) => {
    try {
      await axios.put(`http://localhost:5000/api/auth/users/${id}`, { role: newRole }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      // Update role in state and exit edit mode
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user._id === id ? { ...user, role: newRole } : user))
      );
      setEditingUserId(null);
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  // Handle delete user
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/users/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setUsers(users.filter(user => user._id !== id)); // Remove deleted user from state
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <h1>User Management</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Username</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Role</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user._id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.username}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.email}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {editingUserId === user._id ? (
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    onBlur={() => handleRoleChange(user._id, selectedRole)}
                  >
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                    <option value="serviceproviders">serviceproviders</option>
                  </select>
                ) : (
                  user.role
                )}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button onClick={() => handleEditClick(user._id, user.role)} style={{ cursor: 'pointer' }}>
                  Edit
                </button>
                <button onClick={() => handleDeleteUser(user._id)} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;

