import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { agregarCarrito } from '../../actions/carritoAction';

const Caracteristicas = ({info}) => {
    
    const {nombre, marca, precio, color, estilo, caracteristicas, imagenes, id} = info;
    const [foto, setFoto] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        setFoto(0)
    }, [imagenes])

    const comprarAhora = () =>{
        dispatch(agregarCarrito(id));
        navigate('/carrito')
    }

    return (
        <section className='cntr-producto'>
            <div className='cntr-imagenes'>
                <div>
                    {imagenes!==undefined &&
                        info.imagenes.map((img, index)=>(
                            <button key={index} onClick={()=>setFoto(index)}>
                                <img src={img} alt='foto producto'/>
                            </button>
                        ))
                    }
                </div>
                <div>
                    {imagenes!==undefined &&
                        <img src={imagenes[foto]} alt='foto producto'/>
                    }
                </div>
            </div>
            <div className='cntr-info'>
                <div>
                    <div>
                        <h2>{nombre}</h2>
                        <p>Marca: {marca}</p>
                    </div>
                    <div>
                        <h6>Precio: 
                            <span className='precio'>{`$${precio}`}</span>. 
                            <span> Envío GRATIS.</span>
                        </h6>
                        <p>Color: <span>{color}</span></p>
                        <p>Estilo: <span>{estilo}</span></p>
                    </div>
                    <div>
                        <h6 className='acerca'>Acerca de este articulo</h6>
                        {caracteristicas!==undefined &&
                            caracteristicas.map((car, index)=>(
                                <p key={index}>- {car}</p>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <span className='precio'>{`$${precio}`}</span>
                    <span>Envío GRATIS</span>
                    <p>Llega: <span>entre 4 y 6 días</span></p>
                    <button onClick={()=>dispatch(agregarCarrito(id))}>
                        Agregar al carrito
                    </button>
                    <button onClick={()=>comprarAhora()}>
                        Comprar ahora
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Caracteristicas