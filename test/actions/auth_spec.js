import { expect } from 'chai'
import types from 'types/auth'
import * as actions from 'actions/auth'

describe('auth actions', () => {
  describe('loginRequest', () => {
    const fixture = {
      username: 'username',
      password: 'password',
    }

    const expectedResult = {
      type: types.LOGIN_REQUEST,
      payload: fixture,
    }

    const result = actions.loginRequest(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct payload', () => {
      expect(result.payload).to.eq(expectedResult.payload)
    })
  })

  describe('loginSuccess', () => {
    const fixture = {
      token: 'TEST_TOKEN',
      user: {
        id: 0,
        username: 'username',
        email: 'email@users.com',
        fullName: 'User Name',
        gravatar: 'email@users.com',
        'is_active': true,
      }
    }

    const expectedResult = {
      type: types.LOGIN_SUCCESS,
      response: fixture,
    }

    const result = actions.loginSuccess(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('loginFailure', () => {
    const fixture = {
      message: 'Wrong password!',
    }

    const expectedResult = {
      type: types.LOGIN_FAILURE,
      message: fixture.message,
    }

    const result = actions.loginFailure(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the error message', () => {
      expect(result.message).to.eq(expectedResult.message)
    })
  })

  describe('logoutRequest', () => {
    const expectedResult = {
      type: types.LOGOUT_REQUEST,
    }

    const result = actions.logoutRequest()

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })
  })

  describe('logoutSuccess', () => {
    const expectedResult = {
      type: types.LOGOUT_SUCCESS,
    }

    const result = actions.logoutSuccess()

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })
  })

  describe('logoutFailure', () => {
    it('should do stuff')
  })

  describe('registerRequest', () => {
    const fixture = {
      username: 'username',
      password: 'password',
      email: 'email@users.com',
      fullName: 'User Name',
    }

    const expectedResult = {
      type: types.REGISTER_REQUEST,
      payload: fixture,
    }

    const result = actions.registerRequest(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the payload', () => {
      expect(result.payload).to.eq(expectedResult.payload)
    })
  })

  describe('registerSuccess', () => {
    const fixture = {
      token: 'TOKEN_STRING',
      user: {
        username: 'username',
        password: 'password',
        email: 'email@users.com',
        fullName: 'User Name',
      }
    }

    const expectedResult = {
      type: types.REGISTER_SUCCESS,
      response: fixture,
    }

    const result = actions.registerSuccess(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the response', () => {
      expect(result.response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('registerFailure', () => {
    const fixture = {
      message: 'Some sort of error occurred!',
    }

    const expectedResult = {
      type: types.REGISTER_FAILURE,
      message: fixture.message,
    }

    const result = actions.registerFailure(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the error message', () => {
      expect(result.message).to.eq(expectedResult.message)
    })
  })
})
