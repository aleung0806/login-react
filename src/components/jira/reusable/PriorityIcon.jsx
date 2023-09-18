import { ReactComponent as Highest} from '../../icons/highest.svg'
import { ReactComponent as High} from '../../icons/high.svg'
import { ReactComponent as Medium} from '../../icons/medium.svg'
import { ReactComponent as Low} from '../../icons/low.svg'
import { ReactComponent as Lowest} from '../../icons/lowest.svg'


import { SvgIcon, Typography, Box } from '@mui/material'

const match = 
{ 
  highest : <Highest/>, 
  high : <High/>,
  medium : <Medium/>,
  low: <Low/>,
  lowest: <Lowest/>,
}

const boxStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 1
}

const iconStyle  = (sx) => {
  return {
    ...sx,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
}

const textStyle = {

  color: 'text.primary',
  fontSize: '12px',
  textTransform: 'uppercase',
}

const PriorityIcon = ({priority, sx}) => {
  const matchSvg = (priority) => {
    return match[priority]
  }
   
  return (
    <SvgIcon sx={iconStyle(sx)}>
      {matchSvg(priority)}
    </SvgIcon>

  )
}



export default PriorityIcon