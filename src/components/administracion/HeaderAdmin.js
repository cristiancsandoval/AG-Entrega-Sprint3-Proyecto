import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logo } from '../../helpers/images'

const HeaderAdmin = () => {

  const navigate = useNavigate()

  return (
    <header>
        <nav>
            <div onClick={()=>navigate('/')}>
              <h1>Amazonas</h1>
              <img src={logo} alt='logo amazonas'/>
            </div>
        </nav>
    </header>
  )
}

export default HeaderAdmin