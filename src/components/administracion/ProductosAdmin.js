import React, { useState } from 'react'
import { addDoc,collection } from "@firebase/firestore";
import { departamentos } from '../../helpers/departamentos';
import { fileUpload } from '../../helpers/fileUpload';
import useForm from '../../hooks/useForm'
import { db } from '../../firebase/firebaseConfig';
import ListaAdmin from './ListaAdmin';
import { useDispatch } from 'react-redux';
import { nuevoProducto } from '../../actions/productoAction';

const ProductosAdmin = () => {

    const [imgStatus, setImgStatus] = useState("No se han cargado fotos del producto");
    const [imagenes, setImagenes] = useState([])
    const [caracteristicas, setCaracteristicas] = useState([])
    const [masVendidos, setMasVendidos] = useState(false)
    const [opiniones, setOpiniones] = useState([])
    const [enviando, setEnviando] = useState(false);
    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        nombre:"",
        marca:"",
        precio:"",
        color: "",
        estilo: "",
        departamento: "",
        categoria: "",
        caracteristica:"",
        nombreCliente:"",
        fotoCliente:"",
        opinion:""
    })

    let {nombre, marca, precio, color, estilo, departamento, categoria, nombreCliente, fotoCliente, opinion, caracteristica} = values;

    const categorias = (departamento!=="") && (departamento!=="Seleccionar departamento")
        ? departamentos.find((dep)=>(dep.departamento===departamento)).categorias
        : [];

    const subirImagenes = (e) =>{
        e.preventDefault();
        document.getElementById("imagenInput").click();
    }

    const handleImagenes = () =>{
        setImgStatus("Cargando imágenes...")
        const imgsInput = document.getElementById("imagenInput")
        const cantidadImg = (imgsInput.files.length);
        let imagenesCargadas = [...imagenes];
        for(let i=0; i < cantidadImg; i++){
            fileUpload(imgsInput.files[i])
                .then((response)=>{
                    imagenesCargadas.splice(0,0,response);
                    setImagenes(imagenesCargadas)
                    setImgStatus(`${String(imagenesCargadas.length)} fotos cargadas`)
                })
                .catch((e)=>{
                    console.log(e)
                })
        }
    }

    const agregarCaracteristica = (e) =>{
        e.preventDefault()
        setCaracteristicas([...caracteristicas, caracteristica])
        caracteristica = ""
    }

    const agregarOpinion = (e) =>{
        e.preventDefault();
        const newOpinion = {
            nombre: nombreCliente,
            imagen: fotoCliente,
            opinion: opinion
        }
        setOpiniones([...opiniones, newOpinion])
    }

    const handleMasVendido = () =>{
        setMasVendidos(!masVendidos)
    }

    const condiciones = () =>{
        const con1 = (departamento!=="")&&(departamento!=="Seleccionar departamento");
        const con2 = (categoria!=="")&&(departamento!=="Seleccionar categoria");
        const con3 = (caracteristicas.length!==0)
        const con4 = (imagenes.length!==0)
        return (con1&&con2&&con3&&con4)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(condiciones()){
            setEnviando(true)
            const newProducto = {
                nombre,
                marca,
                precio,
                color,
                estilo,
                caracteristicas,
                imagenes,
                departamento,
                categoria,
                masVendidos,
                opiniones
            }
            addDoc(collection(db,"productos"),newProducto)
                .then(resp => {
                    console.log(resp)
                    reset()
                    setCaracteristicas([])
                    setImagenes([])
                    setOpiniones([])
                    setImgStatus("No se han cargado fotos del producto")
                    dispatch(nuevoProducto(newProducto))
                    setMasVendidos(false)
                    setEnviando(false)
                })
                .catch(e => {
                    console.log(e);
                })
        }
    }

    if(enviando){
        return(
            <h2>Guardando producto...</h2>
        )
    }

  return (
    <main className='cntr-admin'>
        <h2>Administracion de productos</h2>
        <div>
            <h3>Agregar nuevo producto</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>Nombre</label>
                        <input 
                            type='text'
                            name='nombre'
                            autoComplete='off'
                            value={nombre}
                            onChange={handleInputChange}
                            required/>
                    </div>
                    <div>
                        <label>Marca</label>
                        <input 
                            type='text'
                            name='marca'
                            autoComplete='off'
                            value={marca}
                            onChange={handleInputChange}
                            required/>
                    </div>
                    <div>
                        <label>Precio</label>
                        <input 
                            type='number'
                            name='precio'
                            autoComplete='off'
                            value={precio}
                            onChange={handleInputChange}
                            required/>
                    </div>
                    <div>
                        <label>Color</label>
                        <input 
                            type='text'
                            name='color'
                            autoComplete='off'
                            value={color}
                            onChange={handleInputChange}
                            required/>
                    </div>
                    <div>
                        <label>Estilo</label>
                        <input 
                            type='text'
                            name='estilo'
                            autoComplete='off'
                            value={estilo}
                            onChange={handleInputChange}
                            required/>
                    </div>
                    <div>
                        <label>Departamento</label>
                        <select
                            name='departamento'
                            value={departamento}
                            onChange={handleInputChange}>
                            <option>Seleccionar departamento</option>
                            {
                                departamentos.map((dep)=>(
                                    <option key={dep.id}>
                                        {dep.departamento}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label>Categoria</label>
                        <select
                            name='categoria'
                            value={categoria}
                            onChange={handleInputChange}>
                            <option>Seleccionar categoria</option>
                            {
                                categorias.map((categ, index)=>(
                                    <option key={index}>
                                        {categ}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label>¿Producto catalogado en la categoría de los más vendidos?</label>
                        <input 
                            type='checkbox'
                            onChange={handleMasVendido}/>
                    </div>
                </div>
                <div className='caracteristicas'>
                    <label>Caracteristicas</label>
                    <input 
                        type='text'
                        name='caracteristica'
                        autoComplete='off'
                        value={caracteristica}
                        onChange={handleInputChange}/>
                    <button onClick={agregarCaracteristica} >
                        Agregar caracteristica
                    </button>
                    <ul>
                        {
                            caracteristicas.map((car, index)=>(
                                <li key={index}>
                                    {car}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='fotos'>
                    <label>Fotos del producto</label>
                    <button onClick={subirImagenes}>
                        Subir fotos
                    </button>
                    <p>{imgStatus}</p>
                    <input 
                        type='file'
                        accept="image/*"
                        className='d-none'
                        id='imagenInput'
                        onChange={handleImagenes}
                        multiple/>
                    { imagenes.length!==0 &&
                        <div>
                            {
                                imagenes.map((img, index)=>(
                                    <img key={index} src={img} alt='producto'/>
                                ))
                            }
                        </div> 
                    }
                </div>
                <div className='opiniones'>
                    <h5>Opiniones de clientes</h5>
                    <div>
                        <label>Nombre del cliente</label>
                        <input 
                            type='text'
                            name='nombreCliente'
                            autoComplete='off'
                            value={nombreCliente}
                            onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Foto del cliente</label>
                        <input 
                            type='link'
                            name='fotoCliente'
                            autoComplete='off'
                            value={fotoCliente}
                            onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Opinion</label>
                        <input 
                            type='text'
                            name='opinion'
                            autoComplete='off'
                            value={opinion}
                            onChange={handleInputChange}/>
                    </div>
                    <button onClick={agregarOpinion}>
                        Agregar opinion
                    </button>
                    {
                        <div className='cntr-opiniones'>
                            {
                                opiniones.map((op, index)=>(
                                    <div key={index}>
                                        <img src={op.imagen} alt='foto cliente'/>
                                        <h6>{op.nombre}</h6>
                                        <p>{op.opinion}</p>
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
                <div>
                    <button type='submit' className='btn-submit'>
                        Guardar producto
                    </button>
                </div>
            </form>
        </div>
        <ListaAdmin/>
    </main>
  )
}

export default ProductosAdmin