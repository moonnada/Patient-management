import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './navbar.scss';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search a patient" />
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
