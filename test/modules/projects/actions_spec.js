import configureMockStore from 'redux-mock-store'
import { expect } from 'chai'
import { types, actions } from 'modules/projects'

const middlewares = []
const mockStore = configureMockStore(middlewares)

describe('project actions', () => {
  describe('fetchProjectsRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: types.FETCH_PROJECTS_REQUEST,
      }

      expect(actions.fetchProjectsRequest()).to.deep.eq(expectedResult)
    })
  })

  describe('fetchProjectsSuccess', () => {
    it('should return the correct type and the correct response', () => {
      const fixture = [{
        id: 1,
        name: 'Best Project'
      }]
      const expectedResult = {
        type: types.FETCH_PROJECTS_SUCCESS,
        response: {
          result: [1],
          entities: {
            projects: {
              1: fixture[0]
            }
          }
        }
      }

      expect(actions.fetchProjectsSuccess(fixture).response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('fetchProjectsFailure', () => {
    it('should return the correct type and error message', () => {
      const fixture = {
        message: 'Error!',
      }
      const expectedResult = {
        type: types.FETCH_PROJECTS_FAILURE,
        message: fixture.message,
      }

      expect(actions.fetchProjectsFailure(fixture)).to.deep.eq(expectedResult)
    })
  })
})
