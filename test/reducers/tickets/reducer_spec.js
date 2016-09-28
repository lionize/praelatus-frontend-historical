import { expect } from 'chai'
import {
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  FETCH_TICKETS_REQUEST,
} from 'constants/actionTypes'
import {
  fetchTicketsRequest,
  fetchTicketsFailure,
  fetchTicketsSuccess,
} from 'actions'
import ticketReducer from 'reducers/tickets'

describe('ticketReducer', () => {
  let state
  beforeEach(() => {
    state = {
      isFetching: false,
      errorMessage: null,
      ids: [],
      byId: {}
    }
  })

  it('should return the initial state', () => {
    const expectedResult = state
    const nextState = ticketReducer(undefined, {})
    expect(ticketReducer(undefined, {})).to.deep.eq(expectedResult)
  })

  it('should handle the fetchTicketsRequest action correctly', () => {
    const expectedResult = {
      ...state,
      isFetching: true
    }
    const nextState = ticketReducer(state, fetchTicketsRequest())

    expect(nextState).to.deep.eq(expectedResult)
  })

  it('should handle the fetchTicketsSuccess action correctly', () => {
    const fixture = [{
      id: 1,
      summary: 'Ticket summary',
      description: 'Ticket description',
    }]
    const expectedResult = {
      ...state,
      ids: [1],
      byId: { 1: fixture[0] }
    }
    const nextState = ticketReducer(state, fetchTicketsSuccess(fixture))

    expect(nextState).to.deep.eq(expectedResult)
  })

  it('should handle the fetchTicketsFailure action correctly', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      ...state,
      errorMessage: fixture.message
    }
    const nextState = ticketReducer(state, fetchTicketsFailure(fixture))

    expect(nextState).to.deep.eq(expectedResult)
  })
})
