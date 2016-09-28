import { combineReducers } from 'redux'
import {
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE,
  FETCH_TEAMS_REQUEST,
} from 'constants/actionTypes'

const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.teams
    }
  }

  return state
}

const ids = (state = [], action) => {
  switch (action.type) {
    case FETCH_TEAMS_SUCCESS:
      return action.response.result
    default:
      return state
  }
}

const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_TEAMS_FAILURE:
      return action.message
    case FETCH_TEAMS_SUCCESS:
    case FETCH_TEAMS_REQUEST:
      return null
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case FETCH_TEAMS_REQUEST:
      console.log('request')
      return true
    case FETCH_TEAMS_SUCCESS:
    case FETCH_TEAMS_FAILURE:
      return false
    default:
      return state
  }
}

const teams = combineReducers({
  byId,
  ids,
  error,
  loading
})

export default teams
