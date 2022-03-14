import React from 'react'
import {logo} from '../../helpers/images'
import { seccionesFooter } from '../../helpers/seccionesFooter'

const FooterAmazonas = () => {
  return (
    <footer>
        <div>
            {
                seccionesFooter.map((sec, index)=>(
                    <div key={index}>
                        <h5>{sec.seccion}</h5>
                        {sec.enlaces.map((enlace, index)=>(
                            <a href='/' key={index}>
                                {enlace}
                            </a>
                        ))}
                    </div>
                ))
            }
        </div>
        <div>
            <h2>Amazonas</h2>
            <img src={logo} alt="logo amazonas"/>
            <a href='/administracion'>Ir al panel de administradores</a>
        </div>
    </footer>
  )
}

export default FooterAmazonas