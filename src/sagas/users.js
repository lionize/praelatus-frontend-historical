/** @module users/sagas */

import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import types from 'types/users'
import * as actions from 'actions/users'
import * as dataActions from 'actions/data'
import api from 'api'

/**
 * Saga that represents async interaction with the server for fetching users.
 *
 * The function calls the api fetchUsers method passing the action's
 * payload (filter options, etc.).
 *
 * It calls the fetchUsersSuccess action passing the response if the call is
 * successful, and calls the fetchUsersFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* fetchUsers(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.fetchUsers, payload)
    yield put(dataActions.fetchDataSuccess(response, 'user'))
  } catch (e) {
    yield put(actions.fetchUsersFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for creating a
 * user.
 *
 * The function calls the api createUser method passing the action's payload
 * (information about the user to be created).
 *
 * It calls the createUserSuccess action passing the response if the call is
 * successful, and calls the createUserFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* createUser(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.createUser, payload)
    yield put(actions.createUserSuccess(response))
  } catch (e) {
    yield put(actions.createUserFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for updating a
 * user.
 *
 * The function calls the api updateUser method passing the action's payload
 * (id of and updated fields for the user to be updated).
 *
 * If calls the updateUserSuccess action passing the response if the call is
 * successful, and calls the updateUserFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* updateUser(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.updateUser, payload)
    yield put(actions.updateUserSuccess(response))
  } catch (e) {
    yield put(actions.updateUserFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for deleting a
 * user.
 *
 * The function calls the api deleteUser method passing the action's payload
 * (the id of the user being deleted).
 *
 * It calls the deleteUserSuccess action passing the response if the call is
 * successful, and calls the deleteUserFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* deleteUser(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.deleteUser, payload)
    yield put(actions.deleteUserSuccess(response))
  } catch (e) {
    yield put(actions.deleteUserFailure(e))
  }
}

/**
 * Watcher generator details all of the user module sagas and their take
 * types.
 *
 * If the saga is added using takeEvery, the saga will process every action
 * that it receives. If the saga is added using takeLatest, the saga will drop
  * all previous actions that it received and only handle the latest call.
 */
export default function* watcher() {
  yield [
    takeEvery(types.FETCH_USERS_REQUEST, fetchUsers),
    takeEvery(types.CREATE_USER_REQUEST, createUser),
    takeEvery(types.UPDATE_USER_REQUEST, updateUser),
    takeEvery(types.DELETE_USER_REQUEST, deleteUser),
  ]
}
