import React from 'react'
import './ListaProductos.css'

function ListaProductos () {
  const productos = [
    { nombre: 'Lajusticia colágeno con magnesio 450comp', precio: '14.35' },
    { nombre: 'Xhekpon® crema facial 40ml', precio: '6.49' },
    { nombre: 'Cerave ® Crema Hidratante 340ml', precio: '11.70' },
    { nombre: 'Hyabak solución 10ml', precio: '9.48' },
    {
      nombre: 'Fotoprotector ISDIN® Fusion Water SPF 50+ 50ml',
      precio: '19.74'
    },
    { nombre: 'Piz Buin® Allergy SPF50+ loción 200ml', precio: '8.65' }
  ]

  return (
    <div>
      <ul className='listaProductos'>
        {productos.map((producto, index) => (
          <li key={index} className='listaProductos__item'>
            <span className='listaProductos__nombre'>{producto.nombre}</span>
            <span className='listaProductos__precio'>{producto.precio} €</span>
            <span className='listaProductos__icono'>
              <button>
                <img
                  className='carroCompra'
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
