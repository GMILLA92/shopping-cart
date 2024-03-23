import React from 'react'
import { render, screen } from '@testing-library/react'
import CestaCompra from '../components/CestaCompra'
import '@testing-library/jest-dom/extend-expect'

const productos = [
  {
    nombre: 'Lajusticia colágeno con magnesio 450comp',
    precio: '14.35',
    imagen: '/lajusticia-colageno.jpg'
  },
  {
    nombre: 'Xhekpon® crema facial 40ml',
    precio: '6.49',
    imagen: '/xhekpon-crema.jpg'
  },
  {
    nombre: 'Cerave ® Crema Hidratante 340ml',
    precio: '11.70',
    imagen: '/cerave-crema.jpg'
  },
  {
    nombre: 'Hyabak solución 10ml',
    precio: '9.48',
    imagen: '/hyabak-solucion.jpg'
  },
  {
    nombre: 'Fotoprotector ISDIN® Fusion Water SPF 50+ 50ml',
    precio: '19.74',
    imagen: '/fotoprotector-isdin.jpg'
  },
  {
    nombre: 'Piz Buin® Allergy SPF50+ loción 200ml',
    precio: '8.65',
    imagen: '/piz-buin.jpg'
  }
]

// listado de productos con un precio vacío
const productosFail = [
  {
    nombre: 'Lajusticia colágeno con magnesio 450comp',
    precio: '',
    imagen: '/lajusticia-colageno.jpg'
  },
  {
    nombre: 'Xhekpon® crema facial 40ml',
    precio: '6.49',
    imagen: '/xhekpon-crema.jpg'
  },
  {
    nombre: 'Cerave ® Crema Hidratante 340ml',
    precio: '11.70',
    imagen: '/cerave-crema.jpg'
  },
  {
    nombre: 'Hyabak solución 10ml',
    precio: '9.48',
    imagen: '/hyabak-solucion.jpg'
  },
  {
    nombre: 'Fotoprotector ISDIN® Fusion Water SPF 50+ 50ml',
    precio: '19.74',
    imagen: '/fotoprotector-isdin.jpg'
  },
  {
    nombre: 'Piz Buin® Allergy SPF50+ loción 200ml',
    precio: '8.65',
    imagen: '/piz-buin.jpg'
  }
]

//l istado de productos con un valor no numérico en el precio
const productosFail2 = [
  {
    nombre: 'Lajusticia colágeno con magnesio 450comp',
    precio: 's',
    imagen: '/lajusticia-colageno.jpg'
  },
  {
    nombre: 'Xhekpon® crema facial 40ml',
    precio: '6.49',
    imagen: '/xhekpon-crema.jpg'
  },
  {
    nombre: 'Cerave ® Crema Hidratante 340ml',
    precio: '11.70',
    imagen: '/cerave-crema.jpg'
  },
  {
    nombre: 'Hyabak solución 10ml',
    precio: '9.48',
    imagen: '/hyabak-solucion.jpg'
  },
  {
    nombre: 'Fotoprotector ISDIN® Fusion Water SPF 50+ 50ml',
    precio: '19.74',
    imagen: '/fotoprotector-isdin.jpg'
  },
  {
    nombre: 'Piz Buin® Allergy SPF50+ loción 200ml',
    precio: '8.65',
    imagen: '/piz-buin.jpg'
  }
]

// listado de productos con un string vacío en el nombre
const productosFail3 = [
  {
    nombre: '',
    precio: 's',
    imagen: '/lajusticia-colageno.jpg'
  },
  {
    nombre: 'Xhekpon® crema facial 40ml',
    precio: '6.49',
    imagen: '/xhekpon-crema.jpg'
  },
  {
    nombre: 'Cerave ® Crema Hidratante 340ml',
    precio: '11.70',
    imagen: '/cerave-crema.jpg'
  },
  {
    nombre: 'Hyabak solución 10ml',
    precio: '9.48',
    imagen: '/hyabak-solucion.jpg'
  },
  {
    nombre: 'Fotoprotector ISDIN® Fusion Water SPF 50+ 50ml',
    precio: '19.74',
    imagen: '/fotoprotector-isdin.jpg'
  },
  {
    nombre: 'Piz Buin® Allergy SPF50+ loción 200ml',
    precio: '8.65',
    imagen: '/piz-buin.jpg'
  }
]

describe('CestaCompra Component', () => {
  it('renders cart items correctly and displays total price', () => {
    render(<CestaCompra carrito={productos} />)

    // Check if each product name is rendered
    productos.forEach(producto => {
      const productNameElement = screen.getByText(producto.nombre)
      expect(productNameElement).toBeInTheDocument()
    })

    // Check if the correct total price is displayed
    const totalPrice = productos.reduce(
      (acc, producto) => acc + parseFloat(producto.precio),
      0
    )
    const expectedTotalPrice = totalPrice.toLocaleString('es-ES') + ' €'
    const totalPriceElement = screen.getByText(expectedTotalPrice)
    expect(totalPriceElement).toBeInTheDocument()
  })
})
describe('CestaCompra Component', () => {
  it('renders cart items correctly and displays total price', () => {
    render(<CestaCompra carrito={productosFail} />)

    // comprobar si el nombre del producto se renderiza. Si el nombre es un string vacío buscar por "Nombre del producto no disponible"
    productosFail.forEach(producto => {
      const productNameElement =
        producto.nombre !== ''
          ? screen.getByText(producto.nombre)
          : screen.getByText('Nombre del producto no disponible')
      expect(productNameElement).toBeInTheDocument()
    })

    // comprobar si se renderiza el precio total correcto

    const totalPrice = productos
      .filter(
        producto =>
          producto.precio !== '' && !isNaN(parseFloat(producto.precio))
      ) // excluir productos con precios vacíos o no numéricos
      .reduce((acc, producto) => acc + parseFloat(producto.precio), 0)

    const expectedTotalPrice = totalPrice.toLocaleString('es-ES') + ' €'
    const totalPriceElement = screen.queryByText(expectedTotalPrice)

    if (totalPriceElement) {
      // buscar si el precio total se encuentra por pantalla
      expect(totalPriceElement).toBeInTheDocument()
    } else {
      // si el precio total no se encuentra, buscar por el mensaje "Precio no disponible"
      const priceUnavailableMessage = screen.getByText('Precio no disponible')
      expect(priceUnavailableMessage).toBeInTheDocument()
    }
  })
})
describe('CestaCompra Component', () => {
  it('renders cart items correctly and displays total price', () => {
    render(<CestaCompra carrito={productosFail2} />)

    // comprobar si se renderiza el nombre cada producto
    productosFail2.forEach(producto => {
      const productNameElement =
        producto.nombre !== ''
          ? screen.getByText(producto.nombre)
          : screen.getByText('Nombre del producto no disponible')
      expect(productNameElement).toBeInTheDocument()
    })

    // comprobar si el precio correcto total se muestra por pantalla

    const totalPrice = productos
      .filter(
        producto =>
          producto.precio !== '' && !isNaN(parseFloat(producto.precio))
      ) // excluir productos con precio vacío o no numérico
      .reduce((acc, producto) => acc + parseFloat(producto.precio), 0)

    const expectedTotalPrice = totalPrice.toLocaleString('es-ES') + ' €'
    const totalPriceElement = screen.queryByText(expectedTotalPrice)

    if (totalPriceElement) {
      // si el precio total se encuentra
      expect(totalPriceElement).toBeInTheDocument()
    } else {
      // si el precio total no se encuentra, buscar por el mensaje "Precio no disponible"
      const priceUnavailableMessage = screen.getByText('Precio no disponible')
      expect(priceUnavailableMessage).toBeInTheDocument()
    }
  })
})
describe('CestaCompra Component', () => {
  it('renders cart items correctly and displays total price', () => {
    render(<CestaCompra carrito={productosFail3} />)

    // comprobar si se renderiza el nombre cada producto
    productosFail3.forEach(producto => {
      const productNameElement =
        producto.nombre !== ''
          ? screen.getByText(producto.nombre)
          : screen.getByText('Nombre del producto no disponible')
      expect(productNameElement).toBeInTheDocument()
    })

    // comprobar si el precio correcto total se muestra por pantalla

    const totalPrice = productos
      .filter(
        producto =>
          producto.precio !== '' && !isNaN(parseFloat(producto.precio))
      ) // excluir productos con precio vacío o no numérico
      .reduce((acc, producto) => acc + parseFloat(producto.precio), 0)

    const expectedTotalPrice = totalPrice.toLocaleString('es-ES') + ' €'
    const totalPriceElement = screen.queryByText(expectedTotalPrice)

    if (totalPriceElement) {
      // si el precio total se encuentra
      expect(totalPriceElement).toBeInTheDocument()
    } else {
      // si el precio total no se encuentra, buscar por el mensaje "Precio no disponible"
      const priceUnavailableMessage = screen.getByText('Precio no disponible')
      expect(priceUnavailableMessage).toBeInTheDocument()
    }
  })
})
