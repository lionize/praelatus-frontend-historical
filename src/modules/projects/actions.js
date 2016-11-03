/** @module projects/actions */

import { normalize, arrayOf } from 'normalizr-immutable'
import * as schema from 'schema'
import { types } from 'modules/projects'

/**
 * Action that represents a request for projects to be fetched. 
 *
 * This action currently takes no parameters, and is simply signaling to the
 * application that projects should be fetched.
 *
 * @returns {object} - An object that contains the action's type.
 */
const fetchProjectsRequest = () => ({
  type: types.FETCH_PROJECTS_REQUEST,
})

/**
 * Action that represents a successful fetch of projects.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the projects that were fetched and a List of the ids of the
 * projects.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
const fetchProjectsSuccess = response => ({
  type: types.FETCH_PROJECTS_SUCCESS,
  response: normalize(response, arrayOf(schema.project), {}),
})

/**
 * Action that represents a failed fetch of projects.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
const fetchProjectsFailure = e => ({
  type: types.FETCH_PROJECTS_FAILURE,
  message: e.message,
})

/**
 * The actions combined into an object and exported as the default value.
 */
export default {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsFailure,
}
