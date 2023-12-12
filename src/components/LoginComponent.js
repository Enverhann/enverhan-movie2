// LoginComponent.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../auth';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    // Perform authentication logic (e.g., API request) and get user data
    const user = { username: 'exampleUser' }; // Replace with actual user data

    // Dispatch login action
    dispatch(login(user));
  };

  return (
    <div>
    <h2>Login</h2>
    <form>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </form>
  </div>
  );
};

export default LoginComponent;
