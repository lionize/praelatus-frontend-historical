const users = [
  {
    id: 0,
    username: 'user1',
    email: 'user1@users.com',
    fullName: 'User 1',
    gravatar: 'user1@users.com',
    profilePic: '',
    isAdmin: false,
  },
  {
    id: 1,
    username: 'user2',
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

const fetchTickets = payload => {
  if (!!payload.id) {
    console.log(tickets[payload.id])
    return respondWith([tickets[payload.id]])
  } else {
    return respondWith(tickets)
  }
}
const createTicket = payload => {}
const updateTicket = payload => {}
const deleteTicket = payload => {}

const fetchTeams = payload => {
  if (!!payload.id) {
    return respondWith([teams[payload.id]])
  } else {
    return respondWith(teams)
  }
}
const createTeam = payload => {}
const updateTeam = payload => {}
const deleteTeam = payload => {}

const fetchProjects = payload => {
  if (!!payload.id) {
    return respondWith([projects[payload.id]])
  } else {
    return respondWith(projects)
  }
}
const createProject = payload => {}
const updateProject = payload => {}
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
  return 'test'
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
}
