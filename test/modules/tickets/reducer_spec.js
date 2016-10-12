import { expect } from 'chai'
import { List, Map } from 'immutable'
import reducer, { actions } from 'modules/tickets'

describe('tickets reducer', () => {
  let state
  beforeEach(() => {
    state = Map({
      loading: false,
      error: null,
      ids: List(),
      byId: Map()
    })
  })

  it('returns a default state', () => {
    const nextState = reducer(undefined, {})

    expect(state).to.eq(nextState)
  })

  it('handles FETCH_TICKETS_REQUEST', () => {
    const expectedResult = state.set('loading', true)
    const nextState = reducer(state, actions.fetchTicketsRequest())

    expect(nextState).to.eq(expectedResult)
  })

  it('handles FETCH_TICKETS_SUCCESS', () => {
    const fixture = [{
      id: 0,
      summary: 'Ticket summary',
      description: 'Ticket description'
    }]
    const expectedResult = state.merge(Map({
      ids: List.of(0),
      byId: Map({0: Map(fixture[0])})
    }))
    const nextState = reducer(state, actions.fetchTicketsSuccess(fixture))

    expect(nextState).to.eq(expectedResult)
  })

  it('handles FETCH_TICKETS_FAILURE', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = state.merge(Map({
      error: fixture.message
    }))
    const nextState = reducer(state, actions.fetchTicketsFailure(fixture))

    expect(nextState).to.eq(expectedResult)
  })
})
