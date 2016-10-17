import { combineReducers } from 'redux-immutablejs'
import { Map, List, fromJS } from 'immutable'
import { normalize, arrayOf } from 'normalizr'
import * as schema from 'schema'
import * as api from 'api'

export const types = {
  FETCH_TICKETS_SUCCESS: 'TICKETS/FETCH_SUCCESS',
  FETCH_TICKETS_FAILURE: 'TICKETS/FETCH_FAILURE',
  FETCH_TICKETS_REQUEST: 'TICKETS/FETCH_REQUEST',
}

const byId = (state = Map(), action) => {
  if (action.response) {
    return state.merge(action.response.entities.tickets)
  }

  return state
}

const ids = (state = List(), action) => {
  switch (action.type) {
    case types.FETCH_TICKETS_SUCCESS:
      return List(action.response.result)
    default:
      return state
  }
}

const error = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_TICKETS_FAILURE:
      return action.message
    case types.FETCH_TICKETS_SUCCESS:
    case types.FETCH_TICKETS_REQUEST:
      return null
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_TICKETS_REQUEST:
      return true
    case types.FETCH_TICKETS_SUCCESS:
    case types.FETCH_TICKETS_FAILURE:
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
  fetchTicketsRequest: () => ({ type: types.FETCH_TICKETS_REQUEST }),

  fetchTicketsSuccess: response => ({
    type: types.FETCH_TICKETS_SUCCESS,
    response: normalize(response, arrayOf(schema.ticket), {}),
  }),

  fetchTicketsFailure: error => ({
    type: types.FETCH_TICKETS_FAILURE,
    message: error.message,
  }),
}

export const ticketsSelector = (state) => {
  const ticketIds = state.getIn(['tickets', 'ids'])
  return ticketIds.map(id => state.getIn(['tickets', 'byId'])[id])
}
export const ticketSelector = (state, id) => state.getIn(['tickets', 'byId'])[id]
export const loadingSelector = state => state.getIn(['tickets', 'loading'])
export const errorSelector = state => state.getIn(['tickets', 'error'])
