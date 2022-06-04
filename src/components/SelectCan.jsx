import { useEffect, useState } from 'react'
import GalleryDogs from './GalleryDogs'



const SelectCan = () => {
    const[busqueda, setBusqueda]=useState('')
    const [razas, setRazas]=useState([])
    useEffect(()=>{
const obtenerRazas = async ()=>{

    console.log('componente listo, pidiendo...')
    const url='https://dog.ceo/api/breeds/list/all'
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    setRazas(resultado.message)
    
}
    
obtenerRazas()

    },[])
let listaRazas = Object.keys(razas) 
  return (

    <div className='cont'>
    <div>
    <h2 className='title'>Busca perro por raza </h2>
        <select
        className='select'
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}

        >
           <option value = ''>seleccione</option>
           {listaRazas.map((raza,index)  => (
            <option key={index} value = {raza}
            
            >{raza}</option>   
           ))}
           
        </select>
    </div>
        
        <GalleryDogs busqueda={busqueda}/>
</div>
  )
}

export default SelectCan