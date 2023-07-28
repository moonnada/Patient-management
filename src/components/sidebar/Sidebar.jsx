import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Patient Management</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
        </Link>
        <Link to="/patients" style={{ textDecoration: 'none' }}>
          <li>
            <PersonIcon className="icon" />
            <span>Patient List</span>
          </li>
        </Link>
        <li>
          <LogoutIcon className="icon" />
          <span>Logout</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
