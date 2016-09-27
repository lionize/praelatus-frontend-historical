import { normalize } from 'normalizr'
import * as schema from 'actions/schema'
import * as api from 'api'
import * as types from 'constants'

const fetchTicketsRequest = () => ({
  type: types.FETCH_TICKETS_REQUEST
})

const fetchTicketsSuccess = (response) => ({
  type: types.FETCH_TICKETS_SUCCESS,
  response: normalize(response, schema.arrayOfTickets)
})

const fetchTicketsFailure = (error) => ({
  type: types.FETCH_TICKETS_FAILURE,
  message: error.message
})

export const fetchTickets = () => (dispatch) => {
  dispatch(fetchTicketsRequest())
  return api.fetchTickets().then(
    response => dispatch(fetchTicketsSuccess(response)),
    error => dispatch(fetchTicketsFailure(error))
  )
}

