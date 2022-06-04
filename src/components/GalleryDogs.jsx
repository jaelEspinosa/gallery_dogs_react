import React, { useEffect, useState } from 'react'

const GalleryDogs = ({busqueda}) => {
const [imagenPerros, setImagenPerros] = useState([])  

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
   
  return (
      <>
        {busqueda !== '' ? <h2 className='title'>fotos de {busqueda}</h2>: null}
        <div className='contenedor'>
           {imagenPerros.map((perro, index)=>(
               <div key = {index} className='cart'>
               <img src={perro} alt='img_perro' />

               </div>
           ))}
        </div>
    
      </>
  )
}

export default GalleryDogs