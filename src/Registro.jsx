import { useState } from 'react';
import api from './api';
import './App.css';

function Registro() {
  const [usuario, setUsuario] = useState({
    username: '',
    nombre: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    console.log(usuario);
    try {
      const respuesta = await api.post('/auth/registrar', usuario);
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
        <h2>Registro</h2>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Ingrese usuario"
            onChange={handleChange}
            value={usuario.username}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Ingrese nombre"
            onChange={handleChange}
            value={usuario.nombre}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ingrese email"
            onChange={handleChange}
            value={usuario.email}
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
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
}

export default Registro;
