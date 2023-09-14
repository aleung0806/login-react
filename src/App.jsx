import { 
  Routes, 
  Route,
 } from 'react-router-dom'

import RegisterPage from './components/pages/RegisterPage'
import LoginPage from './components/pages/LoginPage'

import Providers from './components/Providers'
import HomePage from './components/pages/HomePage'
import { useLoggedInUser } from './hooks/useLoggedInUser'

const App = () => {
  return (
    <Providers>
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/> } />
        </Routes>
    </Providers>
    
  )
}

export default App
