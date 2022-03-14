import React from 'react'
import { Link } from 'react-router-dom'
import { departamentos } from '../../helpers/departamentos'

const BarraDepartamentos = () => {

  return (
    <div>
        <Link to='/'>Todo</Link>
        <Link to='/home/losmasvendidos'>Los más vendidos</Link>
        {
            departamentos.map(dep=>(
                <Link to={`/home/${dep.id}`} key={dep.id}>
                    {dep.departamento}
                </Link>
            ))
        }
    </div>
  )
}

export default BarraDepartamentos