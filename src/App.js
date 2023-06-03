import { Routes, Route, useParams } from 'react-router-dom'

import { useState } from 'react'

import Colby from './components/colby/colby.component'
import Natalie from './components/natalie/natalie.component'
import Home from './components/home/home.component'

import './App.css'

function App() {
  const [name, setName] = useState(null)
  let { userId } = useParams();

  return (
    <>
      <Routes>
        <Route path='/' setName={setName} element={<Home />} />
        <Route path='/Colby' element={<Colby />} />
        <Route path='/Natalie' element={<Natalie />} />
        <Route path=":userId" element={<Natalie />} />
      </Routes>
    </>
  )
}

export default App
