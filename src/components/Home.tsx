import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
const Home = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <h1>home</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Home;
