import { expect } from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import actions from 'modules/auth'
import {
  login,
  register,
  logout,
} from 'sagas/auth'

const fixture = {
  username: "username",
  password: "password",
}

const api = {
  login() {},
  register() {},
}

describe('Auth - Sagas', () => {
  describe('login', () => {
    it('success', () => {
      const generator = login(api, { ...fixture })

      expect(generator.next().value).to.deep.eq(call(api.login, { ...fixture }))

      const response = {
        username: "username",
      }

      let next = generator.next(response).value
      let expected = put(actions.loginSuccess(response.username))

      expect(next).to.deep.eq(expected)

      next = generator.next().value
      expected = put(push('/'))

      expect(next).to.deep.eq(expected)
    })

    it('failure', () => {
      const generator = login(api, {})
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.loginFailure(error))

      expect(next).to.deep.eq(expected)
    })
  })

  describe('register', () => {
    it('success', () => {
      const generator = register(api, { payload: fixture })

      expect(generator.next().value).to.deep.eq(call(api.register, fixture))

      const response = {
        id: 0,
        username: "username",
        password: "password",
      }

      let next = generator.next(response).value
      let expected = put(actions.registerSuccess(response.username))

      expect(next).to.deep.eq(expected)

      next = generator.next().value
      expected = put(push('/'))

      expect(next).to.deep.eq(expected)
    })

    it('failure', () => {
      const generator = register(api, {})
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.registerFailure(error))

      expect(next).to.deep.eq(expected)
    })
  })

  describe('logout', () => {
    it('success', () => {
      const generator = logout()

      expect(generator.next().value).to.deep.eq(put(actions.logout()))

      const next = generator.next().value
      const expected = put(push('/'))

      expect(next).to.deep.eq(expected)
    })
  })
})
