import { expect } from 'chai'
import { List, Map } from 'immutable'
import reducer from 'reducers/auth'
import * as actions from 'actions/auth'

describe('auth reducers', () => {
  const state = Map({
    currentUser: null,
    loading: null,
    error: '',
  })

  it('returns a default state', () => {
    const expectedResult = Map({
      currentUser: null,
      loading: false,
      error: null,
    })
    const nextState = reducer(undefined, {})

    expect(nextState).to.eq(expectedResult)
  })

  describe('LOGIN_REQUEST', () => {
    const nextState = reducer(state, actions.loginRequest())

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('LOGIN_SUCCESS', () => {
    const fixture = {
      id: 0,
      username: 'username',
    }

    const expectedResult = state.merge(Map({
      id: fixture.id,
      error: null,
      loading: false,
    }))

    const nextState = reducer(state, actions.loginSuccess(fixture))

    it('sets currentUser id', () => {
      expect(nextState.get('currentUser')).to.eq(expectedResult.get('id'))
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(expectedResult.get('error'))
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(expectedResult.get('loading'))
    })
  })

  describe('LOGIN_FAILURE', () => {
    const fixture = {
      message: 'Error logging in!',
    }

    const expectedResult = state.merge(Map({
      currentUser: null,
      loading: false,
      error: fixture.message,
    }))

    const nextState = reducer(state, actions.loginFailure(fixture))

    it('sets currentUser to null', () => {
      expect(nextState.get('currentUser')).to.eq(expectedResult.get('currentUser'))
    })

    it('sets the error message', () => {
      expect(nextState.get('error')).to.eq(expectedResult.get('error'))
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(expectedResult.get('loading'))
    })
  })

  describe('LOGOUT_REQUEST', () => {
    const expectedResult = state.merge(Map({
      error: null,
      loading: true,
    }))

    const nextState = reducer(state, actions.logoutRequest())

    it('sets error to null', () => {
      expect(nextState.get('loading')).to.eq(expectedResult.get('loading'))
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(expectedResult.get('loading'))
    })
  })

  describe('LOGOUT_SUCCESS', () => {
    const expectedResult = state.merge(Map({
      currentUser: null,
      error: null,
      loading: false,
    }))

    const nextState = reducer(state, actions.logoutSuccess())

    it('sets currentUser to null', () => {
      expect(nextState.get('currentUser')).to.eq(expectedResult.get('currentUser'))
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(expectedResult.get('error'))
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(expectedResult.get('loading'))
    })
  })

  describe('LOGOUT_FAILURE', () => {
    it('does something')
  })

  describe('REGISTER_REQUEST', () => {
    const fixture = {
      username: 'username',
      password: 'password',
    }

    const expectedResult = state.merge(Map({
      error: null,
      loading: true,
    }))

    const nextState = reducer(state, actions.registerRequest(fixture))

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(expectedResult.get('error'))
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(expectedResult.get('loading'))
    })
  })

  describe('REGISTER_SUCCESS', () => {
    const fixture = {
      id: 0,
      username: 'username',
    }

    const expectedResult = state.merge(Map({
      currentUser: fixture.id,
      error: null,
      loading: false,
    }))

    const nextState = reducer(state, actions.registerSuccess(fixture))

    it('sets currentUser', () => {
      expect(nextState.get('currentUser')).to.eq(expectedResult.get('currentUser'))
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(expectedResult.get('error'))
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(expectedResult.get('loading'))
    })
  })

  describe('REGISTER_FAILURE', () => {
    const fixture = {
      message: 'Error registering!',
    }

    const expectedResult = state.merge(Map({
      error: fixture.message,
      loading: false,
    }))

    const nextState = reducer(state, actions.registerFailure(fixture))

    it('sets the error message', () => {
      expect(nextState.get('error')).to.eq(expectedResult.get('error'))
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(expectedResult.get('loading'))
    })
  })
})

