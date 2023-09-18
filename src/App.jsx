import { 
  Routes, 
  Route,
 } from 'react-router-dom'

import RegisterPage from './components/pages/RegisterPage'
import LoginPage from './components/pages/LoginPage'
import ProjectPage from './components/pages/ProjectPage'

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<ProjectPage /> } />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/> } />
        </Routes>
  )
}

export default App
