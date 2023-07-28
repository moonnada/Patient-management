import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import List from './components/list/List';
import New from './components/new/New';
import Single from './components/single/Single';
import Login from './components/auth/Login';
import { userInputs } from './formSource';
import { AuthContext } from './components/auth/AuthContext';
function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser);
  return (
    // <Routes>
    //   <Route path="/" element={<Login />} />
    //   {/* <Route path="/SignIn" element={<SignIn />} /> */}
    // </Routes>
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="patients">
            <Route
              index
              element={
                <RequireAuth>
                  <List />
                </RequireAuth>
              }
            />
            <Route
              path="new"
              element={
                <RequireAuth>
                  <New inputs={userInputs} />{' '}
                </RequireAuth>
              }
            />
            <Route
              path=":patientId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
