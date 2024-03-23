import { render, screen } from '@testing-library/react';
import React from 'react';
import ListaProductos from '../components/ListaProductos';
import '@testing-library/jest-dom/extend-expect';

test('renders all product names correctly', () => {
  
  const carrito = []
  const productos = [
    {
      nombre: '',
      precio: '10.00',
      imagen: '/product-a.jpg'
    },
    {
      nombre: 'Product B',
      precio: '15.00',
      imagen: '/product-b.jpg'
    }
  ];

  // renderizar el componente
  render(<ListaProductos productos={productos} carrito={carrito}/>);

  // comprobar si el nombre de cada producto se renderiza. Si el nombre es un string vacío buscar por "Nombre del producto no disponible"
  productos.forEach(producto => {
    const productNameElement = producto.nombre !== '' ? screen.getByText(producto.nombre) : screen.getByText('Nombre del producto no disponible')
    expect(productNameElement).toBeInTheDocument()
  })

});
