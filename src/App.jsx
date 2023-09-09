import { 
  Routes, 
  Route,
 } from 'react-router-dom'



// import Project from './components/Project'
import { LoginPage, RegisterPage } from './components/auth'
import Providers from './components/Providers'
import HomePage from './components/pages/HomePage'
import { useLoggedInUser } from './hooks/useLoggedInUser'


const App = () => {
  const user = useLoggedInUser()

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
