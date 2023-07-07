import { useEffect, useState } from 'react';
import api from '../api';
import '../App.css';

function Publicaciones() {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const obtenerPublicaciones = async () => {
      try {
        const token = localStorage.getItem('token'); // Obtener el token del almacenamiento local
        const respuesta = await api.get('/publicaciones', {
          headers: {
            Authorization: `Bearer ${token}` // Incluir el token en el encabezado de la solicitud
          }
        });
        const { contenido } = respuesta.data;
        setPublicaciones(contenido);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerPublicaciones();
  }, []);

  return (
    <div>
      <h2>Publicaciones</h2>
      {publicaciones.map((publicacion) => (
        <div key={publicacion.id}>
          <h3>{publicacion.titulo}</h3>
          <p>{publicacion.descripcion}</p>
          <p>{publicacion.contenido}</p>
        </div>
      ))}
    </div>
  );
}

export default Publicaciones;
