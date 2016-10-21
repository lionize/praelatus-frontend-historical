/** @module sagas */

import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { actions, types } from 'modules/tickets'
import api from 'api'

/**
 * Saga that handles the API call for fetching tickets.
 *
 * The saga takes an action and passes the payload field to the server API's fetchTickets method. This will attempt to request tickets from the server.
 *
 * If the request is a success, the fetchTicketsSuccess action is dispatched along with the response.
 *
 * If the request is a failure, the fetchTicketsFailure action is dispatched along with the error.
 *
 * @param {object} action - The dispatched action which the saga is responding to.
 */
export function* fetchTickets(action) {
  try {
    const response = yield call(api.fetchTickets, {})
    yield put(actions.fetchTicketsSuccess(response))
  } catch (e) {
    yield put(actions.fetchTicketsFailure(e))
  }
}

function* mySaga() {
  yield* takeEvery(types.FETCH_TICKETS_REQUEST, fetchTickets)
}

export default mySaga
