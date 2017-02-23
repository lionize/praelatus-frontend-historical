import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import actions from 'modules/project'

export function * fetchProject(api, { key }) {
  try {
    const response = yield call(api.fetchProject, key)
    yield put(actions.fetchSuccess(response))
  } catch (e) {
    yield put(actions.fetchFailure(e))
  }
}

export function * fetchProjects(api) {
  try {
    const response = yield call(api.fetchProjects)
    yield put(actions.fetchSuccess(response))
  } catch (e) {
    yield put(actions.fetchFailure(e))
  }
}

export function * createProject(api, { payload }) {
  try {
    const response = yield call(api.createProject, payload)
    yield put(actions.createSuccess(response))
    yield put(push(`/projects/${response.result[0]}`))
  } catch (e) {
    yield put(actions.createFailure(e))
  }
}

export function * updateProject(api, { payload }) {
  try {
    const response = yield call(api.updateProject, payload)
    yield put(actions.updateSuccess(response))
    yield put(push(`/projects/${response.result[0]}`))
  } catch (e) {
    yield put(actions.updateFailure(e))
  }
}

export function * deleteProject(api, { key }) {
  try {
    const response = yield call(api.deleteProject, key)
    yield put(actions.deleteSuccess(response))
    yield put(push('/projects'))
  } catch (e) {
    yield put(actions.deleteFailure(e))
  }
}
