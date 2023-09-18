import { IconButton, SvgIcon} from '@mui/material'
import AtlasIcon from '../reusable/AtlasIcon'
import {ReactComponent as Settings} from '@atlaskit/icon/svgs/settings.svg'

const iconStyle = {
  fontSize: '25px',
  color: 'primary.main'
}

const SettingsButton = () => {
  return (
    <IconButton>
      <AtlasIcon Svg={Settings} sx={iconStyle}/>
    </IconButton>
  )
}

export default SettingsButton