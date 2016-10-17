import { combineReducers } from 'redux-immutablejs'
import { Map, List } from 'immutable'
import { normalize, arrayOf } from 'normalizr'
import * as schema from 'schema'
import * as api from 'api'

export const types = {
  FETCH_TEAMS_SUCCESS: 'TEAMS/FETCH_SUCCESS',
  FETCH_TEAMS_FAILURE: 'TEAMS/FETCH_FAILURE',
  FETCH_TEAMS_REQUEST: 'TEAMS/FETCH_REQUEST',
}

const byId = (state = Map(), action) => {
  if (action.response) {
    return state.merge(action.response.entities.teams)
  }

  return state
}

const ids = (state = List(), action) => {
  switch (action.type) {
    case types.FETCH_TEAMS_SUCCESS:
      return List(action.response.result)
    default:
      return state
  }
}

const error = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_TEAMS_FAILURE:
      return action.message
    case types.FETCH_TEAMS_SUCCESS:
    case types.FETCH_TEAMS_REQUEST:
      return null
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_TEAMS_REQUEST:
      return true
    case types.FETCH_TEAMS_SUCCESS:
    case types.FETCH_TEAMS_FAILURE:
      return false
    default:
      return state
  }
}

const reducer = combineReducers({
  byId,
  ids,
  error,
  loading,
})

export default reducer

export const actions = {
  fetchTeamsRequest: () => ({
    type: types.FETCH_TEAMS_REQUEST,
  }),

  fetchTeamsSuccess: response => ({
    type: types.FETCH_TEAMS_SUCCESS,
    response: normalize(response, arrayOf(schema.team), {}),
  }),

  fetchTeamsFailure: e => ({
    type: types.FETCH_TEAMS_FAILURE,
    message: e.message,
  }),
}
