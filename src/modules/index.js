import { combineReducers } from 'redux-immutablejs'
import tickets from 'modules/tickets'
import teams from 'modules/teams'
import comments from 'modules/comments'
import projects from 'modules/projects'
import users from 'modules/users'

export default combineReducers({
  tickets,
  teams,
  comments,
  projects,
  users,
})
