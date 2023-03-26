import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contacto from './pages/Contacto'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='contacto' element={<Contacto/>} />
          <Route path='*' element="Pagina no encontrada" />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
