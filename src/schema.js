import { schema } from 'normalizr'

const userSchema = new schema.Entity('users', {}, { idAttribute: 'username' })
export const usersSchema = [ userSchema ]

const ticketSchema = new schema.Entity('tickets', {
  reporter: userSchema,
  assignee: userSchema,
}, { idAttribute: 'key' })
export const ticketsSchema = [ ticketSchema ]

const teamSchema = new schema.Entity('teams', {
  lead: userSchema,
  members: usersSchema,
}, { idAttribute: 'name' })
export const teamsSchema = [ teamSchema ]

const projectSchema = new schema.Entity('projects', {
  lead: userSchema,
}, { idAttribute: 'key' })
export const projectsSchema = [ projectSchema ]

const commentSchema = new schema.Entity('comments', {
  author: userSchema,
})
export const commentsSchema = [ commentSchema ]
