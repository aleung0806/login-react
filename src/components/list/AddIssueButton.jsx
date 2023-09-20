import AddRoundedIcon from '@mui/icons-material/AddRounded'
import ClickToAdd from '../reusable/ClickToAdd'
import { issueService, listService } from '../../services/jira'
import { useStore } from '../../store'
import userEvent from '@testing-library/user-event'

const inputStyle = {
  flexDirection: 'column',
  background: 'white',
  borderColor: 'secondary.light',


}

const buttonStyle = {
  width: '30px',
  height: '30px',
  borderRadius: 1,
  // color: 'secondary.light',
  // "&:hover": {
  //   color: 'text.secondary',
  //   "& .buttonText": {
  //     color: 'text.secondary',

  //   }
  // },
}

const AddIssueButton = ({list}) => {
  const user = useStore (state => state.user)
  const submit = async (input) => {
    const newIssue = await issueService.create({
      title: input, 
      projectId: list.projectId,
      listId: list.id,
      type: 'bug',
      priority: 'medium',
      status: 'in progress',
      creatorId: user.id
    })
    console.log(newIssue.id)
    await listService.update(list.id, {issueOrder: list.issueOrder.push(newIssue.id)})
  }
  const ButtonIcon = () => < AddRoundedIcon />

  return (
    <ClickToAdd 
      submit={submit} 
      buttonStyle={buttonStyle} 
      ButtonIcon={ButtonIcon}
      inputStyle={inputStyle}
    />
  )
}

export default AddIssueButton