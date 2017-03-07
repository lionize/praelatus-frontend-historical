import { compose, add, max, map, find, findIndex } from 'ramda'
import parseResponse from 'utils/parse-response'

const users = [
  {
    id: 0,
    username: 'user1',
    password: 'user1',
    email: 'user1@users.com',
    fullName: 'User 1',
    gravatar: 'user1@users.com',
    profilePic: '',
    isAdmin: false,
  },
  {
    id: 1,
    username: 'user2',
    password: 'user2',
    email: 'user2@users.com',
    fullName: 'User 2',
    gravatar: 'user2@users.com',
    profilePic: '',
    isAdmin: false,
  }
]

const projects = [
  {
    id: 0,
    createdDate: '',
    name: 'Project 1',
    key: 'PROJECT-1',
    homepage: '',
    iconURL: '',
    repo: '',
    lead: users[0],
  },
  {
    id: 1,
    createdDate: '',
    name: 'Project 2',
    key: 'PROJECT-2',
    homepage: '',
    iconURL: '',
    repo: '',
    lead: users[1],
  }
]

const tickets = [
  {
    id: 0,
    createdDate: '',
    updatedDate: '',
    key: 'TICKET-1',
    summary: 'First ticket',
    description: 'A ticket that is first',
    reporter: users[0],
    assignee: users[1],
    project: projects[0],
  },
  {
    id: 1,
    createdDate: '',
    updatedDate: '',
    key: 'TICKET-2',
    summary: 'Second ticket',
    description: 'A ticket that is second',
    reporter: users[1],
    assignee: users[0],
    project: projects[1],
  }
]

const teams = [
  {
    id: 0,
    name: 'Team 1',
    lead: users[0],
    members: users,
  },
  {
    id: 1,
    name: 'Team 2',
    lead: users[1],
    members: users,
  }
]

const comments = [
  {
    id: 0,
    body: 'This is first comment',
    author: users[0],
  },
  {
    id: 1,
    body: 'This is second comment',
    author: users[1],
  }
]

const respondWith = info => Promise.resolve({
  ...info
})

const nextID = compose(add(1), max, map('id'))
const idIndex = (id, collection) => findIndex({ id }, collection)

const fetchTickets = (payload = {}) => {
  return parseResponse(tickets, 'key')
}

const createTicket = (payload = {}) => {
  const id = nextID(tickets)

  const ticket = Object.assign({}, payload, { id })
  tickets.push(ticket)

  return parseResponse(ticket, 'key')
}

const updateTicket = (payload = {}) => {
  const index = idIndex(payload.id, tickets)

  tickets[index] = payload

  return parseResponse(payload, 'key')
}

const deleteTicket = payload => {
  const index = idIndex(payload.id, tickets)

  tickets.splice(index, 1)

  return payload
}

const fetchTeams = (payload = {}) => {
  return parseResponse(teams, 'name')
}

const createTeam = payload => {
  const id = nextID(teams)

  const team = Object.assign({}, payload, { id })
  teams.push(team)

  return parseResponse(team, 'name')
}

const updateTeam = payload => {
  const index = idIndex(payload.id, teams)

  teams[index] = payload

  return parseResponse(payload, 'name')
}

const deleteTeam = payload => {
  const index = idIndex(payload, teams)

  teams.splice(index, 1)

  return payload
}

const fetchProjects = (payload = {}) => {
  return parseResponse(projects, 'key')
}

const createProject = payload => {
  const id = nextID(projects)
  const key = payload.name.toUpperCase() + '-' + id

  const project = Object.assign({}, payload, { id, key })
  projects.push(project)

  return parseResponse(project, 'key')
}

const updateProject = (payload = {}) => {
  const index = idIndex(payload.id, projects)

  projects[index] = payload

  return parseResponse(payload, 'key')
}

const deleteProject = payload => {
  const index = idIndex(payload, projects)

  projects.splice(index, 1)

  return payload
}

const fetchComments = payload => respondWith(comments)
const createComment = payload => {}
const updateComment = payload => {}
const deleteComment = payload => {}

const fetchUsers = (payload = {}) => {
  return parseResponse(users, 'username')
}
const createUser = payload => {}
const updateUser = payload => {}
const deleteUser = payload => {}

const login = payload => {
  const user = find({ username: payload.username, password: payload.password }, users)

  return respondWith({ token: 'TOKEN_STRING', user })
}

const register = payload => {
  const user = payload
  user.id = nextID(users)
  users.push(user)
  delete user.password

  return respondWith({ token: 'TOKEN_STRING', user })
}

export default {
  fetchTickets,
  createTicket,
  updateTicket,
  deleteTicket,
  fetchTeams,
  createTeam,
  updateTeam,
  deleteTeam,
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
  fetchComments,
  createComment,
  updateComment,
  deleteComment,
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
  login,
  register,
}
