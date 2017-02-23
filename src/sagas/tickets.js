/** @module tickets/sagas */

import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import ticketActions from 'modules/ticket'

export function* fetchTicket(api, { key }) {
  try {
    const response = yield call(api.fetchTicket, key)
    yield put(ticketActions.fetchSuccess(response))
  } catch (e) {
    yield put(ticketActions.fetchFailure(e))
  }
}

export function* fetchTickets(api, { project }) {
  try {
    const response = yield call(api.fetchTickets, project)
    yield put(ticketActions.fetchSuccess(response))
  } catch (e) {
    yield put(ticketActions.fetchFailure(e))
  }
}

export function* createTicket(api, { payload }) {
  try {
    const response = yield call(api.createTicket, payload)
    yield put(ticketActions.createSuccess(response))
    yield put(push(`/tickets/${response.result[0]}`))
  } catch (e) {
    yield put(ticketActions.createFailure(e))
  }
}

export function* updateTicket(api, { payload }) {
  try {
    const response = yield call(api.updateTicket, payload)
    yield put(ticketActions.updateSuccess(response))
    yield put(push(`/tickets/${response.result[0]}`))
  } catch (e) {
    yield put(ticketActions.updateFailure(e))
  }
}

export function* deleteTicket(api, { key }) {
  try {
    const response = yield call(api.deleteTicket, key)
    yield put(ticketActions.deleteSuccess(response))
    yield put(push('/tickets'))
  } catch (e) {
    yield put(ticketActions.deleteFailure(e))
  }
}

