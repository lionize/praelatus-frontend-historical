import { expect } from 'chai'
import { List, Map } from 'immutable'
import reducer, { actions } from 'modules/projects'

describe('projects module reducers', () => {
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

  describe('FETCH_PROJECTS_REQUEST', () => {
    const nextState = reducer(state, actions.fetchProjectsRequest())

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })
  })

  describe('FETCH_PROJECTS_SUCCESS', () => {
    const fixture = [{
      id: 1,
      createdDate: '',
      name: 'A Project',
      key: 'a-project',
      homepage: '',
      iconURL: '',
      repo: '',
    }]
    const nextState = reducer(state, actions.fetchProjectsSuccess(fixture))

    it('adds projects to the state', () => {
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

  describe('FETCH_PROJECTS_FAILURE', () => {
    const fixture = {
      message: 'Error!'
    }
    const nextState = reducer(state.set('loading', false), actions.fetchProjectsFailure(fixture))

    it('adds the error message to the state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('CREATE_PROJECT_REQUEST', () => {
    const nextState = reducer(state.set('loading', false), actions.createProjectRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })
  describe('CREATE_PROJECT_SUCCESS', () => {
    const fixture = {
      id: 1,
      createdDate: '',
      name: 'A Project',
      key: 'a-project',
      homepage: '',
      iconURL: '',
      repo: '',
    }
    const nextState = reducer(state, actions.createProjectSuccess(fixture))

    it('adds the project to the state', () => {
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

  describe('CREATE_PROJECT_FAILURE', () => {
    const fixture = {
      message: 'Error!'
    }
    const nextState = reducer(state, actions.createProjectFailure(fixture))

    it('adds the error to the state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('UPDATE_PROJECT_REQUEST', () => {
    const nextState = reducer(state.set('loading', false), actions.updateProjectRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })

  describe('UPDATE_PROJECT_SUCCESS', () => {
    const fixture = {
      id: 1,
      createdDate: '',
      name: 'A Project',
      key: 'a-project',
      homepage: '',
      iconURL: '',
      repo: '',
    }
    const newState = state.merge(Map({
      ids: List.of(1),
      byId: Map({ 1: Map({
        id: 1,
        name: "The B Project",
      }) })
    }))
    const nextState = reducer(newState, actions.updateProjectSuccess(fixture))

    it('replaces the old project in the state', () => {
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

  describe('UPDATE_PROJECT_FAILURE', () => {
    const fixture = { message: 'Error!' }
    const nextState = reducer(state, actions.updateProjectFailure(fixture))

    it('adds the error to state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })

  describe('DELETE_PROJECT_REQUEST', () => {
    const nextState = reducer(state, actions.deleteProjectRequest())

    it('sets error to null', () => {
      expect(nextState.get('error')).to.eq(null)
    })

    it('sets loading to true', () => {
      expect(nextState.get('loading')).to.eq(true)
    })
  })

  describe('DELETE_PROJECT_SUCCESS', () => {
    const fixture = { id: 1 }
    const newState = state.merge(Map({
      ids: List.of(1),
      byId: Map({ 1: Map({ id: 1 }) })
    }))
    const nextState = reducer(newState, actions.deleteProjectSuccess(fixture.id))

    it('removes the project from the state', () => {
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

  describe('DELETE_PROJECT_FAILURE', () => {
    const fixture = { message: 'Error!' }
    const nextState = reducer(state, actions.deleteProjectFailure(fixture))

    it('adds the error to state', () => {
      expect(nextState.get('error')).to.eq(fixture.message)
    })

    it('sets loading to false', () => {
      expect(nextState.get('loading')).to.eq(false)
    })
  })
})
