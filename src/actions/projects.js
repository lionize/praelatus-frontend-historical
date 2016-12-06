/** @module projects/actions */

import { normalize, arrayOf } from 'normalizr-immutable'
import * as schema from 'schema'
import types from 'types/projects'

/**
 * Action that represents a request for projects to be fetched.
 *
 * This action currently takes no parameters, and is simply signaling to the
 * application that projects should be fetched.
 *
 * @returns {object} - An object that contains the action's type.
 */
export const fetchProjectsRequest = () => ({
  type: types.FETCH_PROJECTS_REQUEST,
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
export const fetchProjectsFailure = e => ({
  type: types.FETCH_PROJECTS_FAILURE,
  message: e.message,
})

/**
 * Action that represents a request for projects to be created.
 *
 * @param {object} payload - The payload object. Represents the project that should be created.
 * @returns {object} - An object that contains the action's type.
 */
export const createProjectRequest = payload => ({
  type: types.CREATE_PROJECT_REQUEST,
  payload: payload,
})

/**
 * Action that represents the successful creation of a project.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the projects that were fetched and a List of the ids of the
 * projects.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
export const createProjectSuccess = response => ({
  type: types.CREATE_PROJECT_SUCCESS,
  response: normalize(response, schema.project, {}),
})

/**
 * Action that represents failed creation of a project.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
export const createProjectFailure = error => ({
  type: types.CREATE_PROJECT_FAILURE,
  message: error.message,
})

/**
 * Action that represents a request for a project to be updated.
 *
 * @param {object} payload - The payload object. Represents the project that should be created.
 * @returns {object} - An object that contains the action's type.
 */
export const updateProjectRequest = payload => ({
  type: types.UPDATE_PROJECT_REQUEST,
  payload: payload,
})

/**
 * Action that represents the successful update of a project..
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the projects that were fetched and a List of the ids of the
 * projects.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
export const updateProjectSuccess = response => ({
  type: types.UPDATE_PROJECT_SUCCESS,
  response: normalize(response, schema.project, {}),
})

/**
 * Action that represents a failed update of a project.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
export const updateProjectFailure = error => ({
  type: types.UPDATE_PROJECT_FAILURE,
  message: error.message,
})

/**
 * Action that represents a request for a project to be deleted.
 *
 * This action currently takes no parameters, and is simply signaling to the
 * application that projects should be fetched.
 *
 * @param {object} payload - The payload object. Represents the project that should be created.
 * @returns {object} - An object that contains the action's type.
 */
export const deleteProjectRequest = payload => ({
  type: types.DELETE_PROJECT_REQUEST,
  payload: payload,
})

/**
 * Action that represents a successful deletion of a project.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the projects that were fetched and a List of the ids of the
 * projects.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
export const deleteProjectSuccess = id => ({
  type: types.DELETE_PROJECT_SUCCESS,
  id: id,
})

/**
 * Action that represents a failed deletion of a project.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
export const deleteProjectFailure = error => ({
  type: types.DELETE_PROJECT_FAILURE,
  message: error.message,
})
