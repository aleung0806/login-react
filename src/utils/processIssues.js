
import { useStore } from '../store'

export const searchIssues = (search, issues) => {

  const searchMap = issues.map(issue => {
    return issue.title.search(search)
  })

  const searchedIssues = []
  issues.forEach((issue, index) => {
    if(searchMap[index] !== -1){
      return searchedIssues.push(issue)
    }
  })
  return searchedIssues
}

export const applyUserFilter = (userFilter, issues) => {
  console.log(userFilter)
  const filteredIssues = issues.filter((issue) => {
    return userFilter[issue.assigneeId]
  })
  console.log(filteredIssues)
  return filteredIssues

}

const values =  {'lowest': 1, 'low': 2, 'medium': 3, 'high': 4, 'highest': 5}

export const sortIssues = (sort, issues) => {
  let sorted = [...issues]
  if (sort === 'priority'){
    sorted.sort((a, b) => {
      return values[a.priority] - values[b.priority]
    })
  }
  else if (sort === 'created at'){
    sorted.sort((a, b) => {
      console.log( )
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    })
  }
  else if (sort === 'date due'){
    sorted.sort((a, b) => {
      return new Date(a.dateDue).getTime() - new Date(b.dateDue).getTime()
    })
  }
  return sorted
}

export const processIssues = (issues) => {
  const search = useStore.getState().search
  const sort = useStore.getState().sort

  let processed = [...issues ]

  if (search !== ''){
    processed = searchIssues(search, issues)
  }



  console.log('proccessed', processed)
  return processed

}
