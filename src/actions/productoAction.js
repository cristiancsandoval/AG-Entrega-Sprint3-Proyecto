import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { typesProducto } from "../types/types";


export const agregarProductos = (data) =>{
    return {
        type: typesProducto.cargarProductos,
        payload: data
    }
}

export const dataProductos = () =>{

    return async (dispatch)=>{
        const querySnapshot = await getDocs(collection(db, "productos"))
        const data = [];
        querySnapshot.forEach((doc)=>{
            data.push({
                ...doc.data(),
                id: doc.id
            })
        });
        dispatch(agregarProductos(data));
    }

}

export const nuevoProducto = (producto) =>{
    return{
        type: typesProducto.nuevoProducto,
        payload: producto
    }
}

export const deleteProducto = (id) =>{
    return{
        type: typesProducto.eliminarProducto,
        payload: id
    }
}

export const eliminarProducto = (id) =>{

    return (dispatch)=>{

        deleteDoc(doc(db, "productos",id));
        dispatch(deleteProducto(id));

    }

}