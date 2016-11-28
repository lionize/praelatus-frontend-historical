import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { actions, types } from 'modules/teams'
import api from 'api'

export function* fetchTeams(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.fetchTeams, payload)
    yield put(actions.fetchTeamsSuccess(response))
  } catch (e) {
    yield put(actions.fetchTeamsFailure(e))
  }
}

export function* createTeam(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.createTeam, payload)
    yield put(actions.createTeamSuccess(response))
  } catch (e) {
    yield put(actions.createTeamFailure(e))
  }
}

export function* updateTeam(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.updateTeam, payload)
    yield put(actions.updateTeamSuccess(response))
  } catch (e) {
    yield put(actions.updateTeamFailure(e))
  }
}

export function* deleteTeam(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.deleteTeam, payload)
    yield put(actions.deleteTeamSuccess(response))
  } catch (e) {
    yield put(actions.deleteTeamFailure(e))
  }
}
