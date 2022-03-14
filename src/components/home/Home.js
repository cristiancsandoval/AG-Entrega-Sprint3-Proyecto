import React from 'react'
import HeaderAmazonas from '../header/HeaderAmazonas'
import ProductosHome from './ProductosHome'

const Home = () => {

  return (
    <div className='cntr-main'>
       <HeaderAmazonas/>
       <ProductosHome/>
    </div>
  )
}

export default Home