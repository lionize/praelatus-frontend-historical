import { expect } from 'chai'
import { List, Map } from 'immutable'
import reducer, { actions } from 'modules/teams'

describe('teams reducer', () => {
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

  it('handles FETCH_TEAMS_REQUEST', () => {
    const expectedResult = state.set('loading', true)
    const nextState = reducer(state, actions.fetchTeamsRequest())

    expect(nextState).to.eq(expectedResult)
  })

  it('handles FETCH_TEAMS_SUCCESS', () => {
    const fixture = [{
			createdAt: "Wed, 28 Sep 2016 01:17:30 GMT",
			icon: "",
			id: 1,
			name: "The A Team",
			urlSlug: "the-a-team"
    }]
    const expectedResult = state.merge(Map({
      ids: List.of(1),
      byId: (Map({1: Map(fixture[0])}))
    }))
    const nextState = reducer(state, actions.fetchTeamsSuccess(fixture))

    expect(nextState).to.eq(expectedResult)
  })

  it('should handle FETCH_TEAMS_FAILURE', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = state.merge(Map({
      error: fixture.message
    }))
    const nextState = reducer(state, actions.fetchTeamsFailure(fixture))

    expect(nextState).to.eq(expectedResult)
  })
})
