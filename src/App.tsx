import { Routes, Route } from 'react-router-dom'
import useAuthStateChange from './hooks/useAuthStateChange'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Game from './pages/Game'

export default function App() {  
  useAuthStateChange()

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/sign-in' element={<SignIn />}/>
      <Route path='/app' element={<Game />}/>
    </Routes>
  )
}
