import React from 'react'
import {
    BrowserRouter, Routes, Route
} from 'react-router-dom'
import Login from '../pages/Login'
import Registro from '../pages/Registro'
import Navbar from '../components/navbar'
import Publicaciones from '../pages/Publicaciones'

const Router = () => {
  return (
    
    

    <>
    
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element= {<h1>Inicio </h1>} /> 
           <Route path='/login' element= {<Login/>} /> 
           <Route path='/register' element= {<Registro/>} />
           <Route path='/publicaciones' element= {<Publicaciones/>} /> 


        </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default Router