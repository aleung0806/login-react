import { useStore } from '../../store'
import ControlledForm from '../reusable/ControlledForm'
import { projectService } from '../../services/jira'

const inputStyle = {
  fontSize: '24px', 
  fontWeight: 500, 
}

const ProjectTitle = () => {
  const project = useStore(state => state.project)
  const refreshSession = useStore(state => state.refreshSession)


  const submit = async (input) => {
    await projectService.update(project.id, { title: input})
    await refreshSession()

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