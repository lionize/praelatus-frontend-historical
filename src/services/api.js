import { flowRight as compose, add, max, map, find, findIndex } from 'lodash/fp'
import parseResponse from 'utils/parse-response'
import axios from 'axios'

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


let api = axios.create({
  withCredentials: true
})

const fetchTickets = (payload = {}) => {
  return api.get('/api/tickets').
    then(res => parseResponse(res.data, 'key'))
}

const createTicket = (payload = {}) => {
  return api.post('/api/tickets', payload).
    then(res => parseResponse(res, 'key'))
}

const updateTicket = (payload = {}) => {
  return api.put('/api/tickets/'+payload.key).
    then(res => parseResponse(res, 'key'))
}

const deleteTicket = payload => {
  return api.delete('/api/tickets/'+payload.key).
    then(res => res)
}

const fetchTeams = (payload = {}) => {
  return api.get('/api/teams').
    then(res => parseResponse(res, 'name'))
}

const createTeam = payload => {
  return api.post('/api/teams', payload).
    then(res => parseResponse(res, 'key'))
}

const updateTeam = payload => {
  return api.put('/api/tickets/'+payload.id, payload).
    then(res => parseResponse(res, 'key'))
}

const deleteTeam = payload => {
  return api.delete('/api/tickets/'+payload.id).
    then(res => parseResponse(res, 'key'))
}

const fetchProjects = (payload = {}) => {
  return api.get('/api/projects').
    then(res => parseResponse(res, 'name'))
}

const createProject = payload => {
  return api.post('/api/projects', payload).
    then(res => parseResponse(res, 'name'))
}

const updateProject = (payload = {}) => {
  return api.put('/api/projects/'+payload.key, payload).
    then(res => parseResponse(res, 'name'))
}

const deleteProject = payload => {
  return api.post('/api/projects'+payload.key).
    then(res => parseResponse(res, 'name'))
}

const fetchComments = payload => {
  return api.get('/api/tickets/'+payload.key+'/comments').
    then(res => res)
}

const createComment = payload => {
  return api.post('/api/tickets/'+payload.key+'/comments', payload).
    then(res => res)
}

const updateComment = payload => {
  return api.put('/api/tickets/comments/'+payload.id, payload).
    then(res => res)
}

const deleteComment = payload => {
  return api.delete('/api/tickets/comments/'+payload.id).
    then(res => res)
}

const fetchUsers = (payload = {}) => {
  return parseResponse(users, 'username')
}
const updateUser = payload => {}
const deleteUser = payload => {}

const login = payload => {
  return api.post('/api/users/sessions', payload).
    then((res) => {
      console.log('res', res)
      api.defaults.headers.common['Authorization'] = res.headers.token
      return res.data
    })
}

const register = payload => {
  return api.post('/api/users', payload).
    then((res) => res.data)
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
  updateUser,
  deleteUser,
  login,
  register,
}
