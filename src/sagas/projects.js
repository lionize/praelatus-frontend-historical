/** @module projects/sagas */

import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import types from 'types/projects'
import * as actions from 'actions/projects'
import * as dataActions from 'actions/data'
import api from 'api'

/**
 * Saga that represents async interaction with the server for fetching projects.
 *
 * The function calls the api fetchProjects method passing the action's
 * payload (filter options, etc.).
 *
 * It calls the fetchProjectsSuccess action passing the response if the call is
 * successful, and calls the fetchProjectsFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* fetchProjects(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.fetchProjects, payload)
    yield put(dataActions.fetchDataSuccess(response, 'project'))
  } catch (e) {
    yield put(actions.fetchProjectsFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for creating a
 * project.
 *
 * The function calls the api createProject method passing the action's payload
 * (information about the project to be created).
 *
 * It calls the createProjectSuccess action passing the response if the call is
 * successful, and calls the createProjectFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* createProject(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.createProject, payload)
    yield put(actions.createProjectSuccess(response))
    yield put(push(`/projects/${response.get('id')}`))
  } catch (e) {
    yield put(actions.createProjectFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for updating a
 * project.
 *
 * The function calls the api updateProject method passing the action's payload
 * (id of and updated fields for the project to be updated).
 *
 * If calls the updateProjectSuccess action passing the response if the call is
 * successful, and calls the updateProjectFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* updateProject(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.updateProject, payload)
    yield put(actions.updateProjectSuccess(response))
  } catch (e) {
    yield put(actions.updateProjectFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for deleting a
 * project.
 *
 * The function calls the api deleteProject method passing the action's payload
 * (the id of the project being deleted).
 *
 * It calls the deleteProjectSuccess action passing the response if the call is
 * successful, and calls the deleteProjectFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* deleteProject(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.deleteProject, payload)
    yield put(actions.deleteProjectSuccess(response))
  } catch (e) {
    yield put(actions.deleteProjectFailure(e))
  }
}

/**
 * Watcher generator details all of the project module sagas and their take
 * types.
 *
 * If the saga is added using takeEvery, the saga will process every action
 * that it receives. If the saga is added using takeLatest, the saga will drop
  * all previous actions that it received and only handle the latest call.
 */
export default function* watcher() {
  yield [
    takeEvery(types.FETCH_PROJECTS_REQUEST, fetchProjects),
    takeEvery(types.CREATE_PROJECT_REQUEST, createProject),
    takeEvery(types.UPDATE_PROJECT_REQUEST, updateProject),
    takeEvery(types.DELETE_PROJECT_REQUEST, deleteProject),
  ]
}
