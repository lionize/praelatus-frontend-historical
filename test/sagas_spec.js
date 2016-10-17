import { expect } from 'chai'
import { put, call } from 'redux-saga/effects'
import * as sagas from 'sagas'
import api from 'api'
import { actions } from 'modules/tickets'

describe('(Saga) Tickets', () => {
  describe('GET: Fetch Tickets', () => {
    it('fetches tickets', () => {
      const generator = sagas.fetchTickets()

      expect(generator.next().value).to.deep.eq(call(api.fetchTickets))

      // fake response
      const tickets = []

      expect(generator.next(tickets).value).to.deep.eq(put(actions.fetchTicketsSuccess(tickets)))
    })

    it('returns an error if fetching fails', () => {
      const generator = sagas.fetchTickets()

      expect(generator.next().value).to.deep.eq(call(api.fetchTickets))

      // fake response
      const error = { message: 'Error!' }

      expect(generator.throw(error).value).to.deep.eq(put(actions.fetchTicketsFailure(error)))
    })
  })
})
