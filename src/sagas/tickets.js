/** @module tickets/sagas */

import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { normalize } from 'normalizr'
import { ticketSchema, ticketsSchema } from 'schema'
import ticketActions from 'modules/ticketRedux'

export function * fetchTicket(api, { key }) {
  try {
    const response = yield call(api.fetchTicket, key)
    const normalized = normalize([response], ticketsSchema)
    yield put(ticketActions.fetchSuccess(normalized))
  } catch (e) {
    yield put(ticketActions.fetchFailure(e))
  }
}

export function * fetchTickets(api, { project }) {
  try {
    const response = yield call(api.fetchTickets, project)
    const normalized = normalize(response, ticketsSchema)
    yield put(ticketActions.fetchSuccess(normalized))
  } catch (e) {
    yield put(ticketActions.fetchFailure(e))
  }
}

export function * createTicket(api, { payload }) {
  try {
    const response = yield call(api.createTicket, payload)
    const normalized = normalize([response], ticketsSchema)
    yield put(ticketActions.createSuccess(normalized))
    yield put(push(`/tickets/${response.key}`))
  } catch (e) {
    yield put(ticketActions.createFailure(e))
  }
}

export function * updateTicket(api, { payload }) {
  try {
    const response = yield call(api.updateTicket, payload)
    const normalized = normalize([response], ticketsSchema)
    yield put(ticketActions.updateSuccess(normalized))
    yield put(push(`/tickets/${payload.key}`))
  } catch (e) {
    yield put(ticketActions.updateFailure(e))
  }
}

export function * deleteTicket(api, { key }) {
  try {
    const response = yield call(api.deleteTicket, key)
    yield put(ticketActions.deleteSuccess(response))
    yield put(push('/tickets'))
  } catch (e) {
    yield put(ticketActions.deleteFailure(e))
  }
}

