import {
  Box
} from '@mui/material'
import {  } from '@mui/material/styles'

import { useTheme } from '@mui/material/styles'
import AccountButton from './navBar/AccountButton'
import SearchBar from './navBar/SearchBar'
import AddIssueButton from './navBar/AddIssueButton'
import SettingsButton from './navBar/SettingsButton'
import logo from '../icons/jira.png'
import {ReactComponent as AppSwitcher} from '@atlaskit/icon/svgs/app-switcher.svg'
import AtlasIcon from './reusable/AtlasIcon'

const leftAlignStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '15px'
}

const rightAlignStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '15px'
}

const logoStyle = {
    height: '20px',
    width: 'auto',
    marginRight: '20px'
}
 
const navBarStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
    paddingLeft: '20px',
    paddingRight: '20px',
    gap: '10px',
    backgroundColor: 'primary.contrast',
    height: '56px',
    boxShadow: 'linear-gradient(rgba(9, 30, 66, 0.13) 0px, rgba(9, 30, 66, 0.13) 1px, rgba(9, 30, 66, 0.08) 1px, rgba(9, 30, 66, 0) 4px)',
    borderBottom: 'solid 1px #6B778C'
  }

const NavBar = () => {
  const theme = useTheme()
  return (
    <Box sx={navBarStyle}>
          <Box sx={leftAlignStyle}>
            <AtlasIcon Svg={AppSwitcher}/>
          </Box>
          <Box sx={rightAlignStyle}>
            <AddIssueButton/>
            <SearchBar />
            <SettingsButton/>
            <AccountButton/>
          </Box>
    </Box>

  )
}

export default NavBar