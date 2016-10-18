import configureMockStore from 'redux-mock-store'
import { fromJS } from 'immutable'
import nock from 'nock'
import { expect } from 'chai'
import { types, actions } from 'modules/teams'

const middlewares = []
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
        name: 'A Team',
        icon: "",
        createdAt: "",
        urlSlug: ""
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

      expect(actions.fetchTeamsSuccess(fixture).response.toJS()).to.deep.eq(expectedResult.response)
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
})
