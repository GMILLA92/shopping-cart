import './CestaCompra.css'
import React, { useState, useEffect } from 'react'

function CestaCompra () {
  const [total, setTotal] = useState(0)

  const productos = [
    {
      nombre: 'Xhekpon® crema facial 40ml',
      precio: 6.49,
      imagen: '/xhekpon-crema.jpg'
    },
    {
      nombre: 'Cerave ® Crema Hidratante 340ml',
      precio: 11.7,
      imagen: '/cerave-crema.jpg'
    },
    {
      nombre: 'Hyabak solución 10ml',
      precio: 9.48,
      imagen: '/hyabak-solucion.jpg'
    }
  ]

  // calcular el precio total
  const calcularTotal = () => {
    const precioTotal = productos.reduce(
      (acum, producto) => acum + producto.precio,
      0
    )
    setTotal(precioTotal)
  }

  // llamando calcularTotal cuando se monta el componente
  useEffect(() => {
    calcularTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <table className='cesta-compra'>
        <thead>
          <tr className='fila-titulo'>
            <th colSpan='2'>MI CESTA:</th>
          </tr>
        </thead>
        <tbody className='cesta-body'>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td className='fila-nombre'>
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className='producto-imagen'
                />
                {producto.nombre}
              </td>
              <td className='precio-producto'>
                {producto.precio.toLocaleString('es-ES', {
                  minimumFractionDigits: 2
                })}{' '}
                €
              </td>
            </tr>
          ))}
          <tr className='fila-total'>
            <td>
              <span className='texto-total'>TOTAL</span>
              <span className='texto-total-productos'>
                ({productos.length} productos)
              </span>
            </td>
            <td className='precio-total'>
              {total.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CestaCompra
