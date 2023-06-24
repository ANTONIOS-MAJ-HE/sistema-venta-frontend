import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api'

function App() {
  const [usuario, setUsuario] = useState({
    username : "",
    nombre : "",
    email : "",
    password : ""
  })
  const handleSubmmit = async(evento) => {
    evento.preventDefault()
    console.log(usuario)
    try {
      const respuesta = await api.post("/auth/registrar", usuario )
      console.log(respuesta)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (evento) => {
    setUsuario({
      ...usuario, 
      [evento.target.name] : evento.target.value
    })
  }

  return (
    <form 
    onSubmit={handleSubmmit}
    
    > 
      <input 
      type='text' 
      name='username' 
      placeholder='ingrese usuario'
      onChange={handleChange} 
      ></input>

      <input 
      type='text' 
      name='nombre' 
      placeholder='ingrese nombre'
      onChange={handleChange} 
      ></input>
      <input 
      type='email' 
      name='email' 
      placeholder='ingrese usuario'
      onChange={handleChange} 
      ></input>
      <input 
      type='password' 
      name='password' 
      placeholder='ingrese password'
      onChange={handleChange} 
      ></input>

      <input type='submit' value={"enviar"}/>
    </form>
  
  )
}

export default App
