import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import { expect } from 'chai'
import {
  FETCH_TEAMS_FAILURE,
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
} from 'constants/actionTypes'
import {
  fetchTeamsFailure,
  fetchTeamsRequest,
  fetchTeamsSuccess,
  fetchTeams
} from 'actions/teams'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const URL = 'http://localhost:8080/api/v1'

describe('Team Actions', () => {
  describe('fetchTeamsRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: FETCH_TEAMS_REQUEST,
      }

      expect(fetchTeamsRequest()).to.deep.eq(expectedResult)
    })
  })

  describe('fetchTeamsSuccess', () => {
    it('should return the correct type and the correct response', () => {
      const fixture = [{
        id: 1,
        name: 'A Team'
      }]
      const expectedResult = {
        type: FETCH_TEAMS_SUCCESS,
        response: {
          result: [1],
          entities: {
            teams: {
              1: fixture[0]
            }
          }
        }
      }

      expect(fetchTeamsSuccess(fixture)).to.deep.eq(expectedResult)
    })
  })

  describe('fetchTeamsFailure', () => {
    it('should return the correct type and error message', () => {
      const fixture = {
        message: 'Error!'
      }
      const expectedResult = {
        type: FETCH_TEAMS_FAILURE,
        message: fixture.message
      }

      expect(fetchTeamsFailure(fixture)).to.deep.eq(expectedResult)
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
        { type: FETCH_TEAMS_REQUEST },
        { type: FETCH_TEAMS_SUCCESS, 
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

      store.dispatch(fetchTeams())
        .then(() => {
          expect(store.getActions()).to.eq(expectedActions)
        })
    })
  })
})
