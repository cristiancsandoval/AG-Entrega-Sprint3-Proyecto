import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginFacebook, loginGoogle, registroGoogle } from '../../actions/userAction'
import { logo } from '../../helpers/images'
import useForm from '../../hooks/useForm'

const Signup = () => {
  
    const dispatch = useDispatch()

    const [values, handleInputChange] = useForm({
        nombre:"",
        correo:"",
        contrasena:""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(registroGoogle(values.nombre, values.correo, values.contrasena))
    }

    const handleGoogle = () =>{
        dispatch(loginGoogle())
    }

    const handleFacebook = () =>{
        dispatch(loginFacebook())
    }

  return (
    <div className='cntr-registro'>
        <h1>Amazonas</h1>
        <img src={logo} alt='logo amazonas'/>
        <form onSubmit={handleSubmit} >
            <div>
                <label>Nombre</label>
                <input
                    type="text"
                    placeholder='Ingrese su correo electrónico'
                    name='nombre'
                    value={values.nombre}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Correo electrónico</label>
                <input
                    type="email"
                    placeholder='Ingrese su correo electrónico'
                    name='correo'
                    value={values.correo}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Contraseña</label>
                <input
                    type="password"
                    placeholder='Ingrese su contraseña'
                    name='contrasena'
                    value={values.contrasena}
                    onChange={handleInputChange}
                />
            </div>
            <button type='submit'>Crear cuenta</button>
        </form>
        <button onClick={handleGoogle} className='btn-google'>Continuar con Google</button>
        <button onClick={handleFacebook} className='btn-fb'>Continuar con Facebook</button>
        <p>¿Ya tienes una cuenta?</p>
        <Link to="/login">Inicia sesión aquí</Link>
    </div>
  )
    
}

export default Signup