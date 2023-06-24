import { useState } from 'react';
import api from './api';
import './App.css';

function Login() {
  const [usuario, setUsuario] = useState({
    usernameOrEmail: '',
    password: ''
  });

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    console.log(usuario);
    try {
      const respuesta = await api.post('/auth/iniciarSesion', usuario);
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (evento) => {
    setUsuario({
      ...usuario,
      [evento.target.name]: evento.target.value
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Iniciar Sesión</h2>
        <div className="form-group">
          <label htmlFor="usernameOrEmail">Usuario o Email:</label>
          <input
            type="text"
            name="usernameOrEmail"
            id="usernameOrEmail"
            placeholder="Ingrese usuario o email"
            onChange={handleChange}
            value={usuario.usernameOrEmail}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Ingrese contraseña"
            onChange={handleChange}
            value={usuario.password}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
