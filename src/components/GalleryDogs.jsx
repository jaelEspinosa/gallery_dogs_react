import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DetailContext } from '../context/DetailContext'

const GalleryDogs = ({busqueda}) => {
const [imagenPerros, setImagenPerros] = useState([])  
const navigate = useNavigate()
const {setDetalleDog}=useContext(DetailContext)
  useEffect(()=>{
   
   const obtenerImg= async ()=>{
   const url =`https://dog.ceo/api/breed/${busqueda}/images`    
     if (busqueda.length>0){
         const respuesta = await fetch(url)
         const resultado = await respuesta.json()
         setImagenPerros(resultado.message)
     }
    }
   obtenerImg()
   
  },[busqueda])
 
  const mostrarDetalle = (detalle)=>{
    setDetalleDog(detalle)
    navigate('/detail')
    
  }
   
  return (
      <>
        {busqueda !== '' ? <h2 className='title'>fotos de {busqueda}</h2>: null}
        <div className='contenedor'>
           {imagenPerros.map((perro, index)=>(
               <div key = {index} className='cart'>
               <img               
               src={perro} 
               alt='img_perro'
               onClick={()=> mostrarDetalle(perro)}
                />

               </div>
           ))}
        </div>
    
      </>
  )
}

export default GalleryDogs