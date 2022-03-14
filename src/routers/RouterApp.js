import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { dataProductos } from '../actions/productoAction'
import { login } from '../actions/userAction'
import Administracion from '../components/administracion/Administracion'
import Carrito from '../components/carrito/Carrito'
import Home from '../components/home/Home'
import Producto from '../components/producto/Producto'
import Login from '../components/registro/Login'
import Signup from '../components/registro/Signup'
import { admins } from '../helpers/admins'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const RouterApp = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {

        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.displayName, user.email));
                setIsLoggedIn(true);
                if(admins.includes(user.email)){
                    setIsAdmin(true);
                }
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });

        dispatch(dataProductos());

  }, [dispatch, setChecking, setIsLoggedIn])

  if(checking){
    return(
      <h2>Cargando...</h2>
    )
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={
                <PublicRoute isAuthenticated={isLoggedIn} redirect="/">
                    <Login/>
                </PublicRoute>
            }/>
            <Route path='/signup' element={
                <PublicRoute isAuthenticated={isLoggedIn} redirect="/">
                    <Signup/>
                </PublicRoute>
            }/>
            <Route path='/carrito' element={
                <PrivateRoute isAuthenticated={isLoggedIn} redirect="/login">
                    <Carrito/>
                </PrivateRoute>
            }/>
            <Route path='/administracion' element={
                <PrivateRoute isAuthenticated={isAdmin} redirect="/">
                    <Administracion/>
                </PrivateRoute>
            }/>
            <Route path='/producto/:id' element={<Producto/>}/>
            <Route path='/home/:departamento' element={<Home/>}/>
            <Route path='*' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterApp