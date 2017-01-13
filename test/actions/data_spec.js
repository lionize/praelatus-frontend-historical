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
        username: 'user0',
        email: 'user0@users.com',
        fullName: 'User 0',
        gravatar: 'user0@users.com',
        profilePic: null,
        isAdmin: false,
      },
      {
        id: 1,
        username: 'user1',
        email: 'user1@users.com',
        fullName: 'User 1',
        gravatar: 'user1@users.com',
        profilePic: null,
        isAdmin: false,
      }
    ]
    const expectedResult = {
      type: types.FETCH_DATA_SUCCESS,
      response: {
        entities: {
          users: {
            0: fixture[0],
            1: fixture[1],
          }
        },
        result: {
          users: [0, 1]
        }
      }
    }
    const result = actions.fetchDataSuccess(fixture, 'user')

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.response.get('entities').toJS()).to.deep.eq(expectedResult.response.entities)
      expect(result.response.get('result').toJS()).to.deep.eq(expectedResult.response.result)
    })

    describe('with an array relationship', () => {
      const usersFixture = [
        {
          id: 0,
          username: 'user0',
          email: 'user0@users.com',
          fullName: 'User 0',
          gravatar: 'user0@users.com',
          profilePic: null,
          isAdmin: false,
        },
        {
          id: 1,
          username: 'user1',
          email: 'user1@users.com',
          fullName: 'User 1',
          gravatar: 'user1@users.com',
          profilePic: null,
          isAdmin: false,
        }
      ]
      const fixture = [{
        id: 0,
        name: 'Best Team',
        lead: usersFixture[0],
        members: usersFixture,
      }]

      const expectedResult = {
        type: types.FETCH_DATA_SUCCESS,
        response: {
          entities: {
            users: {
              0: usersFixture[0],
              1: usersFixture[1],
            },
            teams: {
              0: {
                ...fixture[0],
                lead: 0,
                members: [0, 1],
              },
            }
          },
          result: {
            users: [0, 1],
            teams: [0],
          }
        }
      }
      const result = actions.fetchDataSuccess(fixture, 'team')

      it('should return the correct type', () => {
        expect(result.type).to.eq(types.FETCH_DATA_SUCCESS)
      })

      it('should return the correct response', () => {
        expect(result.response.get('entities').toJS()).to.deep.eq(expectedResult.response.entities)
        expect(result.response.get('result').toJS()).to.deep.eq(expectedResult.response.result)
      })
    })
  })
})
