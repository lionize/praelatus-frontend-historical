import { combineReducers } from 'redux'
import ticketsReducer from 'reducers/tickets'
import projectsReducer from 'reducers/projects'
import usersReducer from 'reducers/users'
import teamsReducer from 'reducers/teams'
import commentsReducer from 'reducers/comments'

export default combineReducers({
  ticketsReducer,
  projectsReducer,
  usersReducer,
  teamsReducer,
  commentsReducer,
})
