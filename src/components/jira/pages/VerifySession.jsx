import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate, useParams, useMatch, useLocation } from 'react-router-dom'
import Project from '../Project'
import NavBar from '../NavBar'
import SideMenu from '../SideMenu'
import { Navigate } from 'react-router'

import { login, logout, register, fetchUser } from '../../reducers/auth'
import { fetchAllProjects } from '../../reducers/allProjects'
import { fetchProject } from '../../reducers/project'



import { 
  Box,
  Button,
  Typography
} from '@mui/material'




const VerifySession = ({children}) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const verified = useSelector(state => state.auth.verified)
  const user = useSelector(state => state.user)
  const projects = useSelector(state => state.allProjects)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (verified === null){
      console.log('verified null')
      dispatch(fetchUser())
    }else if(!verified){
      console.log('verified false')
      navigate(location.pathname)
    }else{
      console.log('verified true')
      if (projects === null){
        dispatch(fetchAllProjects())
        console.log(location)
        if (location.pathname === '/login'){
          navigate('/project/1')
        }
      }
    }
  }, [verified])


  return (
    <Box>
      {children}
    </Box>
  )
  
  
}

export default VerifySession