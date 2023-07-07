import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const routes = [
        {
            id:1,
            nombre:'inicio',
            path: '/'
        },
        {
            id:2,
            nombre:'login',
            path: '/login'
        },
        {
            id:3,
            nombre:'register',
            path: '/register'
        }
    ]
        
    
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <Link to={route.path}>{route.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar