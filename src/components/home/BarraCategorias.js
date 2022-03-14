import React from 'react'

const BarraCategorias = ({departamento, categoria}) => {

  const categorias = departamento !== undefined
    ? departamento.categorias
    : departamento

  if(!departamento){
    return(<></>)
  }

  return (
    <div className='barra-categ'>
        <button onClick={()=>(categoria(""))}>{departamento.departamento}</button>
        {
            categorias.map((categ, index)=>(
                <button key={index} onClick={()=>(categoria(categ))}>
                    {categ}
                </button>
            ))
        }
    </div>
  )
}

export default BarraCategorias