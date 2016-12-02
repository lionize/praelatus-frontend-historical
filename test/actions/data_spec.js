import { expect } from 'chai'
import types from 'types/data'
import * as actions from 'actions/data'

describe('data actions', () => {
  describe('fetchDataSuccess', () => {
    describe('singular object response', () => {
      const fixture = {
        id: 0,
        name: 'A Team',
      }
      const expectedResult = {
        type: types.FETCH_DATA_SUCCESS,
        singular: true,
        responseType: 'team',
        response: {
          result: 0,
          entities: {
            teams: {
              0: fixture
            }
          }
        }
      }
      const result = actions.fetchDataSuccess(fixture, 'team', true)

      it('should return the correct type', () => {
        expect(result.type).to.eq(expectedResult.type)
      })

      it('should return the correct response', () => {
        expect(result.response.toJS()).to.deep.eq(expectedResult.response)
      })

      it('should return the correct response type', () => {
        expect(result.responseType).to.eq(expectedResult.responseType)
      })

      it('should return the correct singular flag', () => {
        expect(result.singular).to.eq(expectedResult.singular)
      })
    })
    describe('multiple object response', () => {
      const fixture = [
        {
          id: 0,
          name: 'A Team',
        },
        {
          id: 1,
          name: 'B Team',
        }
      ]
      const expectedResult = {
        type: types.FETCH_DATA_SUCCESS,
        singular: false,
        responseType: 'team',
        response: {
          result: [0, 1],
          entities: {
            teams: {
              0: fixture[0],
              1: fixture[1]
            }
          }
        }
      }
      const result = actions.fetchDataSuccess(fixture, 'team')

      it('should return the correct type', () => {
        expect(result.type).to.eq(expectedResult.type)
      })

      it('should return the correct response', () => {
        expect(result.response.toJS()).to.deep.eq(expectedResult.response)
      })

      it('should return the correct response type', () => {
        expect(result.responseType).to.eq(expectedResult.responseType)
      })

      it('should return the correct singular flag', () => {
        expect(result.singular).to.eq(false)
      })
    })
  })
})
