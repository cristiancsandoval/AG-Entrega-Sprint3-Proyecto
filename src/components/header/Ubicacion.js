import React, { useEffect, useState } from 'react'
import { gps } from '../../helpers/images';

const Ubicacion = () => {

    const [ubicacion, setUbicacion] = useState()

    const resultado = ubicacion===undefined
      ? "no disponible"
      : "guardada"

    useEffect(()=>{

      navigator.geolocation.getCurrentPosition(
        function(position){
            setUbicacion(position.coords)
        },
        function(error){
            console.log(error)
        },
        {
            enableHighAccuracy: true
        }
      );

    }, [])

  return (
    <div>
        <div>
            <img src={gps} alt='gps icon'/>
            <p>Ubicacion {resultado}</p>
        </div>
    </div>
  )
}

export default Ubicacion