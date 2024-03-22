import React, { useState, useEffect } from 'react';
import './ListaProductos.css';

function ListaProductos({
  productos,
  carrito,
  agregarAlCarrito,
  eliminarProducto
}) {
  const [productosState, setProductosState] = useState(
    productos.map(producto => ({
      ...producto,
      agregado: false // inicialmente no se añade ningun producto al carro
    }))
  );

  // comprobando si se trata de una vista mobile
  const isMobile = window.innerWidth <= 600;

  // la funcion comprobará si el producto está en el carrito
  const estaEnCarrito = producto => {
    return carrito.some(item => item.nombre === producto.nombre);
  };

  const handleEliminarProducto = producto => {
    eliminarProducto(producto); 
  };

  // función para añadir un producto al carrito
  const handleAgregarAlCarrito = producto => {
    agregarAlCarrito(producto); // llamando la función padre
  };

  useEffect(() => {
    // actualizando el estado para definir los productos agregados
    setProductosState(prevState =>
      prevState.map(item => ({
        ...item,
        agregado: estaEnCarrito(item)
      }))
    );
  }, [carrito]); //usando el hook de efecto

  return (
    <div className='container-lista'>
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
              <div>
                {/* formatear el precio para dos decimales */}
                {producto.agregado && isMobile && (
                  <button
                    className='btn-borrar-producto'
                    onClick={() => handleEliminarProducto(producto)}
                  >
                    <ion-icon name='trash-outline'></ion-icon>
                  </button>
                )}
                {parseFloat(producto.precio).toLocaleString('es-ES', {
                  minimumFractionDigits: 2
                })}{' '}
                €
              </div>
            </span>
            <span className='listaProductos__icono'>
              {!producto.agregado && (
                <button
                  onClick={() => handleAgregarAlCarrito(producto)}
                  className={'button'}
                >
                  <img
                    className={'carroCompra'}
                    src='../add-to-cart.png'
                    alt='cartIcon'
                  />
                </button>
              )}
              {/* renderizar el botón desactivado si el producto ya se ha añadido */}
              {producto.agregado && (
                <button disabled='true' className={'agregado-button'}>
                  <img
                    className={'agregado-carro'}
                    src='../add-to-cart.png'
                    alt='cartIcon'
                  />
                </button>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProductos;
