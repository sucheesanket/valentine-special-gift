import React from 'react'
import Openbox from './pages/Openbox'
import { Route, Routes } from 'react-router-dom'
import OpenEnvelope from './pages/OpenEnvelope'
import Openletter from './pages/Openletter'
import Final from './pages/Final'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Openbox/>}/>
        <Route path='/letter' element={<OpenEnvelope/>}/>
        <Route path='/letter/content' element={<Openletter/>}/>
        <Route path='/main' element={<Final/>} />
      </Routes>
      
    </div>
  )
}

export default App
