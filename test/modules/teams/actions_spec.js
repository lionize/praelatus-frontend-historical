import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import { expect } from 'chai'
import { types, actions } from 'modules/teams'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const URL = 'http://localhost:8080/api/v1'

describe('Team Actions', () => {
  describe('fetchTeamsRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: types.FETCH_TEAMS_REQUEST,
      }

      expect(actions.fetchTeamsRequest()).to.deep.eq(expectedResult)
    })
  })

  describe('fetchTeamsSuccess', () => {
    it('should return the correct type and the correct response', () => {
      const fixture = [{
        id: 1,
        name: 'A Team'
      }]
      const expectedResult = {
        type: types.FETCH_TEAMS_SUCCESS,
        response: {
          result: [1],
          entities: {
            teams: {
              1: fixture[0]
            }
          }
        }
      }

      expect(actions.fetchTeamsSuccess(fixture)).to.deep.eq(expectedResult)
    })
  })

  describe('fetchTeamsFailure', () => {
    it('should return the correct type and error message', () => {
      const fixture = {
        message: 'Error!'
      }
      const expectedResult = {
        type: types.FETCH_TEAMS_FAILURE,
        message: fixture.message
      }

      expect(actions.fetchTeamsFailure(fixture)).to.deep.eq(expectedResult)
    })
  })

  describe('fetchTeams', () => {
    it('creates FETCH_TEAMS_SUCCESS when fetching teams is finished', () => {
      nock(URL)
        .get('/teams')
        .reply(200, { body: [{
          id: 1,
          name: 'A Team'
        }]})

      const expectedActions = [
        { type: types.FETCH_TEAMS_REQUEST },
        { type: types.FETCH_TEAMS_SUCCESS, 
          response: {
            entities: {
              teams: {
                1: {
                  id: 1,
                  name: 'A Team'
                }
              }
            },
            result: [1]
          } 
        }
      ]
      const store = mockStore({ teams: [] })

      store.dispatch(actions.fetchTeams())
        .then(() => {
          expect(store.getActions()).to.eq(expectedActions)
        })
    })
  })
})
