import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import Caracteristicas from './Caracteristicas'
import Opiniones from './Opiniones'
import Relacionados from './Relacionados'

const Detalle = () => {

    const {id} = useParams()
    const {productos} = useSelector(store=>store.producto)
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(false)
    const [invalido, setInvalido] = useState(false)

    useEffect(()=>{

        if(productos===undefined){
            setCargando(true)
        } else{
            const prodObjetivo = productos.find((prod)=>(prod.id===id));
            if(prodObjetivo!==undefined){
              setProducto(prodObjetivo)
              setCargando(false)
            } else{
              setInvalido(true)
              setCargando(false)
            }
            
        }

    }, [productos, id])

    if(cargando){
      return(
        <h3>Cargando producto...</h3>
      )
    }

    if(invalido){
      return(
        <Navigate to='/'/>
      )
    }

    const {departamento, categoria} = producto;

    return (
      <main className='det-producto'>
        <div className='titulo-home'>
          <h3>{departamento}</h3>
          <h4>{categoria}</h4>
        </div>
        <Caracteristicas info={producto}/>
        <Relacionados departamento={departamento} categoria={categoria}/>
        <Opiniones opiniones={producto.opiniones}/>
      </main>
    )
}

export default Detalle