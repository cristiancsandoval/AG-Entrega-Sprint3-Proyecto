import React from 'react'

const Opiniones = ({opiniones}) => {

    const cantOpiniones = opiniones!==undefined
        ? opiniones.length
        : 0

  return (
    <section className='cntr-seccion-producto'>
        <h5 className='subtitulo'>Opiniones de clientes</h5>
        <div className='cntr-opiniones'>
            {opiniones!==undefined &&
                opiniones.map((op, index)=>(
                    <div key={index}>
                        <div>
                            <div>
                                <img src={op.imagen} alt='foto cliente'/>
                            </div>
                            <h6>{op.nombre}</h6>
                        </div>
                        <p>{op.opinion}</p>
                    </div>
                ))
            }
        </div>
        {cantOpiniones===0 &&
            <p>No se han hecho opiniones sobre el producto</p>
        }
    </section>
  )
}

export default Opiniones