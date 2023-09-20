import { 
  Typography,
  TextField,
  Button,
  Box,
  Modal
 } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { projectService } from '../../services/jira'
import { projectRoleService } from '../../services/jira'

import ClickToAdd from '../reusable/ClickToAdd'
import { useStore } from '../../store'

const buttonStyle = {
  width: '30px',
  height: '30px',
  borderRadius: 1
}

const AddProjectButton = () => {
  const user = useStore(state => state.user)
  const project = useStore(state => state.project)

  const refreshSession = useStore(state => state.refreshSession)
  const getProject = useStore(state => state.getProject)

  const submit = async (input) => { 
    const newProject = await projectService.create({title: input})
    await projectRoleService.create({projectId: newProject.id, role: 'admin', userId: user.id})
    await refreshSession()
  }

  const ButtonIcon = () => {
    return (
        <AddRoundedIcon />
    )
  }


return (
      <ClickToAdd 
        submit={submit}
        buttonStyle={buttonStyle}
        ButtonIcon={ButtonIcon}
        inputStyle={{}}
      />
)
}

export default AddProjectButton