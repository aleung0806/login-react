import { useDispatch, useSelector} from 'react-redux'
import { useNavigate , useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Navigate } from 'react-router'
import Project from '../Project'
import NavBar from '../NavBar'
import SideMenu from '../SideMenu'
import {
  fetchProject, createProject, updateProject, deleteProject, 
  createList, updateList, deleteList,
  createIssue, updateIssue, deleteIssue
 } from '../../reducers/project'

import { fetchUser } from '../../reducers/auth'
import { Button, TextField, Typography } from '@mui/material'

import { 
  Box
} from '@mui/material'
import auth from '../../services/auth'



const TroubleShoot = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const navigate = useNavigate()
  const projects = useSelector(state => state.allProjects)
  
  useEffect(() => {
    const sendVerify = async () => {
        const verified = await dispatch(auth.verifySession())
        if (!verified){
          navigate('/login')
        }
    }

    if (auth.user === null){
      sendVerify()
    }
  }, [auth])

  useEffect(() => {
    if (auth.user !== null ){
      dispatch(fetchProject(auth.user.projects[0].id))
    }
  }, [auth, id])

  const createProjectHandler = () => {
    dispatch(createProject({title: 'created through button'}))
  }

  const updateProjectHandler = () => {
    dispatch(updateProject({id: 1, title: 'new title'}))
  }

  const deleteProjectHandler = () => {
    dispatch(deleteProject(2))
  }

  const fetchProjectHandler = () => {
    dispatch(fetchProjects(auth.user.id))
  }

  const createListHandler = () => {
    dispatch(createList({projectId: 1, title: 'list through button'}))

  }

  const updateListHandler = () => {
    dispatch(updateList({id: 4, projectId: 1, title: 'new title'}))
  }

  const deleteListHandler = () => {
    dispatch(deleteList({id: 41, projectId: 1}))
  }

  const createIssueHandler = () => {
    dispatch(createIssue({projectId: 1, listId: 4, title: 'testing2'}))
  }

  const updateIssueHandler = () => {
    dispatch(updateIssue({id: 10, projectId: 1, listId: 3, title: 'new title'}))
  }

  const deleteIssueHandler = () => {
    dispatch(deleteIssue({id: 8, listId: 3, projectId: 1}))
  }

  return (
    <Box>
      <Box>
        <Button onClick={createProjectHandler}>
          + Create Project
        </Button>
        <Button onClick={updateProjectHandler}>
          Update Project
        </Button>
        <Button onClick={deleteProjectHandler}>
          - Delete Project
        </Button>
        <Button onClick={fetchProjectHandler}>
          Fetch Projects
        </Button>
        </Box>

        <Box>
        <Button onClick={createListHandler}>
          + Create List
        </Button>
        <Button onClick={updateListHandler}>
          Update List
        </Button>
        <Button onClick={deleteListHandler}>
          - Delete List
        </Button>
        </Box>

        <Box>
        <Button onClick={createIssueHandler}>
          + Create Issue
        </Button>
        <Button onClick={updateIssueHandler}>
          Update Issue
        </Button>
        <Button onClick={deleteIssueHandler}>
          - Delete Issue
        </Button>
        </Box>

      <TextField size='small'/>


      {
        projects !== null &&
        <pre id="json">
          {JSON.stringify(projects, null, 2)}
        </pre>
      } 

      </Box>

)}

export default TroubleShoot

