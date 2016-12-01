import { Record, List, Map } from 'immutable'
import { Schema, arrayOf } from 'normalizr-immutable'

const Ticket = new Record({
  id: null,
  summary: null,
  description: null,
})
export const ticket = new Schema('tickets', Ticket)

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

const Team = new Record({
  id: null,
  name: null,
})
export const team = new Schema('teams', Team)

const Comment = new Record({
  id: null,
  body: null,
})
export const comment = new Schema('comments', Comment)

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
