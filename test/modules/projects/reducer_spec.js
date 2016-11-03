import { expect } from 'chai'
import { List, Map } from 'immutable'
import reducer, { actions } from 'modules/projects'

describe('projects reducer', () => {
  let state
  beforeEach(() => {
    state = Map({
      loading: false,
      error: null,
      ids: List(),
      byId: Map(),
    })
  })

  it('returns a default state', () => {
    const nextState = reducer(undefined, {})

    expect(nextState).to.eq(state)
  })

  it('handles FETCH_PROJECTS_REQUEST', () => {
    const expectedResult = state.set('loading', true)
    const nextState = reducer(state, actions.fetchProjectsRequest())

    expect(nextState).to.eq(expectedResult)
  })

  it('handles FETCH_PROJECTS_SUCCESS', () => {
    const fixture = [{
      id: 1,
      name: 'Best Project',
    }]
    const expectedResult = state.merge(Map({
      ids: List.of(1),
      byId: Map({1: Map(fixture[0])})
    }))
    const nextState = reducer(state, actions.fetchProjectsSuccess(fixture))

    expect(nextState).to.eq(expectedResult)
  })

  it('handles FETCH_PROJECTS_FAILURE', () => {
    const fixture = {
      message: 'Error!',
    }
    const expectedResult = state.merge(Map({
      error: fixture.message
    }))
    const nextState = reducer(state, actions.fetchProjectsFailure(fixture))

    expect(nextState).to.eq(expectedResult)
  })
})
