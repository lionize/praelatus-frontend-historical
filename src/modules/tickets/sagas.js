import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { actions, types } from 'modules/tickets'
import api from 'api'

export function* fetchTickets(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.fetchTickets, payload)
    yield put(actions.fetchTicketsSuccess(response))
  } catch (e) {
    yield put(actions.fetchTicketsFailure(e))
  }
}

export function* createTicket(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.createTicket, payload)
    yield put(actions.createTicketSuccess(response))
  } catch (e) {
    yield put(actions.createTicketFailure(e))
  }
}

export function* updateTicket(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.updateTicket, payload)
    yield put(actions.updateTicketSuccess(response))
  } catch (e) {
    yield put(actions.updateTicketFailure(e))
  }
}

export function* deleteTicket(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.deleteTicket, payload)
    yield put(actions.deleteTicketSuccess(response))
  } catch (e) {
    yield put(actions.deleteTicketFailure(e))
  }
}

export default function* watcher() {
  yield [
    takeEvery(types.FETCH_TICKETS_REQUEST, fetchTickets),
    takeEvery(types.CREATE_TICKET_REQUEST, createTicket),
    takeEvery(types.UPDATE_TICKET_REQUEST, updateTicket),
    takeEvery(types.DELETE_TICKET_REQUEST, deleteTicket),
  ]
}
