import { expect } from 'chai'
import reducer, { actions } from 'modules/tickets'

describe('tickets reducer', () => {
  let state
  beforeEach(() => {
    state = {
      loading: false,
      errorMessage: null,
      ids: [],
      byId: {}
    }
  })

  it('should return the initial state', () => {
    const expectedResult = state
    const nextState = reducer(undefined, {})

    expect(nextState).to.deep.eq(expectedResult)
  })

  it('should handle the fetchTicketsRequest action correctly', () => {
    const expectedResult = {
      ...state,
      loading: true
    }
    const nextState = reducer(state, actions.fetchTicketsRequest())

    expect(nextState).to.deep.eq(expectedResult)
  })

  it('should handle the fetchTicketsSuccess action correctly', () => {
    const fixture = [{
      id: 0,
      summary: 'Ticket summary',
      description: 'Ticket description',
    }]
    const expectedResult = {
      ...state,
      ids: [0],
      byId: { 0: fixture[0] }
    }
    const nextState = reducer(state, actions.fetchTicketsSuccess(fixture))

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
    const nextState = reducer(state, actions.fetchTicketsFailure(fixture))

    expect(nextState).to.deep.eq(expectedResult)
  })
})
