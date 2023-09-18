import { useDispatch, useSelector } from 'react-redux'

import { updateProject } from '../../reducers/project'
import ControlledForm from '../reusable/ControlledForm'

const inputStyle = {
  fontSize: '24px', 
  fontWeight: 500, 
}

const ProjectTitle = () => {
  const dispatch = useDispatch()
  const project = useSelector(state => state.project)
  const submit = (input) => {
    dispatch(updateProject({id: project.id, title: input}))
  }

  return (
    <ControlledForm 
      defaultInput={project.title} 
      submit={submit} 
      inputStyle={inputStyle} 

    />
  )
}

export default ProjectTitle