import { combineReducers } from 'redux'
import { normalize } from 'normalizr'
import * as schema from 'schema'
import * as api from 'api'

export const types = {
  FETCH_TICKETS_SUCCESS: 'TICKETS/FETCH_SUCCESS',
  FETCH_TICKETS_FAILURE: 'TICKETS/FETCH_FAILURE',
  FETCH_TICKETS_REQUEST: 'TICKETS/FETCH_REQUEST',
}

const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.tickets,
    }
  }

  return state
}

const ids = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_TICKETS_SUCCESS:
      return action.response.result
    default:
      return state
  }
}

const errorMessage = (state = null, action) => {
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
  errorMessage,
  loading,
})
export default reducer

export const actions = {
  fetchTicketsRequest: () => ({ type: types.FETCH_TICKETS_REQUEST }),

  fetchTicketsSuccess: response => ({
    type: types.FETCH_TICKETS_SUCCESS,
    response: normalize(response, schema.arrayOfTickets),
  }),

  fetchTicketsFailure: error => ({
    type: types.FETCH_TICKETS_FAILURE,
    message: error.message,
  }),

  fetchTickets: (filters = {}) => (dispatch) => {
    dispatch(actions.fetchTicketsRequest())
    return api.fetchTickets(filters)
      .then(res => res.json())
      .then(json => dispatch(actions.fetchTicketsSuccess(json.body)))
      .catch(e => dispatch(actions.fetchTicketsFailure(e)))
  },
}

export const ticketsSelector = (state) => {
  const ticketIds = state.tickets.ids
  return ticketIds.map(id => state.tickets.byId[id])
}
export const ticketSelector = (state, id) => state.tickets.byId[id]
export const loadingSelector = state => state.tickets.loading
export const errorSelector = state => state.tickets.error
