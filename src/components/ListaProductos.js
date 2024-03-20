import './ListaProductos.css'
import React from 'react'

function ListaProductos () {
  return (
    <div>
      <ul className='listaProductos'>
        <li className='listaProductos__item'>
          <span className='listaProductos__nombre'>
            Lajusticia colágeno con magnesio 450comp
          </span>
          <span className='listaProductos__precio'>14,35 €</span>
          <span className='listaProductos__icono'>
            <button>
              <img
                className='carroCompra'
                src='../add-to-cart.png'
                alt='cartIcon'
              ></img>
            </button>
          </span>
        </li>
        <li className='listaProductos__item'>
          <span className='listaProductos__nombre'>
            Xhekpon® crema facial 40ml
          </span>
          <span className='listaProductos__precio'>6,49 €</span>
          <span className='listaProductos__icono'>
            <button>
              <img
                className='carroCompra'
                src='../add-to-cart.png'
                alt='cartIcon'
              ></img>
            </button>
          </span>
        </li>
        <li className='listaProductos__item'>
          <span className='listaProductos__nombre'>
            Cerave ® Crema Hidratante 340ml
          </span>
          <span className='listaProductos__precio'>11,70 €</span>
          <span className='listaProductos__icono'>
            <button>
              <img
                className='carroCompra'
                src='../add-to-cart.png'
                alt='cartIcon'
              ></img>
            </button>
          </span>
        </li>
        <li className='listaProductos__item'>
          <span className='listaProductos__nombre'>Hyabak solución 10ml</span>
          <span className='listaProductos__precio'>9,48 €</span>
          <span className='listaProductos__icono'>
            <button>
              <img
                className='carroCompra'
                src='../add-to-cart.png'
                alt='cartIcon'
              ></img>
            </button>
          </span>
        </li>
        <li className='listaProductos__item'>
          <span className='listaProductos__nombre'>
            Fotoprotector ISDIN® Fusion Water SPF 50+ 50ml
          </span>
          <span className='listaProductos__precio'>19,74 €</span>
          <span className='listaProductos__icono'>
            <button>
              <img
                className='carroCompra'
                src='../add-to-cart.png'
                alt='cartIcon'
              ></img>
            </button>
          </span>
        </li>
        <li className='listaProductos__item'>
          <span className='listaProductos__nombre'>
            Piz Buin® Allergy SPF50+ loción 200ml
          </span>
          <span className='listaProductos__precio'>8,65 €</span>
          <span className='listaProductos__icono'>
            <button>
              <img
                className='carroCompra'
                src='../add-to-cart.png'
                alt='cartIcon'
              ></img>
            </button>
          </span>
        </li>
        {/*Podríamos incluir tantos productos como queramos*/}
      </ul>
    </div>
  )
}

export default ListaProductos
