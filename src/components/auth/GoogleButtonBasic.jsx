
import { useEffect } from 'react'


import { 
  Box,
  Typography,
} from '@mui/material'



const GoogleButtonBasic = () => {
 
  return (
    <div>
      <div 
        id="g_id_onload"
        data-client_id="789131590285-qd83qch1rioq37oevas6au4cpl5r78gs.apps.googleusercontent.com"
        data-login_uri="http://localhost:3001/v1/google"
      >
      </div>
      <div 
        className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left">
      </div>
    </div>
  )

}

export default GoogleButtonBasic