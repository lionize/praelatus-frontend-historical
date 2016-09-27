import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from 'actions'
import * as types from 'constants/actionTypes'
import nock from 'nock'
import { expect } from 'chai'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const URL = 'http://localhost:8080/api/v1'

describe('ticket actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_TICKETS_SUCCESS when fetching tickets is finished', () => {
    nock(URL)
      .get('/tickets')
      .reply(200, { body: [{
        id: 1,
        description: 'Ticket description',
        summary: 'Ticket summary'
      }]})

    const expectedActions = [
      { type: types.FETCH_TICKETS_REQUEST },
      { type: types.FETCH_TICKETS_SUCCESS, response: {
        entities: {
          tickets: {
            1: {
              id: 1,
              description: "Ticket description",
              summary: "Ticket summary"
            }
          }
        },
        result: [1]
      }}
    ]
    const store = mockStore({ tickets: [] })

    store.dispatch(actions.fetchTickets())
      .then(() => {
        expect(store.getActions()).to.eq(expectedActions)
      })
  })
})
