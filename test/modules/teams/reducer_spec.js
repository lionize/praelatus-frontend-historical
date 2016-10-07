import { expect } from 'chai'
import reducer, { actions } from 'modules/teams'

describe('team reducer', () => {
  let state
  beforeEach(() => {
    state = {
      loading: false,
      error: null,
      ids: [],
      byId: {}
    }
  })

  it('should return the initial state', () => {
    const expectedResult = state
    const nextState = reducer(undefined, {})

    expect(nextState).to.deep.eq(expectedResult)
  })

  it('should handle the fetchTeamsRequest action correctly', () => {
    const expectedResult = {
      ...state,
      loading: true
    }
    const nextState = reducer(state, actions.fetchTeamsRequest())

    expect(nextState).to.deep.eq(expectedResult)
  })

  it('should handle the fetchTeamsSuccess action correctly', () => {
    const fixture = [{
			createdAt: "Wed, 28 Sep 2016 01:17:30 GMT",
			icon: "",
			id: 1,
			name: "The A Team",
			urlSlug: "the-a-team"
    }]
    const expectedResult = {
      ...state,
      ids: [1],
      byId: { 1: fixture[0] }
    }
    const nextState = reducer(state, actions.fetchTeamsSuccess(fixture))

    expect(nextState).to.deep.eq(expectedResult)
  })

  it('should handle the fetchTeamsFailure action correctly', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      ...state,
      error: fixture.message
    }
    const nextState = reducer(state, actions.fetchTeamsFailure(fixture))

    expect(nextState).to.deep.eq(expectedResult)
  })
})
