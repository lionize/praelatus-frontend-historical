/** @module tickets/sagas */

import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import * as actions from 'actions/tickets'
import * as dataActions from 'actions/data'
import types from 'types/tickets'
import api from 'api'

/**
 * Saga that represents async interaction with the server for fetching tickets.
 *
 * The function calls the api fetchTickets method passing the action's
 * payload (filter options, etc.).
 *
 * It calls the fetchTicketsSuccess action passing the response if the call is
 * successful, and calls the fetchTicketsFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* fetchTickets(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.fetchTickets, payload)
    yield put(dataActions.fetchDataSuccess(response, 'ticket'))
  } catch (e) {
    yield put(actions.fetchTicketsFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for creating a
 * ticket.
 *
 * The function calls the api createTicket method passing the action's payload
 * (information about the ticket to be created).
 *
 * It calls the createTicketSuccess action passing the response if the call is
 * successful, and calls the createTicketFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* createTicket(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.createTicket, payload)
    yield put(actions.createTicketSuccess(response))
    yield put(push(`/tickets/${response.get('id')}`))
  } catch (e) {
    yield put(actions.createTicketFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for updating a
 * ticket.
 *
 * The function calls the api updateTicket method passing the action's payload
 * (id of and updated fields for the ticket to be updated).
 *
 * If calls the updateTicketSuccess action passing the response if the call is
 * successful, and calls the updateTicketFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* updateTicket(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.updateTicket, payload)

    if (response) {
      yield put(actions.updateTicketSuccess(payload.toJS()))
    }
    yield put(push(`/tickets/${payload.get('id')}`))
  } catch (e) {
    yield put(actions.updateTicketFailure(e))
  }
}

/**
 * Saga that represents async interaction with the server for deleting a
 * ticket.
 *
 * The function calls the api deleteTicket method passing the action's payload
 * (the id of the ticket being deleted).
 *
 * It calls the deleteTicketSuccess action passing the response if the call is
 * successful, and calls the deleteTicketFailure action passing the error from
 * the server if the call fails.
 *
 * @param {object} action - The action that contains payload information.
 */
export function* deleteTicket(action = {}) {
  try {
    const payload = action.payload || {}
    const response = yield call(api.deleteTicket, payload)
    yield put(actions.deleteTicketSuccess(response))
  } catch (e) {
    yield put(actions.deleteTicketFailure(e))
  }
}

/**
 * Watcher generator the details all of the ticket module sagas and their take
 * types.
 *
 * If the saga is added using takeEvery, the saga will process every action
 * that it receives. If the saga is added using takeLatest, the saga will drop
  * all previous actions that it received and only handle the latest call.
 */
export default function* watcher() {
  yield [
    takeEvery(types.FETCH_TICKETS_REQUEST, fetchTickets),
    takeEvery(types.CREATE_TICKET_REQUEST, createTicket),
    takeEvery(types.UPDATE_TICKET_REQUEST, updateTicket),
    takeEvery(types.DELETE_TICKET_REQUEST, deleteTicket),
  ]
}
