import React, { useState, useEffect } from 'react'
import './CestaCompra.css'

function CestaCompra ({ carrito, eliminarProducto }) {
  const [total, setTotal] = useState(0)

  // comprobando si se trata de una vista mobile
  const isMobile = window.innerWidth <= 600

  // calcular el precio total limitando decimales
  useEffect(() => {
    let precioTotal = 0
    carrito.forEach(producto => {
      if (producto.precio !== '' && !isNaN(parseFloat(producto.precio))) {
        precioTotal += parseFloat(producto.precio)
      }
    })
    setTotal(parseFloat(precioTotal.toFixed(2)))
  }, [carrito])

  // renderizar el componente
  return (
    <div className='container-cesta'>
      <table className='cesta-compra'>
        <thead>
          <tr className='fila-titulo'>
            <th colSpan='3'>MI CESTA:</th>
          </tr>
        </thead>
        <tbody className='cesta-body'>
          {/* renderizar cada fila de producto (excluyendo vista mobile) */}
          {!isMobile &&
            carrito.map((producto, index) => (
              <tr key={index}>
                <td className='fila-nombre'>
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className='producto-imagen'
                  />
                  {producto.nombre !== '' && producto.nombre}
                  {producto.nombre === '' && 'Nombre del producto no disponible'}
                </td>
                <td className='precio-producto'>
                  <button
                    className='btn-borrar-producto'
                    onClick={() => eliminarProducto(producto)}
                  >
                    <ion-icon name='trash-outline'></ion-icon>
                  </button>
                  {producto.precio !== '' && !isNaN(parseFloat(producto.precio))
                    ? parseFloat(producto.precio).toLocaleString('es-ES') + ' €'
                    : 'Precio no disponible'}
                </td>
              </tr>
            ))}
          {/* renderizar la fila con el total */}
          <tr className='fila-total'>
            <td colSpan='2'>
              <span className='texto-total'>TOTAL</span>
              {carrito.length > 1 && (
                <span className='texto-total-productos'>
                  ({carrito.length} productos)
                </span>
              )}
              {/* mostrar el texto en singular si solo hay un producto */}
              {carrito.length === 1 && (
                <span className='texto-total-productos'>
                  ({carrito.length} producto)
                </span>
              )}
            </td>
            {/* mostrar el precio total */}
            <td className='precio-total'>{total.toLocaleString('es-ES')} €</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CestaCompra
