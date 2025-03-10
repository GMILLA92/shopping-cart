import './App.css'
import { Route, Routes } from 'react-router-dom'
import ListaProductos from './components/ListaProductos'
import React from 'react'
import CestaCompra from './components/CestaCompra'
import PaginaCompra from './components/PaginaCompra'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<PaginaCompra />} />
        <Route path='/productos' element={<ListaProductos />} />
        <Route path='/cesta' element={<CestaCompra />} />
      </Routes>
    </div>
  )
}

export default App
