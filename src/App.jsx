import { useState } from 'react';
import Login from './Login';
import Registro from './Registro';
import './App.css';
import Publicaciones from './Publicaciones';

function App() {
  const [mostrarLogin, setMostrarLogin] = useState(true);

  const toggleFormulario = () => {
    setMostrarLogin(!mostrarLogin);
  };

  return (
    <div className="container">
      {mostrarLogin ? <Login /> : <Registro />}
      <div className="toggle-form">
        {mostrarLogin ? (
          <p>No tienes cuenta? <span onClick={toggleFormulario}>Regístrate</span></p>
        ) : (
          <p>Ya tienes cuenta? <span onClick={toggleFormulario}>Iniciar Sesión</span></p>
        )}
      </div>
    </div>
    
  );
}

export default App;