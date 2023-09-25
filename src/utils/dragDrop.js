const _ = require('lodash')
import { useStore } from '../store'
import { issueService, listService } from '../services/jira'

const removeFromList = (list, index) => {
  let issuesCopy = [...list.issues]
  const removed = issuesCopy[index]
  issuesCopy.splice(index, 1)
  return [removed, {...list, issues: issuesCopy}]
}

const addToList = (list, index, element) => {
  let issuesCopy =[...list.issues]
  issuesCopy.splice(index, 0, element)
  return {...list, issues: issuesCopy}
}

const dragDrop = (result) => {
  if (result.destination === null){
    return
  }

  const issueId = result.draggableId
  const sourceListId = result.source.droppableId
  const sourceIndex = parseInt(result.source.index)
  const destListId =  result.destination.droppableId
  const destIndex = parseInt(result.destination.index)

  if (sourceListId === destListId && sourceIndex === destIndex){
    return 
  }

  const project = {...useStore.getState().project}
  const setProject = useStore.getState().setProject

  const sourceListIndex = project.lists.findIndex(list => list.id === sourceListId)
  const [issue, updatedSourceList ]= removeFromList(project.lists[sourceListIndex], sourceIndex)
  project.lists[sourceListIndex] = updatedSourceList
  const updatedSourceIssueOrder = updatedSourceList.issues.map(issue => issue.id)

  const destListIndex = project.lists.findIndex(list => list.id === destListId)
  const updatedDestList = addToList(project.lists[destListIndex], destIndex, issue)
  project.lists[destListIndex] = updatedDestList 
  const updatedDestIssueOrder = updatedDestList.issues.map(issue => issue.id)

  setProject(project)

  listService.update(sourceListId, {issueOrder: updatedSourceIssueOrder})
  listService.update(destListId, {issueOrder: updatedDestIssueOrder })
  issueService.update(issueId, {listId: destListId})

}

export default dragDrop