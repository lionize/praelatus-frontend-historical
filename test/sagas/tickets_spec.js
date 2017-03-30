import { expect } from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import actions from 'modules/ticket'
import {
  fetchTicket,
  fetchTickets,
  createTicket,
  updateTicket,
  deleteTicket,
} from 'sagas/tickets'

const tickets = [
  {
    id: 0,
    key: 'KEY-0',
    summary: 'Ticket Summary',
    description: 'Ticket Description'
  }
]

const api = {
  fetchTicket: () => {},
  fetchTickets: () => {},
  createTicket: () => {},
  updateTicket: () => {},
  deleteTicket: () => {},
}

describe('Ticket - Sagas', () => {
  describe('fetchTicket', () => {
    it('success', () => {
      const generator = fetchTicket(api, { key: 'KEY-0' })

      expect(generator.next().value).to.deep.eq(call(api.fetchTicket, 'KEY-0'))

      const response = {
        result: ['KEY-0'],
        entities: {
          tickets: {
            'KEY-0': tickets[0]
          }
        }
      }
      const next = generator.next(response).value
      const expected = put(actions.fetchSuccess(response))

      expect(next).to.deep.eq(expected)
      expect(generator.next().done).to.be.true
    })

    it('failure', () => {
      const generator = fetchTicket(api, { key: 'KEY-0' })
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.fetchFailure(error))

      expect(next).to.deep.eq(expected)
      expect(generator.next().done).to.be.true
    })
  })

  describe('fetchTickets', () => {
    it('success', () => {
      const generator = fetchTickets(api, { project: 'PROJECT-0' })

      expect(generator.next().value).to.deep.eq(call(api.fetchTickets, 'PROJECT-0'))

      const response = {
        result: ['KEY-0'],
        entities: {
          tickets: {
            'KEY-0': tickets[0]
          }
        }
      }
      const next = generator.next(response).value
      const expected = put(actions.fetchSuccess(response))

      expect(next).to.deep.eq(expected)
      expect(generator.next().done).to.be.true
    })

    it('failure', () => {
      const generator = fetchTickets(api, { project: 'PROJECT-0' })
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.fetchFailure(error))

      expect(next).to.deep.eq(expected)
      expect(generator.next().done).to.be.true
    })
  })

  describe('createTicket', () => {
    it('success', () => {
      const generator = createTicket(api, { payload: tickets[0] })

      expect(generator.next().value).to.deep.eq(call(api.createTicket, tickets[0]))

      const response = {
        keys: ['KEY-0'],
        entities: {
          'KEY-0': tickets[0]
        }
      }
      let next = generator.next(response).value
      let expected = put(actions.createSuccess(response))

      expect(next).to.deep.eq(expected)

      next = generator.next().value
      expected = put(push(`/tickets/${tickets[0].key}`))

      expect(next).to.deep.eq(expected)
      expect(generator.next().done).to.be.true
    })

    it('failure', () => {
      const generator = createTicket(api, { payload: {} })
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.createFailure(error))

      expect(next).to.deep.eq(expected)
      expect(generator.next().done).to.be.true
    })
  })

  describe('updateTicket', () => {
    it('success', () => {
      const generator = updateTicket(api, { payload: tickets[0] })

      expect(generator.next().value).to.deep.eq(call(api.updateTicket, tickets[0]))

      const response = {
        result: ['KEY-0'],
        entities: {
          tickets: {
            'KEY-0': tickets[0]
          }
        }
      }
      let next = generator.next(response).value
      let expected = put(actions.updateSuccess(response))

      expect(next).to.deep.eq(expected)

      next = generator.next().value
      expected = put(push(`/tickets/${tickets[0].key}`))

      expect(next).to.deep.eq(expected)
      expect(generator.next().done).to.be.true
    })

    it('failure', () => {
      const generator = updateTicket(api, { payload: {} })
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.updateFailure(error))

      expect(next).to.deep.eq(expected)
      expect(generator.next().done).to.be.true
    })
  })

  describe('deleteTicket', () => {
    it('success', () => {
      const generator = deleteTicket(api, { key: 'TICKET-0' })

      expect(generator.next().value).to.deep.eq(call(api.deleteTicket, 'TICKET-0'))

      const response = { key: 'TICKET-0' }

      let next = generator.next(response).value
      let expected = put(actions.deleteSuccess(response))

      expect(next).to.deep.eq(expected)

      next = generator.next().value
      expected = put(push('/tickets'))

      expect(next).to.deep.eq(expected)
      expect(generator.next().done).to.be.true
    })

    it('failure', () => {
      const generator = deleteTicket(api, { key: 'TICKET-0' })
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.deleteFailure(error))

      expect(next).to.deep.eq(expected)
      expect(generator.next().done).to.be.true
    })
  })
})

