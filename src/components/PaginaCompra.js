import React, { useState } from 'react';
import './PaginaCompra.css';
import CestaCompra from './CestaCompra';
import ListaProductos from './ListaProductos';

const productos = [
  { nombre: 'Lajusticia colágeno con magnesio 450comp', precio: '14.35', imagen: '/lajusticia-colageno.jpg' },
  { nombre: 'Xhekpon® crema facial 40ml', precio: '6.49', imagen: '/xhekpon-crema.jpg' },
  { nombre: 'Cerave ® Crema Hidratante 340ml', precio: '11.70', imagen: '/cerave-crema.jpg' },
  { nombre: 'Hyabak solución 10ml', precio: '9.48', imagen: '/hyabak-solucion.jpg' },
  { nombre: 'Fotoprotector ISDIN® Fusion Water SPF 50+ 50ml', precio: '19.74', imagen: '/fotoprotector-isdin.jpg' },
  { nombre: 'Piz Buin® Allergy SPF50+ loción 200ml', precio: '8.65', imagen: '/piz-buin.jpg' },
];

function PaginaCompra() {
  const [carrito, setCarrito] = useState([]);

  // función para añadir un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className='container-componentes'>
      <ListaProductos productos={productos} carrito={carrito} agregarAlCarrito={agregarAlCarrito} />
      <CestaCompra carrito={carrito} />
    </div>
  );
}

export default PaginaCompra;
