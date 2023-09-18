import { 
  Box, 
  Typography
} from '@mui/material'

import BoardIcon from '@atlaskit/icon/glyph/board'
import BacklogIcon from '@atlaskit/icon/glyph/backlog'
import CalendarIcon from '@atlaskit/icon/glyph/calendar'
const Sections = ({project}) => {
return (
  <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
    <Box>
      <BoardIcon/>
    </Box>
    
  </Box>
)
}

export default Sections