import { normalize } from 'normalizr'
import fetch from 'isomorphic-fetch'
import * as schema from 'actions/schema'
import * as types from 'constants/actionTypes'

const URL = 'http://localhost:8080/api/v1'

export const fetchTeamsRequest = () => ({
  type: types.FETCH_TEAMS_REQUEST
})

export const fetchTeamsSuccess = (response) => ({
  type: types.FETCH_TEAMS_SUCCESS,
  response: normalize(response, schema.arrayOfTeams)
})

export const fetchTeamsFailure = (error) => ({
  type: types.FETCH_TEAMS_FAILURE,
  message: error.message
})

export const fetchTeams = () => (dispatch) => {
  dispatch(fetchTeamsRequest())
  return fetch(`${URL}/tickets`)
    .then(res => res.json())
    .then(json => dispatch(fetchTeamsSuccess(json.body)))
    .catch(e => dispatch(fetchTeamsFailure(e)))
}
