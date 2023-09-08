const uniqid = require('uniqid')
const fs = require('fs')

const verbs = [
  'make', 
  'read', 
  'write', 
  'learn', 
  'water', 
  'fix',
  'sell',
  'buy',
  'code',
  'test',
  'create'
]

const nouns = [
  'truck',
  'list',
  'dinner',
  'pasta',
  'beetle',
  'scooter',
  'backend',
  'frontend',
  'plants',
  'juggling',
  'sleep',
  'schedule'
]

const lists = [
  'to do',
  'in progess',
  'completed',
  'blocked',
  'things to do in the morning',
  'very very important'
]

const projects = [
  'summer tasks',
  'for the weekend',
  'everyday chores',
  'find a career'
]

const users = [
  'grinchie',
  'monkie',
  'shelbie',
  'lesa',
  'kushkush'
]

const types = [
  'bug',
  'improvement',
  'new feature'
]

const statuses = [
  'to do',
  'done',
  'in progress',
  'in review'
]

const priorities = [
  'highest',
  'high',
  'medium',
  'lowest',
  'low'
]

const description = `do this and then that and then this and then that. don't forget to do this`

const randomElement = (array) => {
  const element = array[Math.floor(Math.random() * array.length)]
  return element
}

const randomTitle = () => {
  const verb = randomElement(verbs)
  const noun = randomElement(nouns)
  return verb.concat(noun)
} 

const randomDate = () => {
  const randomDate = new Date(Date.now() - (Math.random() * 10000000000))
  const year = randomDate.getFullYear()
  const month = randomDate.getMonth()
  const day = randomDate.getDate()
  const hour = randomDate.getHours()
  const minute = randomDate.getMinutes()
  const date = `${month}/${day}/${year} at ${hour}:${minute}`
  return date
}

const issueMaker = () => {
  return {
  id: uniqid(),
  title: randomTitle(),
  description: description,
  type: randomElement(types),
  status: randomElement(statuses),
  priority: randomElement(priorities),
  dateCreated: randomDate(),
  dateDue: randomDate(),
  lastUpdated: randomDate(),
  creator: randomElement(users),
  assignee: randomElement(users)
}
}
const numUsers = 5
const numProjects = 3
const numLists = 5
const numIssues = 7


const makeIssues = () => {
  let randomNumIssues = Math.floor((Math.random() * numIssues))
  const issuesArray = []
  for (let i = 0; i < randomNumIssues; i++){
    issuesArray.push(issueMaker())
  }
  return issuesArray
}

const makeLists = () => {
  const listsArray = []
  for (let i = 0; i < numLists; i++){
    listsArray.push({
      id: uniqid(),
      title: randomElement(lists),
      issues: makeIssues()
    })
  }
  return listsArray
}

const makeProjects = () => {
  const projectsArray = []
  for (let i = 0; i < numProjects; i++){
    projectsArray.push({
      id: uniqid(),
      title: randomElement(projects),
      lists: makeLists()
    })
  }
  return projectsArray
}

const makeUsers = () => {
  const usersArray = []
  for(let i = 0; i < numUsers; i++){
    usersArray.push({
      id: uniqid(),
      name: users[i]
    })
  }
  return usersArray

}

const initDatabase = () => {
  const db = {
    users: makeUsers(), 
    projects: makeProjects()
  }
  return db
}


const dbJson = initDatabase()

fs.writeFile('db.json', JSON.stringify(dbJson, null, 2), (error) => {
  if (error){
    console.log(error)
  }
})