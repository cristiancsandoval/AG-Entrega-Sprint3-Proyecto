import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { cambiarCantidad } from '../../actions/carritoAction';

const ProdCarrito = ({producto}) => {

    const {nombre, marca, precio, imagenes, id} = producto;
    const [cantidad, setCantidad] = useState(1)
    const totalProd = String(Number(precio)*cantidad);
    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(cambiarCantidad(id, cantidad))

    },[cantidad, id, dispatch])

    const restarCantidad = () =>{
        if(cantidad>1){
            setCantidad(cantidad-1)
        }
    }

  return (
    <div>
        <div className='cntr-img'>
            <img src={imagenes[0]} alt='imagen producto'/>
        </div>
        <div className='cntr-nom'>
            <h6>{nombre}</h6>
            <p>Marca: {marca}</p>
        </div>
        <div className='cntr-cant'>
            <label>Cantidad</label>
            <div>
                <button onClick={()=>restarCantidad()} ><span>-</span></button>
                <p>{cantidad}</p>
                <button onClick={()=>setCantidad(cantidad+1)} ><span>+</span></button>
            </div>
        </div>
        <div className='cntr-total'>
            <p>Total:</p>
            <span>{'$'}{totalProd}</span>
        </div>
    </div>
  )
}

export default ProdCarrito