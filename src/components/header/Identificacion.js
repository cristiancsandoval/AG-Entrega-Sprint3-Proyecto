import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/userAction'

const Identificacion = () => {

  const {user} = useSelector((store)=>store.user)
  const dispatch = useDispatch()
  
  const nombre = user.length===0
    ? "identificate"
    : user.nombre

  return (
    <div className='hdr-identificacion'>
        <h5>Hola, {nombre}</h5>
        {user.length===0 &&
            <Link to='/login'>Iniciar sesión</Link>
        }
        {user.length!==0 &&
            <p onClick={()=>dispatch(logout())}>
              Cerrar sesión
            </p>
        }
    </div>
  )
}

export default Identificacion