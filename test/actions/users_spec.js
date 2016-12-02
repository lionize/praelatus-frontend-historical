import { expect } from 'chai'
import types from 'types/users'
import * as actions from 'actions/users'
console.log('types', types)
console.log('actions', actions)

describe('users module actions', () => {
  describe('fetchUsersRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: types.FETCH_USERS_REQUEST,
      }

      expect(actions.fetchUsersRequest()).to.deep.eq(expectedResult)
    })
  })

  describe('fetchUsersSuccess', () => {
    it('should return the correct type and the correct response', () => {
      const fixture = [{
        id: 1,
        username: "testuser",
        email: "testuser@test.com",
        fullName: "Test User",
        gravatar: "",
        profilePic: "",
        isAdmin: false
      }]
      const expectedResult = {
        type: types.FETCH_USERS_SUCCESS,
        response: {
          result: [1],
          entities: {
            users: {
              1: fixture[0]
            }
          }
        }
      }

      expect(actions.fetchUsersSuccess(fixture).response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('fetchUsersFailure', () => {
    it('should return the correct type and error message', () => {
      const fixture = {
        message: 'Error!'
      }
      const expectedResult = {
        type: types.FETCH_USERS_FAILURE,
        message: fixture.message
      }

      expect(actions.fetchUsersFailure(fixture)).to.deep.eq(expectedResult)
    })
  })

  describe('createUserRequest', () => {
    const fixture = {
			id: 1,
      username: "testuser",
      email: "testuser@test.com",
      fullName: "Test User",
      gravatar: "",
      profilePic: "",
      isAdmin: false
    }
    const expectedResult = {
      type: types.CREATE_USER_REQUEST,
      payload: fixture
    }

    it('should return the correct type', () => {
      expect(actions.createUserRequest(fixture).type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(actions.createUserRequest(fixture).payload).to.deep.eq(expectedResult.payload)
    })
  })

  describe('createUserSuccess', () => {
    const fixture = {
			id: 1,
      username: "testuser",
      email: "testuser@test.com",
      fullName: "Test User",
      gravatar: "",
      profilePic: "",
      isAdmin: false
    }
    const expectedResult = {
      type: types.CREATE_USER_SUCCESS,
      response: {
        result: 1,
        entities: {
          users: {
            1: fixture
          }
        }
      }
    }
    const result = actions.createUserSuccess(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('createUserFailure', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      type: types.CREATE_USER_FAILURE,
      message: fixture.message
    }
    const result = actions.createUserFailure(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.message).to.eq(expectedResult.message)
    })
  })

  describe('updateUserRequest', () => {
    const fixture = {
			id: 1,
      username: "testuser",
      email: "testuser@test.com",
      fullName: "Test User",
      gravatar: "",
      profilePic: "",
      isAdmin: false
    }
    const expectedResult = {
      type: types.UPDATE_USER_REQUEST,
      payload: fixture
    }
    const result = actions.updateUserRequest(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(result.payload).to.eq(expectedResult.payload)
    })
  })

  describe('updateUserSuccess', () => {
    const fixture = {
			id: 1,
      username: "testuser",
      email: "testuser@test.com",
      fullName: "Test User",
      gravatar: "",
      profilePic: "",
      isAdmin: false
    }
    const expectedResult = {
      type: types.UPDATE_USER_SUCCESS,
      response: {
        result: 1,
        entities: {
          users: {
            1: fixture
          }
        }
      }
    }
    const result = actions.updateUserSuccess(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('updateUserFailure', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      type: types.UPDATE_USER_FAILURE,
      message: fixture.message
    }
    const result = actions.updateUserFailure(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the error message', () => {
      expect(result.message).to.eq(expectedResult.message)
    })
  })

  describe('deleteUserRequest', () => {
    const fixture = { id: 0 }
    const expectedResult = {
      type: types.DELETE_USER_REQUEST,
      payload: fixture
    }
    const result = actions.deleteUserRequest(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(result.payload).to.eq(expectedResult.payload)
    })
  })

  describe('deleteUserSuccess', () => {
    const expectedResult = {
      type: types.DELETE_USER_SUCCESS,
      id: 1,
    }
    const result = actions.deleteUserSuccess(1)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct id', () => {
      expect(result.id).to.eq(expectedResult.id)
    })
  })

  describe('deleteUserFailure', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      type: types.DELETE_USER_FAILURE,
      message: fixture.message
    }
    const result = actions.deleteUserFailure(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the error message', () => {
      expect(result.message).to.eq(expectedResult.message)
    })
  })
})
