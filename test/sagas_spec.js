import { expect } from 'chai'
import { put, call } from 'redux-saga/effects'
import * as sagas from 'sagas'
import api from 'api'
import { actions } from 'modules/tickets'

describe('(Saga) Tickets', () => {
  describe('GET: Fetch Tickets', () => {
    it('fetches tickets', () => {
      const generator = sagas.fetchTickets()

      expect(generator.next().value).to.deep.eq(call(api.fetchTickets, {}))

      // fake response
      const tickets = []

      const next = generator.next(tickets).value
      const expected = put(actions.fetchTicketsSuccess(tickets))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.response).to.equal(expected.PUT.action.response)
    })

    it('returns an error if fetching fails', () => {
      const generator = sagas.fetchTickets()

      expect(generator.next().value).to.deep.eq(call(api.fetchTickets, {}))

      // fake response
      const error = { message: 'Error!' }

      expect(generator.throw(error).value).to.deep.eq(put(actions.fetchTicketsFailure(error)))
    })
  })
})
