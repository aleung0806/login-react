import { useStore } from '../../store'
import ControlledForm from '../reusable/ControlledForm'

const inputStyle = {
  fontSize: '24px', 
  fontWeight: 500, 
}

const ProjectTitle = () => {
  const project = useStore(state => state.project)
  const submit = (input) => {
    // dispatch(updateProject({id: project.id, title: input}))
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