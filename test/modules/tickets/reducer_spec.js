import { expect } from 'chai'
import { List, Map } from 'immutable'
import reducer, { actions } from 'modules/tickets'

describe('tickets module reducers', () => {
  const state = Map({
    loading: true,
    error: 'Error',
    ids: List(),
    byId: Map()
  })

  it('returns a default state', () => {
    const expectedResult = Map({
      loading: false,
      error: null,
      ids: List(),
      byId: Map()
    })
    const nextState = reducer(undefined, {})

    expect(nextState).to.eq(expectedResult)
  })

  describe('FETCH_TICKETS_REQUEST', () => {
    const nextState = reducer(state, actions.fetchTicketsRequest())

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('FETCH_TICKETS_SUCCESS', () => {
    const fixture = [{
      id: 0,
      createdDate: '',
      updatedDate: '',
      summary: 'Ticket summary',
      description: 'Ticket description'
    }]
    const nextState = reducer(state, actions.fetchTicketsSuccess(fixture))

    it('adds tickets to the state', () => {
      const expectedResult = state.merge(Map({
        ids: List.of(0),
        byId: Map({0: Map(fixture[0])}),
        error: null,
        loading: false
      }))

      expect(nextState).to.eq(expectedResult)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('FETCH_TICKETS_FAILURE', () => {
    const fixture = {
      message: 'Error!'
    }
    const nextState = reducer(state, actions.fetchTicketsFailure(fixture))

    it('add the error message to state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('CREATE_TICKET_REQUEST', () => {
    const nextState = reducer(state, actions.createTicketRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })

  describe('CREATE_TICKET_SUCCESS', () => {
    const fixture = {
      id: 0,
      createdDate: '',
      updatedDate: '',
      summary: 'Ticket summary',
      description: 'Ticket description'
    }
    const nextState = reducer(state, actions.createTicketSuccess(fixture))

    it('adds the ticket to the state', () => {
      const expectedResult = state.merge(Map({
        ids: List.of(0),
        byId: Map({0: Map(fixture)}),
        error: null,
        loading: false
      }))

      expect(nextState).to.eq(expectedResult)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('CREATE_TICKET_FAILURE', () => {
    const fixture = {
      message: 'Error!'
    }
    const nextState = reducer(state, actions.createTicketFailure(fixture))

    it('adds the error to state', () => {
      const expectedResult = state.set('error', fixture.message)

      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('UPDATE_TICKET_REQUEST', () => {
    const nextState = reducer(state, actions.updateTicketRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })

  describe('UPDATE_TICKET_SUCCESS', () => {
    const fixture = {
      id: 1,
      createdDate: '',
      updatedDate: '',
      summary: 'Ticket summary',
      description: 'Ticket description'
    }
    const newState = state.merge(Map({
      ids: List.of(1),
      byId: Map({1: Map({
        id: 1,
        summary: 'This is a summary!',
        description: 'This is a description!'
      })})
    }))
    const nextState = reducer(newState, actions.updateTicketSuccess(fixture))

    it('replaces the old ticket in the state', () => {
      const expectedResult = state.merge(Map({
        ids: List.of(1),
        byId: Map({1: Map(fixture)}),
        error: null,
        loading: false
      }))

      expect(nextState).to.eq(expectedResult)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('UPDATE_TICKET_FAILURE', () => {
    const fixture = {
      message: 'Error!'
    }
    const nextState = reducer(state, actions.updateTicketFailure(fixture))

    it('adds the error to state', () => {
      const expectedResult = state.set('error', fixture.message)

      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('DELETE_TICKET_REQUEST', () => {
    const nextState = reducer(state, actions.deleteTicketRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })

  describe('DELETE_TICKET_SUCCESS', () => {
    const fixture = {
      id: 1,
      summary: 'Ticket summary',
      description: 'Ticket description'
    }
    const newState = state.merge(Map({
      ids: List.of(1),
      byId: Map({1: Map({
        id: 1,
        summary: 'This is a summary!',
        description: 'This is a description!'
      })})
    }))
    const nextState = reducer(newState, actions.deleteTicketSuccess(fixture.id))

    it('removes the ticket from the state', () => {
      const expectedResult = state.merge(Map({
        ids: List(),
        byId: Map(),
        error: null,
        loading: false
      }))

      expect(nextState).to.eq(expectedResult)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('DELETE_TICKET_FAILURE', () => {
    const fixture = {
      message: 'Error!'
    }
    const nextState = reducer(state, actions.deleteTicketFailure(fixture))

    it('adds the error to state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })
})
