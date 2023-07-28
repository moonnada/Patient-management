import React from 'react';
import './widget.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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
        <span className="link">{data.link}</span>
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
