import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Patient Management</span>
      </div>
      <hr />
      <div className="center">
        <li>
          <DashboardIcon className='icon'/>
          <span>Dashboard</span>
        </li>
        <li>
          <PersonIcon className='icon'/>
          <span>Patient List</span>
        </li>
        <li>
          <LogoutIcon className='icon' />
          <span>Logout</span>
        </li>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
