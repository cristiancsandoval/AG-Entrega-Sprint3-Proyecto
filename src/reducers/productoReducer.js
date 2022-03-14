import {typesProducto} from "../types/types"

export const productoReducer = (state={}, action) => {
    
    switch(action.type){
        case typesProducto.cargarProductos:
            return {
                ...state,
                productos: action.payload
            }
        case typesProducto.nuevoProducto:
            const idTemp = Math.round(Math.random()*1000)
            return{
                ...state,
                productos:[
                    {
                        ...action.payload,
                        id: idTemp
                    },
                    ...state.productos
                ]
            }
        case typesProducto.eliminarProducto:
            const nuevoArreglo = state.productos.filter((prod)=>(prod.id!==action.payload))
            return{
                ...state,
                productos:nuevoArreglo
            }
        default: 
            return state
    }
}