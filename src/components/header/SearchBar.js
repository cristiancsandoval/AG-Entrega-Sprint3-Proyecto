import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { departamentos } from '../../helpers/departamentos';
import { searchIcon } from '../../helpers/images';
import useForm from '../../hooks/useForm';

const SearchBar = () => {

  const {productos} = useSelector(store=>store.producto)
  const navigate = useNavigate()

  const [values, handleInputChange] = useForm({
    busqueda: "",
    departamento:""
  })

  const {busqueda, departamento} = values;
  
  const lista = productos!==undefined
      ? productos.filter((prod)=>prod.departamento.includes(departamento))
      : [];

  const filtrado = busqueda!=="" 
      ? lista.filter((prod)=>(prod.nombre.toLowerCase().includes(busqueda.toLowerCase())))
      : []

  const handleSubmit = (e) =>{
      e.preventDefault();
      if(filtrado.length!==0){
         const idBusqueda = filtrado[0].id;
         navigate(`/producto/${idBusqueda}`)
      }
  }

  return (
    <div className='search-bar'>
        <form onSubmit={handleSubmit}>
            <select
                name='departamento'
                autoComplete='off'
                value={departamento}
                onChange={handleInputChange}>

                <option value="">Todos los departamentos</option>
                {
                  departamentos.map((dep)=>(
                    <option key={dep.id}>
                      {dep.departamento}
                    </option>
                  ))
                }
            </select>
            <div>
              <input
                  name='busqueda'
                  autoComplete='off'
                  value={busqueda}
                  onChange={handleInputChange}
                  placeholder="Buscar un producto..."
              />
              <ul>
                {
                  filtrado.map((prod)=>(
                    <li key={prod.id}>
                      <Link to={`/producto/${prod.id}`}>{prod.nombre}</Link>
                    </li>
                  ))
                }
                {filtrado.length===0 &&
                    <li>No hay resultados para la busqueda</li>
                }
              </ul>
            </div>
            <button>
                <img src={searchIcon} alt="search icon"/>
            </button>
        </form>
    </div>
  )
}

export default SearchBar