import { Record, List } from 'immutable'
import { Schema, arrayOf } from 'normalizr-immutable'

export const User = new Record({
  id: null,
  username: null,
  email: null,
  fullName: null,
  gravatar: null,
  profilePic: null,
  isAdmin: null,
})
export const user = new Schema('users', User)

const Ticket = new Record({
  id: null,
  createdDate: null,
  updatedDate: null,
  key: null,
  summary: null,
  description: null,
  reporter: new User({}),
  assignee: new User({}),
})
export const ticket = new Schema('tickets', Ticket)
ticket.define({
  reporter: user,
  assignee: user,
})

const Team = new Record({
  id: null,
  name: null,
  lead: new User({}),
  members: new List(),
})
export const team = new Schema('teams', Team)
team.define({
  lead: user,
  members: arrayOf(user),
})

const Project = new Record({
  id: null,
  createdDate: null,
  name: null,
  key: null,
  homepage: null,
  iconURL: null,
  repo: null,
  lead: new User({}),
})
export const project = new Schema('projects', Project)
project.define({
  lead: user,
})

const Comment = new Record({
  id: null,
  body: null,
  author: new User({}),
})
export const comment = new Schema('comments', Comment)
comment.define({
  author: user,
})
