import React from 'react'
import Openbox from './pages/Openbox'
import { Route, Routes } from 'react-router-dom'
import OpenEnvelope from './pages/OpenEnvelope'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Openbox/>}/>
        <Route path='/letter' element={<OpenEnvelope/>}/>
      </Routes>
      
    </div>
  )
}

export default App
