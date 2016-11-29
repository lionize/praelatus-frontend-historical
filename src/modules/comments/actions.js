/** @module comments/actions */

import { normalize, arrayOf } from 'normalizr-immutable'
import * as schema from 'schema'
import { types } from 'modules/comments'

/**
 * Action that represents a request for comments to be fetched.
 *
 * This action currently takes no parameters, and is simply signaling to the
 * application that comments should be fetched.
 *
 * @returns {object} - An object that contains the action's type.
 */
const fetchCommentsRequest = () => ({
  type: types.FETCH_COMMENTS_REQUEST,
})

/**
 * Action that represents a successful fetch of comments.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the comments that were fetched and a List of the ids of the
 * comments.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
const fetchCommentsSuccess = response => ({
  type: types.FETCH_COMMENTS_SUCCESS,
  response: normalize(response, arrayOf(schema.comment), {}),
})

/**
 * Action that represents a failed fetch of comments.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
const fetchCommentsFailure = e => ({
  type: types.FETCH_COMMENTS_FAILURE,
  message: e.message,
})

/**
 * Action that represents a request for comments to be created.
 *
 * @param {object} payload - The payload object. Represents the comment that should be created.
 * @returns {object} - An object that contains the action's type.
 */
const createCommentRequest = payload => ({
  type: types.CREATE_COMMENT_REQUEST,
  payload: payload,
})

/**
 * Action that represents the successful creation of a comment.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the comments that were fetched and a List of the ids of the
 * comments.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
const createCommentSuccess = response => ({
  type: types.CREATE_COMMENT_SUCCESS,
  response: normalize(response, schema.comment, {}),
})

/**
 * Action that represents failed creation of a comment.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
const createCommentFailure = error => ({
  type: types.CREATE_COMMENT_FAILURE,
  message: error.message,
})

/**
 * Action that represents a request for a comment to be updated.
 *
 * @param {object} payload - The payload object. Represents the comment that should be created.
 * @returns {object} - An object that contains the action's type.
 */
const updateCommentRequest = payload => ({
  type: types.UPDATE_COMMENT_REQUEST,
  payload: payload,
})

/**
 * Action that represents the successful update of a comment..
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the comments that were fetched and a List of the ids of the
 * comments.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
const updateCommentSuccess = response => ({
  type: types.UPDATE_COMMENT_SUCCESS,
  response: normalize(response, schema.comment, {}),
})

/**
 * Action that represents a failed update of a comment.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
const updateCommentFailure = error => ({
  type: types.UPDATE_COMMENT_FAILURE,
  message: error.message,
})

/**
 * Action that represents a request for a comment to be deleted.
 *
 * This action currently takes no parameters, and is simply signaling to the
 * application that comments should be fetched.
 *
 * @param {object} payload - The payload object. Represents the comment that should be created.
 * @returns {object} - An object that contains the action's type.
 */
const deleteCommentRequest = payload => ({
  type: types.DELETE_COMMENT_REQUEST,
  payload: payload,
})

/**
 * Action that represents a successful deletion of a comment.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the comments that were fetched and a List of the ids of the
 * comments.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
const deleteCommentSuccess = id => ({
  type: types.DELETE_COMMENT_SUCCESS,
  id: id,
})

/**
 * Action that represents a failed deletion of a comment.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
const deleteCommentFailure = error => ({
  type: types.DELETE_COMMENT_FAILURE,
  message: error.message,
})

/**
 * The actions combined into an object and exported as the default value.
 */
export default {
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchCommentsFailure,
  createCommentRequest,
  createCommentSuccess,
  createCommentFailure,
  updateCommentRequest,
  updateCommentSuccess,
  updateCommentFailure,
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure,
}
