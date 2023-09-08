
import { useEffect } from 'react'


import { 
  Box,
  Typography,
} from '@mui/material'



const GoogleButton = () => {

  const handleCallbackResponse = (response) => {
    console.log(`JWT ID Token: ${response.credential}`)
    
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "789131590285-qd83qch1rioq37oevas6au4cpl5r78gs.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("googleForm"),
      {theme: "outline", size: "large", text: "", width: "320px"}
    )

    google.accounts.id.prompt()
  }, [])

              
  return (
        <Box>
          <Typography sx={{fontSize: 14, fontWeight: 600, color: 'rgb(94, 108, 132)', paddingTop: '24px', textAlign: 'center', marginBottom: "16px"}}>
            Or continue with Google:
          </Typography>
        
          <Box id="googleForm"/>
        </Box>
  )

}

export default GoogleButton