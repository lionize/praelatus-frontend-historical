import { expect } from 'chai'
import actions, {
  reducer,
  INITIAL_STATE,
  ticket,
  tickets,
  fetching,
  error,
} from 'modules/ticket'

describe('Ticket - ', () => {
  describe('reducers', () => {
    it('request', () => {
      const startingState = INITIAL_STATE.merge({
        error: 'Error',
      })
      const state = reducer(startingState, actions.fetchRequest())

      expect(state.fetching).to.be.true
      expect(state.error).to.be.null
    })

    it('success', () => {
      const data = {
        keys: ['TICKET-0'],
        entities: {
          'TICKET-0': {
            id: 0,
            key: 'TICKET-0',
          },
        },
      }
      const state = reducer(INITIAL_STATE, actions.fetchSuccess(data))

      expect(state.fetching).to.be.false
      expect(state.error).to.be.null
      expect(state.keys).to.include('TICKET-0')
      expect(state.byKey['TICKET-0']).to.deep.eq(data.entities['TICKET-0'])
    })

    it('failure', () => {
      const state = reducer(INITIAL_STATE, actions.updateFailure('Error'))

      expect(state.fetching).to.be.false
      expect(state.error).to.eq('Error')
    })

    it('remove', () => {
      const startingState = INITIAL_STATE.merge({
        keys: ['KEY-0'],
        byKey: { 'KEY-0': { key: 'KEY-0' } },
        fetching: true,
        error: 'Error',
      })
      const state = reducer(startingState, actions.deleteSuccess('KEY-0'))

      expect(state.error).to.be.null
      expect(state.fetching).to.be.false
      expect(state.keys).to.not.include('KEY-0')
      expect(state.byKey).to.not.have.key('KEY-0')
    })
  })

  describe('selectors', () => {
    const state = {
      keys: ['TICKET-0', 'TICKET-1'],
      byKey: {
        'TICKET-0': {
          id: 0,
          key: 'TICKET-0',
        },
        'TICKET-1': {
          id: 1,
          key: 'TICKET-1'
        },
      },
      fetching: true,
      error: 'Error',
    }

    it('ticket', () => {
      expect(ticket(state, 'TICKET-0')).to.eq(state.byKey['TICKET-0'])
    })

    it('tickets', () => {
      const expected = [state.byKey['TICKET-0'], state.byKey['TICKET-1']]
      expect(tickets(state, ['TICKET-0', 'TICKET-1'])).to.deep.eq(expected)
    })

    it('fetching', () => {
      expect(fetching(state)).to.be.true
    })

    it('error', () => {
      expect(error(state)).to.eq('Error')
    })
  })
})
