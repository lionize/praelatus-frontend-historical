import { Record, List, Map } from 'immutable'
import { Schema, arrayOf } from 'normalizr-immutable'

const Ticket = new Record({
  id: null,
  summary: null,
  description: null,
})

export const ticket = new Schema('tickets', Ticket)

const Team = new Record({
  id: null,
  createdAt: null,
  icon: null,
  name: null,
  urlSlug: null,
})

export const team = new Schema('teams', Team)
