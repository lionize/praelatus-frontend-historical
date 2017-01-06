import { combineReducers } from 'redux-immutablejs'
import ticketsReducer from 'reducers/tickets'
import projectsReducer from 'reducers/projects'
import usersReducer from 'reducers/users'
import teamsReducer from 'reducers/teams'
import commentsReducer from 'reducers/comments'
import authReducer from 'reducers/auth'

export default combineReducers({
  tickets: ticketsReducer,
  projects: projectsReducer,
  users: usersReducer,
  teams: teamsReducer,
  comments: commentsReducer,
  auth: authReducer,
})
