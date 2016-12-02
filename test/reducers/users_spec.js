import { expect } from 'chai'
import { List, Map } from 'immutable'
import reducer from 'reducers/users'
import * as actions from 'actions/users'

describe('users module reducers', () => {
  const state = Map({
    loading: true,
    error: 'Error!',
    ids: List(),
    byId: Map()
  })

  it('returns a default state', () => {
    const expectedResult = Map({
      loading: false,
      error: null,
      ids: List(),
      byId: Map()
    })
    const nextState = reducer(undefined, {})

    expect(nextState).to.eq(expectedResult)
  })

  describe('FETCH_USERS_REQUEST', () => {
    const nextState = reducer(state, actions.fetchUsersRequest())

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('FETCH_USERS_SUCCESS', () => {
    const fixture = [{
			id: 1,
      username: "testuser",
      email: "testuser@test.com",
      fullName: "Test User",
      gravatar: "",
      profilePic: "",
      isAdmin: false
    }]
    const nextState = reducer(state, actions.fetchUsersSuccess(fixture))

    it('adds users to the state', () => {
      const expectedResult = state.merge(Map({
        ids: List.of(1),
        byId: (Map({1: Map(fixture[0])})),
        error: null,
        loading: false
      }))

      expect(nextState).to.eq(expectedResult)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('FETCH_USERS_FAILURE', () => {
    const fixture = {
      message: 'Error!'
    }
    const nextState = reducer(state.set('loading', false), actions.fetchUsersFailure(fixture))

    it('adds the error message to the state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('CREATE_USER_REQUEST', () => {
    const nextState = reducer(state.set('loading', false), actions.createUserRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })
  describe('CREATE_USER_SUCCESS', () => {
    const fixture = {
			id: 1,
      username: "testuser",
      email: "testuser@test.com",
      fullName: "Test User",
      gravatar: "",
      profilePic: "",
      isAdmin: false
    }
    const nextState = reducer(state, actions.createUserSuccess(fixture))

    it('adds the user to the state', () => {
      const expectedResult = state.merge(Map({
        ids: List.of(1),
        byId: Map({ 1: Map(fixture) }),
        error: null,
        loading: false
      }))

      expect(nextState).to.eq(expectedResult)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('CREATE_USER_FAILURE', () => {
    const fixture = {
      message: 'Error!'
    }
    const nextState = reducer(state, actions.createUserFailure(fixture))

    it('adds the error to the state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('UPDATE_USER_REQUEST', () => {
    const nextState = reducer(state.set('loading', false), actions.updateUserRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })

  describe('UPDATE_USER_SUCCESS', () => {
    const fixture = {
			id: 1,
      username: "testuser",
      email: "testuser@test.com",
      fullName: "Test User",
      gravatar: "",
      profilePic: "",
      isAdmin: false
    }
    const newState = state.merge(Map({
      ids: List.of(1),
      byId: Map({ 1: Map({
        id: 1,
        username: "testuser",
        email: "testuser@test.com",
        fullName: "This is a changed Test User Name",
        gravatar: "",
        profilePic: "",
        isAdmin: true,
      }) })
    }))
    const nextState = reducer(newState, actions.updateUserSuccess(fixture))

    it('replaces the old user in the state', () => {
      const expectedResult = state.merge(Map({
        ids: List.of(1),
        byId: Map({ 1: Map(fixture) }),
        error: null,
        loading: false
      }))

      expect(nextState).to.eq(expectedResult)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('UPDATE_USER_FAILURE', () => {
    const fixture = { message: 'Error!' }
    const nextState = reducer(state, actions.updateUserFailure(fixture))

    it('adds the error to state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('DELETE_USER_REQUEST', () => {
    const nextState = reducer(state, actions.deleteUserRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })

  describe('DELETE_USER_SUCCESS', () => {
    const fixture = { id: 1 }
    const newState = state.merge(Map({
      ids: List.of(1),
      byId: Map({ 1: Map({ id: 1 }) })
    }))
    const nextState = reducer(newState, actions.deleteUserSuccess(fixture.id))

    it('removes the user from the state', () => {
      const expectedResult = state.merge(Map({
        ids: List(),
        byId: Map(),
        error: null,
        loading: false
      }))

      expect(nextState).to.eq(expectedResult)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('DELETE_USER_FAILURE', () => {
    const fixture = { message: 'Error!' }
    const nextState = reducer(state, actions.deleteUserFailure(fixture))

    it('adds the error to state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })
})
