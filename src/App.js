import { Routes, Route, useParams } from 'react-router-dom'

import User from './components/user/user.component'
import Home from './components/home/home.component'

import './App.css'

function App() {
  let { userId } = useParams();

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=":userId" element={<User />} />
      </Routes>
    </>
  )
}

export default App
