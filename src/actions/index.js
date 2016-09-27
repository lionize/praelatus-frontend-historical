import { normalize } from 'normalizr'
import fetch from 'isomorphic-fetch'
import * as schema from 'actions/schema'
import * as types from 'constants/actionTypes'

const URL = 'http://localhost:8080/api/v1'

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
  return fetch(`${URL}/tickets`)
    .then(res => res.json())
    .then(json => dispatch(fetchTicketsSuccess(json.body)))
    .catch(e => dispatch(fetchTicketsFailure(e)))
}

