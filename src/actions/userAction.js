import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { google } from "../firebase/firebaseConfig"
import { typesUser } from "../types/types"


export const login = (nombre, correo) =>{

    return{
        type: typesUser.login,
        payload:{
            nombre,
            correo
        }
    }

}

export const loginGoogle = () => {

    return(dispatch)=>{
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(({user})=>{
                dispatch(login(user.displayName, user.email))
            })
            .catch((error)=>{
                console.log(error)
            })
    }

}

export const loginCorreoContrasena = (correo, contrasena) =>{

    return (dispatch)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, correo, contrasena)
            .then(({user})=>{
                dispatch(login(user.displayName, user.email))
            })
            .catch((error)=>{
                console.log(error)
            })
    }

}

export const registroGoogle = (nombre, correo, contrasena) =>{

    return(dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, correo, contrasena)
            .then(async({user})=>{
                await updateProfile(auth.currentUser, {displayName: nombre})
                dispatch(login(user.displayName, user.email))
            })
            .catch((error)=>{
                console.log(error)
            })
    }

}

export const loginFacebook = () =>{

    return(dispatch)=>{
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(({user})=>{
                dispatch(login(user.displayName, user.email))
            })
            .catch((error)=>{
                console.log(error)
            })
    }
}

export const logout = () => {

    return(dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(() => {
            dispatch(cerrarSesion())
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const cerrarSesion = () =>{

    return{
        type: typesUser.logut
    }

}