import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logo, shopCart } from '../../helpers/images'
import BarraDepartamentos from './BarraDepartamentos'
import Identificacion from './Identificacion'
import SearchBar from './SearchBar'
import Ubicacion from './Ubicacion'

const HeaderAmazonas = () => {

  const navigate = useNavigate()

  return (
    <header>
      <nav>
        <div onClick={()=>navigate('/')} className='link'>
          <h1>Amazonas</h1>
          <img src={logo} alt='logo amazonas'/>
        </div>
        <Ubicacion/>
        <SearchBar/>
        <Identificacion/>
        <div onClick={()=>navigate('/carrito')} className='link'>
          <img src={shopCart} alt="shopcart icon"/>
          <h5>Carrito</h5>
        </div>
      </nav>
      <BarraDepartamentos/>
    </header>
  )
}

export default HeaderAmazonas