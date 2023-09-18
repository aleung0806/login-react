import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

import { 
  FormControl,
  InputLabel,
  Select,
  MenuItem
 } from '@mui/material';


const ProjectFilter = () => {
  
  const filter = useSelector(state => state.filter)
  const projects = useSelector(state => state.projects)
  
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setFilter({
      type: 'project',
      term: e.target.value
    }))
  }

  return (
  <FormControl>
    <InputLabel id="demo-simple-select-label">Project</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={filter}
      label="Age"
      onChange={handleChange}
    >
      {projects.map(project => <MenuItem key={project.id} value={project.name}>{project.name}</MenuItem>)}
    </Select>
  </FormControl>
  )
}
export default ProjectFilter