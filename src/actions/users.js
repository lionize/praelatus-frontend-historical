/** @module users/actions */

import { normalize, arrayOf } from 'normalizr-immutable'
import * as schema from 'schema'
import types from 'types/users'

/**
 * Action that represents a request for users to be fetched.
 *
 * This action currently takes no parameters, and is simply signaling to the
 * application that users should be fetched.
 *
 * @returns {object} - An object that contains the action's type.
 */
export const fetchUsersRequest = () => ({
  type: types.FETCH_USERS_REQUEST,
})

/**
 * Action that represents a failed fetch of users.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
export const fetchUsersFailure = e => ({
  type: types.FETCH_USERS_FAILURE,
  message: e.message,
})

/**
 * Action that represents a request for users to be created.
 *
 * @param {object} payload - The payload object. Represents the user that should be created.
 * @returns {object} - An object that contains the action's type.
 */
export const createUserRequest = payload => ({
  type: types.CREATE_USER_REQUEST,
  payload: payload,
})

/**
 * Action that represents the successful creation of a user.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the users that were fetched and a List of the ids of the
 * users.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
export const createUserSuccess = response => ({
  type: types.CREATE_USER_SUCCESS,
  response: normalize(response, schema.user, {}),
})

/**
 * Action that represents failed creation of a user.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
export const createUserFailure = error => ({
  type: types.CREATE_USER_FAILURE,
  message: error.message,
})

/**
 * Action that represents a request for a user to be updated.
 *
 * @param {object} payload - The payload object. Represents the user that should be created.
 * @returns {object} - An object that contains the action's type.
 */
export const updateUserRequest = payload => ({
  type: types.UPDATE_USER_REQUEST,
  payload: payload,
})

/**
 * Action that represents the successful update of a user..
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the users that were fetched and a List of the ids of the
 * users.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
export const updateUserSuccess = response => ({
  type: types.UPDATE_USER_SUCCESS,
  response: normalize(response, schema.user, {}),
})

/**
 * Action that represents a failed update of a user.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
export const updateUserFailure = error => ({
  type: types.UPDATE_USER_FAILURE,
  message: error.message,
})

/**
 * Action that represents a request for a user to be deleted.
 *
 * This action currently takes no parameters, and is simply signaling to the
 * application that users should be fetched.
 *
 * @param {object} payload - The payload object. Represents the user that should be created.
 * @returns {object} - An object that contains the action's type.
 */
export const deleteUserRequest = payload => ({
  type: types.DELETE_USER_REQUEST,
  payload: payload,
})

/**
 * Action that represents a successful deletion of a user.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the users that were fetched and a List of the ids of the
 * users.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
export const deleteUserSuccess = id => ({
  type: types.DELETE_USER_SUCCESS,
  id: id,
})

/**
 * Action that represents a failed deletion of a user.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
export const deleteUserFailure = error => ({
  type: types.DELETE_USER_FAILURE,
  message: error.message,
})

