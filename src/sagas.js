import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { types } from 'modules/tickets'
import api from 'api'

function* fetchTickets(action) {
  try {
    const tickets = yield call(api.fetchTickets, action.payload)
    yield put(types.fetchTicketsSuccess(tickets))
  } catch (e) {
    yield put(types.fetchTicketsFailure(e))
  }
}

function* mySaga() {
  yield* takeEvery(types.FETCH_TICKETS_REQUEST, fetchTickets)
}

export default mySaga
