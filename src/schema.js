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
  name: null,
})
export const project = new Schema('projects', Project)

const Team = new Record({
  id: null,
  createdAt: null,
  icon: null,
  name: null,
  urlSlug: null,
})
export const team = new Schema('teams', Team)

const Comment = new Record({
  id: null,
  text: null,
})
export const comment = new Schema('comments', Comment)
