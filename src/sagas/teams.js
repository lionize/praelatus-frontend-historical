/** @module teams/sagas */

import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import * as actions from 'actions/teams'
import types from 'types/teams'
import api from 'api'

/**
 * Saga that represents async interaction with the server for fetching teams.
 *
 * The function calls the api fetchTeams method passing the action's
 * payload (filter options, etc.).
 *
 * It calls the fetchTeamsSuccess action passing the response if the call is
 * successful, and calls the fetchTeamsFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* fetchTeams(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.fetchTeams, payload)
    yield put(actions.fetchTeamsSuccess(response))
  } catch (e) {
    yield put(actions.fetchTeamsFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for creating a
 * team.
 *
 * The function calls the api createTeam method passing the action's payload
 * (information about the team to be created).
 *
 * It calls the createTeamSuccess action passing the response if the call is
 * successful, and calls the createTeamFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* createTeam(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.createTeam, payload)
    yield put(actions.createTeamSuccess(response))
  } catch (e) {
    yield put(actions.createTeamFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for updating a
 * team.
 *
 * The function calls the api updateTeam method passing the action's payload
 * (id of and updated fields for the team to be updated).
 *
 * If calls the updateTeamSuccess action passing the response if the call is
 * successful, and calls the updateTeamFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* updateTeam(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.updateTeam, payload)
    yield put(actions.updateTeamSuccess(response))
  } catch (e) {
    yield put(actions.updateTeamFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for deleting a
 * team.
 *
 * The function calls the api deleteTeam method passing the action's payload
 * (the id of the team being deleted).
 *
 * It calls the deleteTeamSuccess action passing the response if the call is
 * successful, and calls the deleteTeamFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* deleteTeam(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.deleteTeam, payload)
    yield put(actions.deleteTeamSuccess(response))
  } catch (e) {
    yield put(actions.deleteTeamFailure(e))
  }
}

/**
 * Watcher generator details all of the team module sagas and their take
 * types.
 *
 * If the saga is added using takeEvery, the saga will process every action
 * that it receives. If the saga is added using takeLatest, the saga will drop
  * all previous actions that it received and only handle the latest call.
 */
export default function* watcher() {
  yield [
    takeEvery(types.FETCH_TEAMS_REQUEST, fetchTeams),
    takeEvery(types.CREATE_TEAM_REQUEST, createTeam),
    takeEvery(types.UPDATE_TEAM_REQUEST, updateTeam),
    takeEvery(types.DELETE_TEAM_REQUEST, deleteTeam),
  ]
}
