import React, { useState, useEffect } from 'react'
import './ListaProductos.css'

function ListaProductos ({ productos, carrito, agregarAlCarrito }) {
  const [productosState, setProductosState] = useState(
    productos.map(producto => ({
      ...producto,
      agregado: false // inicialmente no se añade ningun producto al carro
    }))
  )

  // la funcion comprobará si el producto está en el carrito
  const estaEnCarrito = producto => {
    return carrito.some(item => item.nombre === producto.nombre)
  }

  // función para añadir un producto al carrito
  const handleAgregarAlCarrito = producto => {
    agregarAlCarrito(producto) // llamando la función padre 
  }

  useEffect(() => {
    // actualizando el estado para definir los productos agregados

    setProductosState(prevState =>
      prevState.map(item => ({
        ...item,
        agregado: estaEnCarrito(item)
      }))
    )
  }, [carrito]) //usando el hook de efecto

  return (
    <div>
      <ul className='listaProductos'>
        {productosState.map((producto, index) => (
          <li key={index} className='listaProductos__item'>
            <span className='listaProductos__nombre'>{producto.nombre}</span>
            <span
              className={
                producto.agregado
                  ? 'agregado-precio'
                  : 'listaProductos__precio '
              }
            >
              {parseFloat(producto.precio).toLocaleString('es-ES', {
                minimumFractionDigits: 2,
              })}{' '}
              €
            </span>
            <span className='listaProductos__icono'>
              <button
                onClick={() => handleAgregarAlCarrito(producto)}
                className={producto.agregado ? 'agregado-button' : 'button'}
              >
                <img
                  className={
                    producto.agregado ? 'agregado-carro' : 'carroCompra'
                  }
                  src='../add-to-cart.png'
                  alt='cartIcon'
                />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaProductos