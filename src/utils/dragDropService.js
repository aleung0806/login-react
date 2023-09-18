const _ = require('lodash')


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


const processDragDrop = (result, project) => {
  let lists = _.cloneDeep(project.lists)

  const issueId = parseInt(result.draggableId)
  const sourceListId = parseInt(result.source.droppableId)
  const sourceIndex = parseInt(result.source.index)
  const destinationListId =  parseInt(result.destination.droppableId)
  const destinationIndex = parseInt(result.destination.index)


  lists.find(list => list.id === sourceListId)
    .issueOrder.splice(sourceIndex, 1)
  
  lists.find(list => list.id === destinationListId)
    .issueOrder.splice(destinationIndex, 0, issueId)

  console.log('2', lists)
  
}

export default processDragDrop