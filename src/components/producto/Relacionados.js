import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { agregarCarrito } from '../../actions/carritoAction'

const Relacionados = ({departamento, categoria}) => {

    const {id} = useParams()
    const {productos} = useSelector(store=>store.producto)
    const mismoDept = (productos!==undefined) 
        ? productos.filter(prod=>((prod.departamento===departamento)&&(prod.id!==id)))
        : []
    const mismaCategoria = mismoDept.filter((prod=>((prod.categoria===categoria)&&(prod.id!==id))))
    const dispatch = useDispatch()
    const cantRelacionados = 4;
    
    const listaRelacionados = () =>{

        const total = mismoDept.length;
        const categ = mismaCategoria.length;
        let lista = []

        if(categ===0){
            if(total>cantRelacionados){
                lista = mismoDept.splice(0,cantRelacionados)
            } else{
                lista = mismoDept;
            }
        } else{
            if(categ>=cantRelacionados){
                lista = mismaCategoria.splice(0,cantRelacionados)
            }
            else{
                const diferencia = cantRelacionados - categ;
                const extra = mismoDept.splice(0, diferencia);
                lista = mismaCategoria;
                extra.map((ex)=>(
                    lista.push(ex)
                ))
            }
        }

        return lista;

    }

  return (
    <section className='cntr-seccion-producto'>
        <h5 className='subtitulo'>Productos relacionados con este artículo</h5>
        <div className='productos-home'>
            {
                listaRelacionados().map((prod, index)=>(
                    <div key={index}>
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
        {listaRelacionados().length===0 &&
            <p>No hay productos relacionados</p>
        }
    </section>
  )
}

export default Relacionados