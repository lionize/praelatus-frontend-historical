import { normalize } from 'normalizr'
import * as schema from 'actions/schema'
import * as types from 'constants/actionTypes'

import * as api from 'api'

export const fetchTicketsRequest = () => ({
  type: types.FETCH_TICKETS_REQUEST
})

export const fetchTicketsSuccess = (response) => ({
  type: types.FETCH_TICKETS_SUCCESS,
  response: normalize(response, schema.arrayOfTickets)
})

export const fetchTicketsFailure = (error) => ({
  type: types.FETCH_TICKETS_FAILURE,
  message: error.message
})

export const fetchTickets = () => (dispatch) => {
  dispatch(fetchTicketsRequest())
  return api.fetchTickets()
    .then(res => res.json())
    .then(json => dispatch(fetchTicketsSuccess(json.body)))
    .catch(e => dispatch(fetchTicketsFailure(e)))
}

