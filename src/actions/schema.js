import { Schema, arrayOf } from 'normalizr'

export const ticket = new Schema('tickets')
export const arrayOfTodos = arrayOf(ticket)
