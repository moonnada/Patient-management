import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import List from './components/list/List';
import New from './components/new/New';

function App() {
  // const navigate = useNavigate();

  return (
    // <Routes>
    //   <Route path="/" element={<Login />} />
    //   {/* <Route path="/SignIn" element={<SignIn />} /> */}
    // </Routes>
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
