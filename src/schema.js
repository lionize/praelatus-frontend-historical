import { Record, List, Map } from 'immutable'
import { Schema, arrayOf } from 'normalizr-immutable'

const User = new Record({
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
  summary: null,
  description: null,
})
export const ticket = new Schema('tickets', Ticket)

const Team = new Record({
  id: null,
  name: null,
  lead: User({}),
  members: List(),
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
})
export const project = new Schema('projects', Project)

const Comment = new Record({
  id: null,
  body: null,
  author: new User({})
})
export const comment = new Schema('comments', Comment)
comment.define({
  author: user,
})

