import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'modules/user';

export function* fetchUser(api, { username }) {
  try {
    const response = yield call(api.fetchUser, username);
    yield put(actions.fetchSuccess(response));
  } catch (e) {
    yield put(actions.fetchFailure(e));
  }
}

export function* fetchUsers(api) {
  try {
    const response = yield call(api.fetchUsers);
    yield put(actions.fetchSuccess(response));
  } catch (e) {
    yield put(actions.fetchFailure(e));
  }
}

export function* createUser(api, { payload }) {
  try {
    const response = yield call(api.createUser, payload);
    yield put(actions.createSuccess(response));
    yield put(push(`/users/${response.result[0]}`));
  } catch (e) {
    yield put(actions.createFailure(e));
  }
}

export function* updateUser(api, { payload }) {
  try {
    const response = yield call(api.updateUser, payload);
    yield put(actions.updateSuccess(response));
    yield put(push(`/users/${response.keys[0]}`));
  } catch (e) {
    yield put(actions.updateFailure(e));
  }
}

export function* deleteUser(api, { username }) {
  try {
    const response = yield call(api.deleteUser, username);
    yield put(actions.deleteSuccess(response));
    yield put(push('/users'));
  } catch (e) {
    yield put(actions.deleteFailure(e));
  }
}
