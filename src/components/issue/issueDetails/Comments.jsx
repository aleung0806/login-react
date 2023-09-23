import { 
  Typography,
  Box,
  Input,
 } from '@mui/material'
import ControlledForm from '../../reusable/ControlledForm'
import { useStore } from '../../../store'
import { issueService, commentService } from '../../../services/jira'
import { useState } from 'react'
const inputStyle = {

}
import InitialsAvatar from '../../reusable/InitialsAvatar'
const avatarStyle = {
  height: '20px', 
  width: '20px', 
  fontSize: '10px',
  display: 'flex'

}

import d from 'date-and-time'
import meridiem from 'date-and-time/plugin/meridiem'

d.plugin(meridiem)

const dateFormat = (dateString) => {
  const date = new Date(dateString)
  return   d.format(date, 'h:mm A')

}

const Comments = ({issue}) => {
  const user = useStore(state => state.user)

  const [input, setInput] = useState('')

  const handleChange = (e) => { setInput(e.target.value) }
  const handleClick = (e) => { e.stopPropagation() }

  const handleSubmit = async (e) => {
    e.preventDefault()
    document.activeElement.blur()    
    await commentService.create({issueId: issue.id, userId: user.id, text: input})
    setInput('')
  }

  return (
    <Box sx={{width: '100%'}}>
      <Typography variant='darkestBold14'>Comments</Typography>
      <Box component='form' sx={{marginBottom: '0.5rem'}} onSubmit={handleSubmit} onClick={handleClick}>
        <Input
          variant='regular'
          sx={{
            fontSize: '12px',

          }}
          inputProps={{
            placeholder: 'Add a comment',
            fontSize: '12px',
          }}
          value={input}
          onChange={handleChange}
        />
        
    </Box>
    {issue.comments.map(comment => {
          console.log(comment)
          return (
          <Box id={comment.id} sx = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
            <InitialsAvatar  sx={avatarStyle} user={user}/> 
            <Box sx = {{ display: 'flex', flexDirection: 'column', marginLeft: '1rem'}}>
              <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '0.5rem' }}>
                <Typography sx={{fontSize: '12px'}}>{`${user.username} `}</Typography>
                <Typography sx={{marginLeft: '0.5rem', fontSize: '12px', color: '#7A869A'}}>{` at ${dateFormat(comment.createdAt)} `}</Typography>
              </Box>
              <Typography sx={{fontSize: '12px'}}>{comment.text}</Typography>
            </Box>
          </Box>)
        })}
    </Box>
  )
}

export default Comments