import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useContext} from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLogged } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username && password) {
      setIsLogged(true)
      navigate("/")
      console.log('Inicio de sesión exitoso');
    } else {
      alert('Por favor, ingresa un nombre de usuario y una contraseña.');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
