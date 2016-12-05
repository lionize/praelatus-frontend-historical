import { expect } from 'chai'
import { normalize, arrayOf } from 'normalizr-immutable'
import * as schema from 'schema'
import types from 'types/data'
import * as actions from 'actions/data'

describe('data actions', () => {
  describe('fetchDataSuccess', () => {
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
      response: {
        entities: {
          teams: {
            0: {
              id: 0,
              name: 'A Team'
            },
            1: {
              id: 1,
              name: 'B Team'
            }
          }
        },
        result: {
          teams: [0, 1]
        }
      }
    }
    const result = actions.fetchDataSuccess(fixture, 'team')

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.response.get('entities').toJS()).to.deep.eq(expectedResult.response.entities)
      expect(result.response.get('result').toJS()).to.deep.eq(expectedResult.response.result)
    })
  })

  describe('formatResponse', () => {
    const author = {
      id: 1,
      username: 'mark',
      email: 'mark@test.com',
      fullName: 'Mark',
      gravatar: 'mark@test.com',
      profilePic: 'mark@test.com',
      isAdmin: false,
    }
    const comment = [{
      id: 2,
      body: 'A Comment',
      author: author,
    }]
    const normalized = normalize(comment, arrayOf(schema.comment))
    const result = actions.formatResponse(normalized)

    it('should return the correct entities', () => {
      expect(result.get('entities').toJS()).to.deep.eq({
        users: {
          '1': author,
        },
        comments: {
          '2': {
            id: 2,
            body: 'A Comment',
            author: author.id,
          }
        },
      })
    })

    it('should return the correct result', () => {
      expect(result.get('result').toJS()).to.deep.eq({
        users: [1],
        comments: [2],
      })
    })
  })
})
