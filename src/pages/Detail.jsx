import domtoimage from 'dom-to-image';
import React, { useContext, useRef } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { DetailContext } from '../context/DetailContext'

const Detail = () => {

  const {detalleDog}=useContext(DetailContext)
  const dogRef = useRef()
  const navigate = useNavigate()
  
  const downloadDogPh = () => {
    domtoimage
      .toJpeg(dogRef.current, { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };
  return (
    <div  className='contenedor-detail'>
    <button
      className='button'
      onClick={()=>window.history.back()}           //navigate('/')
      >Volver</button>
    
      <img ref={dogRef} src={detalleDog} alt='dog-img'/>
      <button
      className='button'
      onClick={downloadDogPh}
      >Download</button>
    </div>
  )
}

export default Detail