import React, { useState } from 'react';
import axios from 'axios';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');

  const handleLogin = async () => {
    try {
      const apiUrl = 'URL_DE_LA_API_AQUI'; // URL de la API
      const endpoint = 'ENDPOINT_DE_LA_API_AQUI'; // El endpoint de la API
      const method = 'POST'; // El método HTTP adecuado

      const requestBody = {
        username,
        password,
      };

      const response = await axios.request({
        method,
        url: `${apiUrl}/${endpoint}`,
        data: requestBody,
      });

      if (response.status === 200) {
        setResponse('HACKED');
      } else {
        setResponse('FAILED');
      }
    } catch (error) {
      console.error(error);
      setResponse('FAILED');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div>{response}</div>
    </div>
  );
};

export default LoginPage;
