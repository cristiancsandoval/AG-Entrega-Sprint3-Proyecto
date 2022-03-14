import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import HeaderAmazonas from '../header/HeaderAmazonas'
import ProdCarrito from './ProdCarrito'

const Carrito = () => {

  const {productos} = useSelector((store)=>store.producto)
  const {carrito} = useSelector((store)=>store.carrito)

  const [prodCarrito, setProdCarrito] = useState([]);

  useEffect(()=>{

    if((productos!==undefined)&&(carrito!==undefined)){

      let nuevoArreglo = []

      carrito.forEach((prod)=>{

        const objetivo = productos.find((p)=>(p.id===prod.id));
        nuevoArreglo.push({
            ...objetivo,
            cantidad: prod.cantidad
        });

      })

      setProdCarrito(nuevoArreglo)

    }

  },[carrito, productos])

  const calcularTotal = () =>{

      let total = 0

      prodCarrito.forEach(prod => {
          total = total + Number(prod.precio)*prod.cantidad
      });

      return String(total)

  }

  return (
    <main className='cntr-main'>
        <HeaderAmazonas/>
        <div className='titulo-home'>
          <h3>Carrito</h3>
          {prodCarrito.length===0 &&
              <h4>Aún no se han agregado productos al carrito</h4>
          } 
          {prodCarrito.length!==0 &&
            <h4>{String(prodCarrito.length)} productos agregados</h4>
          }
        </div>
        <div className='cntr-carrito'>
          {
            prodCarrito.map((prod)=>(
                <ProdCarrito producto={prod} key={prod.id}/>
            ))
          }
        </div>
        {prodCarrito.length!==0 &&
          <div className='total-carrito'>
            <div>
              <h6>Total carrito: <span>{'$'}{calcularTotal()}</span></h6>
              <button>Terminar compra</button>
            </div>
          </div>
        }
    </main>
  )
}

export default Carrito