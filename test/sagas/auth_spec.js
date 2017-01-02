import { expect } from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'api'
import * as actions from 'actions/auth'
import * as sagas from 'sagas/auth'

describe('auth sagas', () => {
  describe('Logging in', () => {
    const fixture = {
      payload: {
        username: 'username',
        password: 'password',
      }
    }

    const generator = sagas.loginFlow(fixture)

    it('calls the api method', () => {
      const next = generator.next().value
      const expected = call(api.login, fixture.payload)

      expect(next).to.deep.eq(expected)
    })

    it('dispatches the loginSuccess action', () => {
      const response = {
        id: 0,
        username: fixture.payload.username,
      }
      const next = generator.next(response).value
      const expected = put(actions.loginSuccess(response))

      expect(next.PUT.action.type).to.eq(expected.PUT.action.type)
      expect(next.PUT.action.response).to.eq(expected.PUT.action.response)
    })

    it('pushes to the previous page after login')

    it('pushes to "/" after login', () => {
      const next = generator.next().value
      const expected = put(push('/'))
    })

    it('dispatches loginFailure action if login fails', () => {
      const generator = sagas.loginFlow(fixture)
      generator.next()

      const response = { message: 'Error!' }
      const next = generator.throw(response).value
      const expected = put(actions.loginFailure(response))

      expect(next).to.deep.eq(expected)
    })
  })

  describe('Logging out', () => {
    const generator = sagas.logoutFlow()

    it('dispatches the logoutSuccess action', () => {
      const next = generator.next().value
      const expected = put(actions.logoutSuccess())

      expect(next).to.deep.eq(expected)
    })

    it('pushes to the previous page after logging out')

    it('pushes to "/" after logging out', () => {
      const next = generator.next().value
      const expected = put(push('/'))

      expect(next).to.deep.eq(expected)
    })
  })

  describe('Registration', () => {
    const fixture = {
      payload: {
        username: 'username',
        password: 'password',
      }
    }

    const generator = sagas.registerFlow(fixture)

    it('calls the api method', () => {
      const next = generator.next().value
      const expected = call(api.register, fixture.payload)

      expect(next).to.deep.eq(expected)
    })

    it('dispatches the registerSuccess action', () => {
      const response = {
        id: 0,
        username: fixture.payload.username,
      }
      const next = generator.next(response).value
      const expected = put(actions.registerSuccess(response))

      expect(next.PUT.action.type).to.eq(expected.PUT.action.type)
      expect(next.PUT.action.response).to.eq(expected.PUT.action.response)
    })

    it('pushes to the previous page after registering')

    it('pushes to "/" after registering', () => {
      const next = generator.next().value
      const expected = put(push('/'))

      expect(next.PUT.action.type).to.eq(expected.PUT.action.type)
      expect(next.PUT.action.response).to.eq(expected.PUT.action.response)
    })

    it('dispatches registerFailure action if registration fails', () => {
      const generator = sagas.registerFlow(fixture)
      generator.next()

      const response = { message: 'Error!' }
      const next = generator.throw(response).value
      const expected = put(actions.registerFailure(response))

      expect(next).to.deep.eq(expected)
    })
  })
})
