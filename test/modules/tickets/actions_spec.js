import { expect } from 'chai'
import { types, actions } from 'modules/tickets'

describe('tickets module actions', () => {
  describe('fetchTicketsRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: types.FETCH_TICKETS_REQUEST,
      }

      expect(actions.fetchTicketsRequest()).to.deep.eq(expectedResult)
    })
  })

  describe('fetchTicketsSuccess', () => {
    it('should return the correct type and the correct response', () => {
      const fixture = [{
        id: 1,
        description: 'Ticket description',
        summary: 'Ticket summary',
      }]
      const expectedResult = {
        type: types.FETCH_TICKETS_SUCCESS,
        response: {
          result: [1],
          entities: {
            tickets: {
              1: fixture[0]
            }
          }
        }
      }

      expect(actions.fetchTicketsSuccess(fixture).response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('fetchTicketsFailure', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        message: 'Error!'
      }
      const expectedResult = {
        type: types.FETCH_TICKETS_FAILURE,
        message: fixture.message
      }

      expect(actions.fetchTicketsFailure(fixture)).to.deep.eq(expectedResult)
    })
  })

  describe('createTicketRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: types.CREATE_TICKET_REQUEST
      }

      expect(actions.createTicketRequest()).to.deep.eq(expectedResult)
    })
  })

  describe('createTicketSuccess', () => {
    const fixture = {
      id: 1,
      description: "This is a cool ticket",
      summary: "This is a ticket summary"
    }
    const expectedResult = {
      type: types.CREATE_TICKET_SUCCESS,
      response: {
        result: 1,
        entities: {
          tickets: {
            1: fixture
          }
        }
      }
    }

    it('should return the correct type', () => {
      expect(actions.createTicketSuccess(fixture).type).to.deep.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(actions.createTicketSuccess(fixture).response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('createTicketFailure', () => {
    const fixture = {
      message: "Error!",
    }
    const expectedResult = {
      type: types.CREATE_TICKET_FAILURE,
      message: fixture.message,
    }

    it('should return the correct type', () => {
      expect(actions.createTicketFailure(fixture).type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(actions.createTicketFailure(fixture).message).to.eq(expectedResult.message)
    })
  })
})
