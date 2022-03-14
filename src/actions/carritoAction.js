import { typesCarrito } from "../types/types"


export const agregarCarrito = (id) =>{
    return{
        type: typesCarrito.agregarCarrito,
        payload: id
    }
}

export const cambiarCantidad = (id, cant)=>{
    return{
        type: typesCarrito.cambiarCantidad,
        payload:{
            id,
            cant
        }
    }
}

export const eliminarCarrito = (id) =>{
    return{
        type: typesCarrito.eliminarCarrito,
        payload: id
    }
}