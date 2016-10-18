import configureMockStore from 'redux-mock-store'
import nock from 'nock'
import { expect } from 'chai'
import { types, actions } from 'modules/tickets'

const middlewares = []
const mockStore = configureMockStore(middlewares)

const URL = 'http://localhost:8080/api/v1'

describe('Ticket Actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

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
})
