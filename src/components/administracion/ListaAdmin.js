import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eliminarProducto } from '../../actions/productoAction'
import { deleteIcon } from '../../helpers/images'

const ListaAdmin = () => {

    const {productos} = useSelector((store)=>store.producto)
    const lista = productos!==undefined ? productos : []

    const dispatch = useDispatch()

  return (
    <div>
        <h3>Lista de productos</h3>
        <div>
            {
                lista.map((prod)=>(
                    <div key={prod.id}>
                        <div>
                            <img src={prod.imagenes[0]} alt='Imagen producto'/>
                        </div> 
                        <h6>{prod.nombre}</h6>
                        <button onClick={()=>dispatch(eliminarProducto(prod.id))}>
                            <img src={deleteIcon} alt='delete icon'/>
                        </button>
                    </div>
                ))
            }
            {lista.length===0 &&
                <h6>Cargando productos...</h6>
            }
        </div>
    </div>
  )
}

export default ListaAdmin