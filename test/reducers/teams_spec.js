import { expect } from 'chai'
import { List, Map } from 'immutable'
import reducer from 'reducers/teams'
import * as actions from 'actions/teams'

describe('teams module reducers', () => {
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

  describe('FETCH_TEAMS_REQUEST', () => {
    const nextState = reducer(state, actions.fetchTeamsRequest())

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('FETCH_TEAMS_SUCCESS', () => {
    const fixture = [{
			id: 1,
			name: "The A Team",
    }]
    const nextState = reducer(state, actions.fetchTeamsSuccess(fixture))

    it('adds teams to the state', () => {
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

  describe('FETCH_TEAMS_FAILURE', () => {
    const fixture = {
      message: 'Error!'
    }
    const nextState = reducer(state.set('loading', false), actions.fetchTeamsFailure(fixture))

    it('adds the error message to the state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('CREATE_TEAM_REQUEST', () => {
    const nextState = reducer(state.set('loading', false), actions.createTeamRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })
  describe('CREATE_TEAM_SUCCESS', () => {
    const fixture = {
      id: 1,
      name: "The A Team",
    }
    const nextState = reducer(state, actions.createTeamSuccess(fixture))

    it('adds the team to the state', () => {
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

  describe('CREATE_TEAM_FAILURE', () => {
    const fixture = {
      message: 'Error!'
    }
    const nextState = reducer(state, actions.createTeamFailure(fixture))

    it('adds the error to the state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('UPDATE_TEAM_REQUEST', () => {
    const nextState = reducer(state.set('loading', false), actions.updateTeamRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })

  describe('UPDATE_TEAM_SUCCESS', () => {
    const fixture = {
      id: 1,
      name: "The A Team",
    }
    const newState = state.merge(Map({
      ids: List.of(1),
      byId: Map({ 1: Map({
        id: 1,
        name: "The B Team",
      }) })
    }))
    const nextState = reducer(newState, actions.updateTeamSuccess(fixture))

    it('replaces the old ticket in the state', () => {
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

  describe('UPDATE_TEAM_FAILURE', () => {
    const fixture = { message: 'Error!' }
    const nextState = reducer(state, actions.updateTeamFailure(fixture))

    it('adds the error to state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('DELETE_TEAM_REQUEST', () => {
    const nextState = reducer(state, actions.deleteTeamRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })

  describe('DELETE_TEAM_SUCCESS', () => {
    const fixture = { id: 1 }
    const newState = state.merge(Map({
      ids: List.of(1),
      byId: Map({ 1: Map({ id: 1 }) })
    }))
    const nextState = reducer(newState, actions.deleteTeamSuccess(fixture.id))

    it('removes the team from the state', () => {
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

  describe('DELETE_TEAM_FAILURE', () => {
    const fixture = { message: 'Error!' }
    const nextState = reducer(state, actions.deleteTeamFailure(fixture))

    it('adds the error to state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })
})
