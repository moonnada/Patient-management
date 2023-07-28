import React from 'react';
import './widget.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';
const Widget = ({ type }) => {
  let data;

  data = {
    title: 'Patients',
    counter: 10,
    link: 'View all',
    diff: 20,
  };

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.counter}</span>
        <Link to="/patients" style={{ textDecoration: 'none' }}>
          <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {data.diff}%
        </div>
        <PersonOutlineIcon className="icon" />
      </div>
    </div>
  );
};

export default Widget;
