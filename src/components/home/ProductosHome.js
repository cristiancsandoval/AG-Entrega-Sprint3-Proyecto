import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { agregarCarrito } from '../../actions/carritoAction'
import { departamentos } from '../../helpers/departamentos'
import BarraCategorias from './BarraCategorias'

const ProductosHome = () => {

    const {productos} = useSelector(store=>store.producto)
    const {departamento} = useParams()
    const [lista, setLista] = useState(productos)
    const [dep, setDep] = useState("Todos los productos")
    const [categoria, setCategoria] = useState("")
    const dispatch = useDispatch();

    const objetoDepartamento = departamentos.find((dep)=>(dep.id===departamento))

    useEffect(()=>{

        setCategoria("")
        if(!objetoDepartamento){
          if(departamento==="losmasvendidos"){
            const filtrado = productos!==undefined 
              ? productos.filter((prod)=>(prod.masVendidos))
              : productos
            setLista(filtrado)
            setDep("Productos más vendidos")
          }else{
            setLista(productos)
            setDep("Todos los productos")
          }
        }
        else{
          const filtrado = productos!==undefined 
              ? productos.filter((prod)=>(prod.departamento===objetoDepartamento.departamento))
              : productos
          setLista(filtrado)
          setDep(objetoDepartamento.departamento)
        }

    }, [productos, departamento, objetoDepartamento])
    
    if(lista===undefined){
      return(
        <h5>Cargando productos...</h5>
      )
    }

  return (
    <main className='cntr-home'>
      <BarraCategorias departamento={(objetoDepartamento)} categoria={(setCategoria)}/>
      <div className='titulo-home'>
          <h3>{dep}</h3>
          <h4>{categoria}</h4>
      </div>
      <div className='productos-home'>
        { 
          lista.filter((prod)=>(prod.categoria.includes(categoria))).map((prod)=>(
              <div key={prod.id}>
                  <div>
                    <img src={prod.imagenes[0]} alt="foto producto"/>
                  </div>
                  <div>
                    <Link to={`/producto/${prod.id}`}>{prod.nombre}</Link>
                    <p>{`$${prod.precio}`}</p>
                    <button onClick={()=>dispatch(agregarCarrito(prod.id))} >Agregar al carrito</button>
                  </div>
              </div>
          ))
        }
      </div>
    </main>
  )
}

export default ProductosHome