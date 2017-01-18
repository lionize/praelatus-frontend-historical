import { flowRight as compose, add, max, map, find, findIndex } from 'lodash/fp'
import { fromJS } from 'immutable'

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

const fetchTickets = payload => {
  if (!!payload.id) {
    return respondWith([tickets[payload.id]])
  } else {
    return respondWith(tickets)
  }
}
const createTicket = payload => {
  const id = nextID(tickets)

  const ticket = fromJS({
    id,
    createdDate: '',
    updatedDate: '',
    key: '',
    summary: '',
    description: '',
    reporter: null,
    assignee: null,
  }).merge(payload)

  tickets.push(ticket.toJS())

  return ticket
}
const updateTicket = payload => {
  const index = idIndex(payload.get('id'), tickets)

  tickets[index] = payload.toJS()

  return true
}

const deleteTicket = payload => {
  const index = idIndex(payload, tickets)

  tickets.splice(index, 1)

  return payload
}

const fetchTeams = payload => {
  if (!!payload.id) {
    return respondWith([teams[payload.id]])
  } else {
    return respondWith(teams)
  }
}
const createTeam = payload => {
  const id = nextID(teams)

  const team = fromJS({
    id,
    name: '',
    lead: null,
    members: null,
  }).merge(payload)

  teams.push(team.toJS())

  return team
}
const updateTeam = payload => {
  const index = idIndex(payload.get('id'), teams)

  teams[index] = payload.toJS()

  return true
}
const deleteTeam = payload => {
  const index = idIndex(payload, teams)

  teams.splice(index, 1)

  return payload
}

const fetchProjects = payload => {
  if (!!payload.id) {
    return respondWith([projects[payload.id]])
  } else {
    return respondWith(projects)
  }
}
const createProject = payload => {
  const id = nextID(projects)

  const project = fromJS({
    id,
    createdDate: '',
    name: '',
    key: '',
    homepage: '',
    iconURL: '',
    repo: '',
    lead: null,
  }).merge(payload)

  projects.push(project.toJS())

  return project
}
const updateProject = payload => {
  const index = idIndex(payload.get('id'), projects)

  projects[index] = payload.toJS()

  return true
}
const deleteProject = payload => {}

const fetchComments = payload => respondWith(comments)
const createComment = payload => {}
const updateComment = payload => {}
const deleteComment = payload => {}

const fetchUsers = payload => {
  if (!!payload.id) {
    return respondWith([users[payload.id]])
  } else {
    return respondWith(users)
  }
}
const createUser = payload => {}
const updateUser = payload => {}
const deleteUser = payload => {}

const login = payload => {
  const user = find({ username: payload.get('username'), password: payload.get('password') }, users)

  return respondWith({ token: 'TOKEN_STRING', user })
}

const register = payload => {
  const user = payload.toJS()
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
