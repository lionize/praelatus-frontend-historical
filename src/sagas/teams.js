import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import actions from 'modules/teamRedux'

export function * fetchTeam(api, { name }) {
  try {
    const response = yield call(api.fetchTeam, name)
    yield put(actions.fetchSuccess(response))
  } catch (e) {
    yield put(actions.fetchFailure(e))
  }
}

export function * fetchTeams(api) {
  try {
    const response = yield call(api.fetchTeams)
    yield put(actions.fetchSuccess(response))
  } catch (e) {
    yield put(actions.fetchFailure(e))
  }
}

export function * createTeam(api, { payload }) {
  try {
    const response = yield call(api.createTeam, payload)
    yield put(actions.createSuccess(response))
    yield put(push(`/teams/${response.result[0]}`))
  } catch (e) {
    yield put(actions.createFailure(e))
  }
}

export function * updateTeam(api, { payload }) {
  try {
    const response = yield call(api.updateTeam, payload)
    yield put(actions.updateSuccess(response))
    yield put(push(`/teams/${response.result[0]}`))
  } catch (e) {
    yield put(actions.updateFailure(e))
  }
}

export function * deleteTeam(api, { name }) {
  try {
    const response = yield call(api.deleteTeam, name)
    yield put(actions.deleteSuccess(response))
    yield put(push('/teams'))
  } catch (e) {
    yield put(actions.deleteFailure(e))
  }
}
