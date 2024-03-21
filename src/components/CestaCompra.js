import React, { useState, useEffect } from 'react';
import './CestaCompra.css';

function CestaCompra({ carrito }) {
  const [total, setTotal] = useState(0);

  // calcular el precio total limitando decimales
  useEffect(() => {
    const precioTotal = carrito.reduce((acum, producto) => acum + parseFloat(producto.precio), 0);
    setTotal(parseFloat(precioTotal.toFixed(2)));
  }, [carrito]);

  return (
    <div>
      <table className='cesta-compra'>
        <thead>
          <tr className='fila-titulo'>
            <th colSpan='3'>MI CESTA:</th>
          </tr>
        </thead>
        <tbody className='cesta-body'>
          {carrito.map((producto, index) => (
            <tr key={index}>
              <td className='fila-nombre'>
                <img src={producto.imagen} alt={producto.nombre} className='producto-imagen' />
                {producto.nombre}
              </td>
              <td className='precio-producto'>
                {parseFloat(producto.precio).toLocaleString('es-ES')} €
              </td>
            </tr>
          ))}
          <tr className='fila-total'>
            <td colSpan='2'>
              <span className='texto-total'>TOTAL</span>
              <span className='texto-total-productos'>({carrito.length} productos)</span>
            </td>
            <td className='precio-total'>{total.toLocaleString('es-ES')} €</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CestaCompra;

