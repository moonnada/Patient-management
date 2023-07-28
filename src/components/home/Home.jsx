import React from 'react';
import './home.scss';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className='homeContainer'>
      <Navbar />
      home container
      </div>
    </div>
  );
};

export default Home;
