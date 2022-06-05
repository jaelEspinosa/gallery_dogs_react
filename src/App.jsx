import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DetailContext } from './context/DetailContext'

import './App.css'

import Detail from './pages/Detail'
import Inicio from './pages/Inicio'
import { useState } from 'react'

function App() {
const [detalleDog, setDetalleDog] = useState()
const [razas, setRazas]=useState([])
const[busqueda, setBusqueda]=useState('')


  return (
    <div>
           <DetailContext.Provider value = {{detalleDog, setDetalleDog, razas, setRazas, busqueda, setBusqueda}}>
              <Router>
                <Routes>
                  <Route path = '' element = {<Inicio/>}/>
                  <Route path ='/detail' element = {<Detail/>}/>
                </Routes>
              </Router>
            </DetailContext.Provider>
            
    </div>
  )
}

export default App
