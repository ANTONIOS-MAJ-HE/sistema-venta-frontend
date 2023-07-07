import { useState } from 'react';
import './App.css';
import Router from './router';

function App() {
  const [mostrarLogin, setMostrarLogin] = useState(true);

  const toggleFormulario = () => {
    setMostrarLogin(!mostrarLogin);
  };

  return (
    
    <Router/>
    
  );
}

export default App;