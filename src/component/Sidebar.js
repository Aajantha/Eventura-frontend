import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ backgroundColor: '#8B1F41', color: 'white', padding: '20px', minHeight: '100vh' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/admin/events" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
            Event Management
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/admin/users" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
            User Management
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/admin/event-services" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
            Event Service Management
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/admin/Orderadmin" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
            Order Management
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/admin/Paymentadmin" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
            Payment Management
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

