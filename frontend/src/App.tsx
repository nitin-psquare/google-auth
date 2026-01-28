import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Profile from './pages/Profile'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}   />
        <Route path='/profile' element={<Profile />} />
      </Routes>

    </div>
  
  )
}

export default App
