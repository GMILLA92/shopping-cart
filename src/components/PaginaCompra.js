import React from 'react'
import './PaginaCompra.css'
import CestaCompra from './CestaCompra'
import ListaProductos from './ListaProductos'

function PaginaCompra () {
  return (
    <div className='container-componentes'>
      <ListaProductos />

      <CestaCompra />
    </div>
  )
}

export default PaginaCompra
