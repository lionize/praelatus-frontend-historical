/** @module teams/actions */

import { normalize, arrayOf } from 'normalizr-immutable'
import * as schema from 'schema'
import { types } from 'modules/teams'

/**
 * Action that represents a request for teams to be fetched. 
 *
 * This action currently takes no parameters, and is simply signaling to the
 * application that teams should be fetched.
 *
 * @returns {object} - An object that contains the action's type.
 */
const fetchTeamsRequest = () => ({
  type: types.FETCH_TEAMS_REQUEST,
})

/**
 * Action that represents a successful fetch of teams.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the teams that were fetched and a List of the ids of the
 * teams.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
const fetchTeamsSuccess = response => ({
  type: types.FETCH_TEAMS_SUCCESS,
  response: normalize(response, arrayOf(schema.team), {}),
})

/**
 * Action that represents a failed fetch of teams.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
const fetchTeamsFailure = e => ({
  type: types.FETCH_TEAMS_FAILURE,
  message: e.message,
})

const createTeamRequest = payload => ({
  type: types.CREATE_TEAM_REQUEST,
  payload: payload,
})

const createTeamSuccess = response => ({
  type: types.CREATE_TEAM_SUCCESS,
  response: normalize(response, schema.team, {}),
})

const createTeamFailure = error => ({
  type: types.CREATE_TEAM_FAILURE,
  message: error.message,
})

const updateTeamRequest = payload => ({
  type: types.UPDATE_TEAM_REQUEST,
  payload: payload,
})

const updateTeamSuccess = response => ({
  type: types.UPDATE_TEAM_SUCCESS,
  response: normalize(response, schema.team, {}),
})

const updateTeamFailure = error => ({
  type: types.UPDATE_TEAM_FAILURE,
  message: error.message,
})

const deleteTeamRequest = payload => ({
  type: types.DELETE_TEAM_REQUEST,
  payload: payload,
})

const deleteTeamSuccess = id => ({
  type: types.DELETE_TEAM_SUCCESS,
  id: id,
})

const deleteTeamFailure = error => ({
  type: types.DELETE_TEAM_FAILURE,
  message: error.message,
})

/**
 * The actions combined into an object and exported as the default value.
 */
export default {
  fetchTeamsRequest,
  fetchTeamsSuccess,
  fetchTeamsFailure,
  createTeamRequest,
  createTeamSuccess,
  createTeamFailure,
  updateTeamRequest,
  updateTeamSuccess,
  updateTeamFailure,
  deleteTeamRequest,
  deleteTeamSuccess,
  deleteTeamFailure,
}
