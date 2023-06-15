import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import useAuthStateChange from './hooks/useAuthStateChange'

export default function App() {  
  useAuthStateChange()

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/sign-in' element={<SignIn />}/>
    </Routes>
  )
}
