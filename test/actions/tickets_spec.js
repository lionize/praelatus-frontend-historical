import { expect } from 'chai'
import * as actions from 'actions/tickets'
import types from 'types/tickets'

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
        createdDate: '',
        updatedDate: '',
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
    const fixture = {
      summary: 'Ticket summary',
      description: 'Ticket description'
    }
    const expectedResult = {
      type: types.CREATE_TICKET_REQUEST,
      payload: fixture
    }

    it('should return the correct type', () => {
      expect(actions.createTicketRequest(fixture).type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(actions.createTicketRequest(fixture).payload).to.deep.eq(expectedResult.payload)
    })
  })

  describe('createTicketSuccess', () => {
    const fixture = {
      id: 1,
      createdDate: '',
      updatedDate: '',
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

  describe('updateTicketRequest', () => {
    const fixture = {
      id: 0,
      createdDate: '',
      updatedDate: '',
      summary: 'Ticket summary',
      description: 'Ticket description'
    }
    const expectedResult = {
      type: types.UPDATE_TICKET_REQUEST,
      payload: fixture
    }

    it('should return the correct type', () => {
      expect(actions.updateTicketRequest(fixture).type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(actions.updateTicketRequest(fixture).payload).to.eq(expectedResult.payload)
    })
  })

  describe('updateTicketSuccess', () => {
    const fixture = {
      id: 1,
      createdDate: '',
      updatedDate: '',
      description: "This is a cool ticket",
      summary: "This is a ticket summary"
    }
    const expectedResult = {
      type: types.UPDATE_TICKET_SUCCESS,
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
      expect(actions.updateTicketSuccess(fixture).type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(actions.updateTicketSuccess(fixture).response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('updateTicketFailure', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      type: types.UPDATE_TICKET_FAILURE,
      message: fixture.message
    }
    const actualResult = actions.updateTicketFailure(fixture)

    it('should return the correct type', () => {
      expect(actualResult.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(actualResult.message).to.eq(expectedResult.message)
    })
  })

  describe('deleteTicketRequest', () => {
    const fixture = { id: 0 }
    const expectedResult = {
      type: types.DELETE_TICKET_REQUEST,
      payload: fixture
    }

    it('should return the correct type', () => {
      expect(actions.deleteTicketRequest(fixture).type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(actions.deleteTicketRequest(fixture).payload).to.eq(expectedResult.payload)
    })
  })

  describe('deleteTicketSuccess', () => {
    const expectedResult = {
      type: types.DELETE_TICKET_SUCCESS,
      id: 1,
    }
    const actualResult = actions.deleteTicketSuccess(1)

    it('should return the correct type', () => {
      expect(actualResult.type).to.eq(expectedResult.type)
    })

    it('should return the correct id', () => {
      expect(actualResult.id).to.eq(expectedResult.id)
    })
  })

  describe('deleteTicketFailure', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      type: types.DELETE_TICKET_FAILURE,
      message: fixture.message
    }
    const actualResult = actions.deleteTicketFailure(fixture)

    it('should return the correct type', () => {
      expect(actualResult.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(actualResult.message).to.eq(expectedResult.message)
    })
  })
})
