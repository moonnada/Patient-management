import React from 'react';
import './widget.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';
const Widget = ({ patientsInfo }) => {

  return (
    <div className="widget">
      <div className="left">
        <span className="title">Total Patients</span>
        <span className="counter">{patientsInfo.length}</span>
        <Link to="/patients" style={{ textDecoration: 'none' }}>
          <span className="link">View all</span>
        </Link>
      </div>
      <div className="right">
        <PersonOutlineIcon className="icon" />
      </div>
    </div>
  );
};

export default Widget;
