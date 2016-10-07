import { combineReducers } from 'redux'
import { normalize } from 'normalizr'
import * as schema from 'actions/schema'
import * as api from 'api'

export const types = {
  FETCH_TEAMS_SUCCESS: 'TEAMS/FETCH_SUCCESS',
  FETCH_TEAMS_FAILURE: 'TEAMS/FETCH_FAILURE',
  FETCH_TEAMS_REQUEST: 'TEAMS/FETCH_REQUEST',
}

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

const reducer = combineReducers({
  byId,
  ids,
  error,
  loading
})

export default reducer

export const actions = {
  fetchTeamsRequest: () => ({
    type: types.FETCH_TEAMS_REQUEST
  }),

  fetchTeamsSuccess: (response) => ({
    type: types.FETCH_TEAMS_SUCCESS,
    response: normalize(response, schema.arrayOfTeams)
  }),

  fetchTeamsFailure: (error) => ({
    type: types.FETCH_TEAMS_FAILURE,
    message: error.message
  }),

  fetchTeams: () => (dispatch) => {
    dispatch(actions.fetchTeamsRequest())
    return api.fetchTickets()
      .then(res => res.json())
      .then(json => dispatch(actions.fetchTeamsSuccess(json.body)))
      .catch(e => dispatch(actions.fetchTeamsFailure(e)))
  }
}
