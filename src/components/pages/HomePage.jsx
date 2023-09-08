import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate , useParams } from 'react-router-dom'
import { 
  Box
} from '@mui/material'

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

 return (
  <Box sx={pageStyle}>
    <Box sx={bodyStyle}>
      {body}
    </Box>
  </Box>


  )
}

export default ProjectPage
