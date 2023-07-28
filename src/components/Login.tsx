import React, { useEffect, useState } from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import Home from './Home';

const Login = () => {
  const [value, setValue] = useState<string>('');
  const handleGoogle = async () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user?.email || '');
      localStorage.setItem('email', data.user?.email || '');
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email') || '');
  });
  return (
    <div>
      {value ? (
        <Home />
      ) : (
        <button onClick={handleGoogle}>Sign In with Google</button>
      )}
    </div>
  );
};

export default Login;
