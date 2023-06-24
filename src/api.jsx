import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8090/api',
});

// Interceptores para agregar el token de autorización a las solicitudes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
