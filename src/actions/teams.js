/** @module teams/actions */

import { normalize, arrayOf } from 'normalizr-immutable'
import * as schema from 'schema'
import types from 'types/teams'

/**
 * Action that represents a request for teams to be fetched.
 *
 * This action currently takes no parameters, and is simply signaling to the
 * application that teams should be fetched.
 *
 * @returns {object} - An object that contains the action's type.
 */
export const fetchTeamsRequest = payload => ({
  type: types.FETCH_TEAMS_REQUEST,
  payload,
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
export const fetchTeamsFailure = e => ({
  type: types.FETCH_TEAMS_FAILURE,
  message: e.message,
})

/**
 * Action that represents a request for teams to be created.
 *
 * @param {object} payload - The payload object. Represents the team that should be created.
 * @returns {object} - An object that contains the action's type.
 */
export const createTeamRequest = payload => ({
  type: types.CREATE_TEAM_REQUEST,
  payload: payload,
})

/**
 * Action that represents the successful creation of a team.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the teams that were fetched and a List of the ids of the
 * teams.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
export const createTeamSuccess = response => ({
  type: types.CREATE_TEAM_SUCCESS,
  response: normalize(response, schema.team, {}),
})

/**
 * Action that represents failed creation of a team.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
export const createTeamFailure = error => ({
  type: types.CREATE_TEAM_FAILURE,
  message: error.message,
})

/**
 * Action that represents a request for a team to be updated.
 *
 * @param {object} payload - The payload object. Represents the team that should be created.
 * @returns {object} - An object that contains the action's type.
 */
export const updateTeamRequest = payload => ({
  type: types.UPDATE_TEAM_REQUEST,
  payload: payload,
})

/**
 * Action that represents the successful update of a team..
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the teams that were fetched and a List of the ids of the
 * teams.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
export const updateTeamSuccess = response => ({
  type: types.UPDATE_TEAM_SUCCESS,
  response: normalize(response, schema.team, {}),
})

/**
 * Action that represents a failed update of a team.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
export const updateTeamFailure = error => ({
  type: types.UPDATE_TEAM_FAILURE,
  message: error.message,
})

/**
 * Action that represents a request for a team to be deleted.
 *
 * This action currently takes no parameters, and is simply signaling to the
 * application that teams should be fetched.
 *
 * @param {object} payload - The payload object. Represents the team that should be created.
 * @returns {object} - An object that contains the action's type.
 */
export const deleteTeamRequest = payload => ({
  type: types.DELETE_TEAM_REQUEST,
  payload: payload,
})

/**
 * Action that represents a successful deletion of a team.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the teams that were fetched and a List of the ids of the
 * teams.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
export const deleteTeamSuccess = id => ({
  type: types.DELETE_TEAM_SUCCESS,
  id: id,
})

/**
 * Action that represents a failed deletion of a team.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
export const deleteTeamFailure = error => ({
  type: types.DELETE_TEAM_FAILURE,
  message: error.message,
})
