import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import types from 'types/auth'
import * as actions from 'actions/auth'
import api from 'api'

export function * loginFlow(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.login, payload)
    yield put(actions.loginSuccess(response))
    yield put(push('/'))
  } catch (e) {
    yield put(actions.loginFailure(e))
  }
}
