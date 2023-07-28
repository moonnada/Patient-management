import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  // const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/SignIn" element={<SignIn />} /> */}
    </Routes>
  );
}

export default App;
