import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'modules/comment';

export function* fetchComment(api, { id }) {
  try {
    const response = yield call(api.fetchComment, id);
    yield put(actions.fetchSuccess(response));
  } catch (e) {
    yield put(actions.fetchFailure(e));
  }
}

export function* fetchComments(api) {
  try {
    const response = yield call(api.fetchComments);
    yield put(actions.fetchSuccess(response));
  } catch (e) {
    yield put(actions.fetchFailure(e));
  }
}

export function* createComment(api, { payload }) {
  try {
    const response = yield call(api.createComment, payload);
    yield put(actions.createSuccess(response));
  } catch (e) {
    yield put(actions.createFailure(e));
  }
}

export function* updateComment(api, { payload }) {
  try {
    const response = yield call(api.updateComment, payload);
    yield put(actions.updateSuccess(response));
  } catch (e) {
    yield put(actions.updateFailure(e));
  }
}

export function* deleteComment(api, { id }) {
  try {
    const response = yield call(api.deleteComment, id);
    yield put(actions.deleteSuccess(response));
    yield put(push('/comments'));
  } catch (e) {
    yield put(actions.deleteFailure(e));
  }
}
