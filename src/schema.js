import { Schema, arrayOf } from 'normalizr'

export const ticket = new Schema('tickets')
export const arrayOfTickets = arrayOf(ticket)

export const team = new Schema('teams')
export const arrayOfTeams = arrayOf(team)
