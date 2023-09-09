import { useEffect } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import { 
  Box
} from '@mui/material'

import { useLoggedInUser } from 'hooks/useLoggedInUser'

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  alignItems: 'stretch'
}

const bodyStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch'

}

const ProjectPage = () => {
const user = useLoggedInUser()
 return (
  <Box sx={pageStyle}>
    <Box sx={bodyStyle}>
      
    </Box>
  </Box>


  )
}

export default ProjectPage
