import { 
  Box, 
  Typography
} from '@mui/material'

import ProjectIcon from '../../icons/project-logo.svg'

const Header = ({title}) => {
return (
  <Box sx={{paddingTop: '32px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 'auto'}}>
    <Box
      component="img"
      height="24px"
      src={ProjectIcon}
      sx={{borderRadius: '3px', width: 'auto'}}
    />
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', marginLeft: '26px'}}>
      <Typography variant='p2'>
        {title}
      </Typography>
      <Typography variant='p3'>
        Software project
      </Typography>

    </Box>
  </Box>
)
}

export default Header