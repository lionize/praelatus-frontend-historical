/** @module comments/sagas */

import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import types from 'types/comments'
import * as actions from 'actions/comments'
import * as dataActions from 'actions/data'
import api from 'api'

/**
 * Saga that represents async interaction with the server for fetching comments.
 *
 * The function calls the api fetchComments method passing the action's
 * payload (filter options, etc.).
 *
 * It calls the fetchCommentsSuccess action passing the response if the call is
 * successful, and calls the fetchCommentsFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* fetchComments(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.fetchComments, payload)
    yield put(dataActions.fetchDataSuccess(response, 'comment'))
  } catch (e) {
    yield put(actions.fetchCommentsFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for creating a
 * comment.
 *
 * The function calls the api createComment method passing the action's payload
 * (information about the comment to be created).
 *
 * It calls the createCommentSuccess action passing the response if the call is
 * successful, and calls the createCommentFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* createComment(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.createComment, payload)
    yield put(actions.createCommentSuccess(response))
  } catch (e) {
    yield put(actions.createCommentFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for updating a
 * comment.
 *
 * The function calls the api updateComment method passing the action's payload
 * (id of and updated fields for the comment to be updated).
 *
 * If calls the updateCommentSuccess action passing the response if the call is
 * successful, and calls the updateCommentFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* updateComment(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.updateComment, payload)
    yield put(actions.updateCommentSuccess(response))
  } catch (e) {
    yield put(actions.updateCommentFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for deleting a
 * comment.
 *
 * The function calls the api deleteComment method passing the action's payload
 * (the id of the comment being deleted).
 *
 * It calls the deleteCommentSuccess action passing the response if the call is
 * successful, and calls the deleteCommentFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* deleteComment(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.deleteComment, payload)
    yield put(actions.deleteCommentSuccess(response))
  } catch (e) {
    yield put(actions.deleteCommentFailure(e))
  }
}

/**
 * Watcher generator details all of the comment module sagas and their take
 * types.
 *
 * If the saga is added using takeEvery, the saga will process every action
 * that it receives. If the saga is added using takeLatest, the saga will drop
  * all previous actions that it received and only handle the latest call.
 */
export default function* watcher() {
  yield [
    takeEvery(types.FETCH_COMMENTS_REQUEST, fetchComments),
    takeEvery(types.CREATE_COMMENT_REQUEST, createComment),
    takeEvery(types.UPDATE_COMMENT_REQUEST, updateComment),
    takeEvery(types.DELETE_COMMENT_REQUEST, deleteComment),
  ]
}
