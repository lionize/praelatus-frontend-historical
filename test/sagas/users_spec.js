import { expect } from 'chai'
import { put, call } from 'redux-saga/effects'
import { fromJS } from 'immutable'
import { push } from 'react-router-redux'
import api from 'api'
import * as actions from 'actions/users'
import * as dataActions from 'actions/data'
import * as sagas from 'sagas/users'

describe('users module sagas', () => {
  describe('GET: fetch users', () => {
    it('calls the api method', () => {
      const generator = sagas.fetchUsers()

      expect(generator.next().value).to.deep.eq(call(api.fetchUsers, {}))
    })

    it('fetches users', () => {
      const generator = sagas.fetchUsers()
      generator.next()
      const response = []
      const next = generator.next(response).value
      const expected = put(dataActions.fetchDataSuccess(response, 'user'))

      expect(next.PUT.action.type).to.eq(expected.PUT.action.type)
      expect(next.PUT.action.response).to.eq(expected.PUT.action.response)
    })

    it('returns an error if fetching fails', () => {
      const generator = sagas.fetchUsers()
      generator.next()
      const response = { message: 'Error!' }

      expect(generator.throw(response).value).to.deep.eq(put(actions.fetchUsersFailure(response)))
    })
  })

  describe('POST: create user', () => {
    const fixture = {
      name: 'The A User',
    }

    it('calls the api method', () => {
      const generator = sagas.createUser({ payload: fixture })

      expect(generator.next().value).to.deep.eq(call(api.createUser, fixture))
    })

    it('creates a user', () => {
      const generator = sagas.createUser({ payload: fixture })
      generator.next()
      const response = {
        id: 0,
        ...fixture
      }
      const next = generator.next(response).value
      const expected = put(actions.createUserSuccess(response))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.response).to.equal(expected.PUT.action.response)
    })

    it('redirects to new user page', () => {
      const generator = sagas.createUser({ payload: fixture })
      generator.next()
      const response = fromJS({
        id: 0,
        ...fixture
      })
      generator.next(response).value

      const next = generator.next().value
      const expected = put(push(`/users/${response.id}`))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.response).to.equal(expected.PUT.action.response)
    })

    it('returns an error if creation fails', () => {
      const generator = sagas.createUser({ payload: fixture })
      generator.next()
      const response = { message: 'Error!' }

      expect(generator.throw(response).value).to.deep.eq(put(actions.createUserFailure(response)))
    })
  })

  describe('PUT: update user', () => {
    const fixture = {
      icon: "",
      name: 'The A User',
      urlSlug: 'the-a-user'
    }

    it('calls the api method', () => {
      const generator = sagas.updateUser({ payload: fixture })

      expect(generator.next().value).to.deep.eq(call(api.updateUser, fixture))
    })

    it('updates the ticket', () => {
      const generator = sagas.updateUser({ payload: fixture })
      generator.next()
      const response = fixture
      const next = generator.next(response).value
      const expected = put(actions.updateUserSuccess(response))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.response).to.equal(expected.PUT.action.response)
    })

    it('generates an error if updating fails', () => {
      const generator = sagas.updateUser({ payload: fixture })
      generator.next()
      const response = { message: 'Error!' }

      expect(generator.throw(response).value).to.deep.eq(put(actions.updateUserFailure(response)))
    })
  })

  describe('DELETE: delete user', () => {
    const fixture = { id: 0 }

    it('calls the api method', () => {
      const generator = sagas.deleteUser({ payload: fixture })

      expect(generator.next().value).to.deep.eq(call(api.deleteUser, fixture))
    })

    it('deletes a user', () => {
      const generator = sagas.deleteUser({ payload: fixture })
      generator.next()
      const response = fixture
      const next = generator.next(response).value
      const expected = put(actions.deleteUserSuccess(response))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.id).to.equal(expected.PUT.action.id)
    })
  })
})
