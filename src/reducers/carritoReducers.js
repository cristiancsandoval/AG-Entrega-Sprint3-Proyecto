import { typesCarrito } from "../types/types";


export const carritoReducer = (state={carrito:[]}, action) =>{
    switch(action.type){
        case typesCarrito.agregarCarrito:
            const arreglo = state.carrito.filter((prod)=>(prod.id!==action.payload))
            return{
                ...state,
                carrito: [
                    ...arreglo,
                    {
                        id: action.payload,
                        cantidad: 1
                    }
                    
                ]
            }
        case typesCarrito.cambiarCantidad:
            const objeto = state.carrito.find((prod)=>(prod.id===action.payload.id)).id;
            const nuevoArreglo = state.carrito.filter((prod)=>(prod.id!==action.payload.id));
            return{
                ...state,
                carrito: [
                    ...nuevoArreglo,
                    {
                        id: objeto,
                        cantidad: action.payload.cant
                    }
                ]
            }
        default:
            return state
    }
}