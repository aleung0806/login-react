const _ = require('lodash')
import { useStore } from '../store'
import { issueService, listService } from '../services/jira'

export const removeFromList = (list, index) => {
  let issuesCopy = [...list.issues]
  const removed = issuesCopy[index]
  issuesCopy.splice(index, 1)
  return [removed, {...list, issues: issuesCopy}]
}

export const addToList = (list, index, element) => {
  let issuesCopy =[...list.issues]
  issuesCopy.splice(index, 0, element)
  return {...list, issues: issuesCopy}
}

const dragDrop = (result) => {
  console.log(result)
  if (result.destination === null){
    return
  }

  const issueId = result.draggableId
  const sourceListId = result.source.droppableId
  const sourceIndex = parseInt(result.source.index)
  const destinationListId =  result.destination.droppableId
  const destinationIndex = parseInt(result.destination.index)

  if (sourceListId === destinationListId && sourceIndex === destinationIndex){
    return 
  }

  const project = useStore.getState().project

  const lists = project.lists.map(list => {
    const {issues, ...rest} = list
    return {
      issueOrder: list.issues.map(issue => issue.id),
      ...rest 
    }
  })


  const sourceList = lists.find(list => list.id === sourceListId)
  sourceList.issueOrder.splice(sourceIndex, 1)
  
  const destList = lists.find(list => list.id === destinationListId)
  destList.issueOrder.splice(destinationIndex, 0, issueId)

  listService.update(sourceList.id, {issueOrder: sourceList.issueOrder})
  listService.update(destList.id, {issueOrder: destList.issueOrder})
  issueService.update(issueId, {listId: destList.id})

}

export default dragDrop