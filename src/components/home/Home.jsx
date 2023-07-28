import React from 'react';
import './home.scss';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Widget from '../widget/Widget';
import Featured from '../featured/Featured';
import Chart from '../chart/Chart';
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget />
          <Widget />
          <Widget />
        </div>
        <div className='charts'>
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
