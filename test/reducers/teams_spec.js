import { expect } from 'chai'
import {
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE,
  FETCH_TEAMS_REQUEST,
} from 'constants/actionTypes'
import {
  fetchTeamsRequest,
  fetchTeamsSuccess,
  fetchTeamsFailure,
} from 'actions/teams'
import teamReducer from 'reducers/teams'

describe('teamReducer', () => {
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
    const nextState = teamReducer(undefined, {})

    expect(nextState).to.deep.eq(expectedResult)
  })

  it('should handle the fetchTeamsRequest action correctly', () => {
    const expectedResult = {
      ...state,
      loading: true
    }
    const nextState = teamReducer(state, fetchTeamsRequest())

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
    const nextState = teamReducer(state, fetchTeamsSuccess(fixture))

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
    const nextState = teamReducer(state, fetchTeamsFailure(fixture))

    expect(nextState).to.deep.eq(expectedResult)
  })
})
