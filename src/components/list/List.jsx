import { Droppable } from "react-beautiful-dnd"
import DeleteListButton from './DeleteListButton'
import AddIssueButton from './AddIssueButton'
import ListTitle from './ListTitle'
import Issue from '../issue/Issue'

import {
  Box
} from '@mui/material'

// import Issue from '../issue/Issue'

const listStyle = {
  display: 'inline-block',
  minWidth: '275px',
  height: '75vh',
  padding: '10px',
  borderRadius: '3px',
  verticalAlign: 'top',
  marginRight: '10px',
  borderWidth: 'thin',
  backgroundColor: 'secondary.light'
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
}



const List = ({list}) => {
  console.log('list', list)
  const {issues, ...listContent } = list

  return (
    <Box sx={listStyle}>
      <Box sx={headerStyle}>
          <ListTitle list={listContent}/>
          <DeleteListButton list={listContent}/>
      </Box>

      <Droppable droppableId={`${list.id}`}>
        {(provided) => {
          return (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {issues.map((issue, index) => {
              return <Issue key={issue.id} issue={issue} index={index} />
            })}
            {provided.placeholder}
          </div>)
        }}
      </Droppable>
      <AddIssueButton list={list}/>
    </Box>
  )
}

export default List;
