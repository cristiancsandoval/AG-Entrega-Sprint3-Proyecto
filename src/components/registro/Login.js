import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginCorreoContrasena, loginFacebook, loginGoogle } from '../../actions/userAction'
import { logo } from '../../helpers/images'
import useForm from '../../hooks/useForm'

const Login = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        correo:"",
        contrasena:""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(loginCorreoContrasena(values.correo, values.contrasena))
        reset()
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
            <button type='submit'>Iniciar sesión</button>
        </form>
        <button onClick={handleGoogle} className='btn-google'>Continuar con Google</button>
        <button onClick={handleFacebook} className='btn-fb'>Continuar con Facebook</button>
        <p>¿Aún no tienes cuenta?</p>
        <Link to="/signup"> Registrate aquí</Link>
    </div>
  )
}

export default Login