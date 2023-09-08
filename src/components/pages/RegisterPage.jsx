import VerifySession from './VerifySession'
import { 
  Box,
} from '@mui/material'

import RegisterForm from '../login/RegisterForm'
import RegisterConfirmation from '../login/RegisterConfirmation'


const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center'
}


const RegisterPage = () => {

  return (
    <VerifySession>
      <Box sx={pageStyle}>
        <RegisterForm/>
      </Box>
    </VerifySession>      
  )
}

export default RegisterPage