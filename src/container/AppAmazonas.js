import React from 'react'
import { Provider } from 'react-redux'
import FooterAmazonas from '../components/footer/FooterAmazonas'
import RouterApp from '../routers/RouterApp'
import { store } from '../store/store'

const AppAmazonas = () => {
  return (
      <Provider store={store}>
          <RouterApp/>
          <FooterAmazonas/>
      </Provider>
  )
}

export default AppAmazonas