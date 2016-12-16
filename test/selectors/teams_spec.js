import { expect } from 'chai'
import { fromJS } from 'immutable'
import {
  teamsSelector,
  teamSelector,
  loadingSelector,
  errorSelector,
} from 'selectors/teams'

describe('teams selectors', () => {
  const baseState = fromJS({
    data: {
      teams: {
        ids: [1],
        byId: {
          1: {
            id: 1,
            summary: "This is a summary!",
            description: "This is a description!"
          }
        }
      }
    }
  })
  it('teamsSelector returns all teams', () => {
    const expected = fromJS([
      {
        id: 1,
        summary: "This is a summary!",
        description: "This is a description!"
      }
    ])

    expect(teamsSelector(baseState)).to.eq(expected)
  })

  it('teamSelector returns a team', () => {
    const expected = fromJS({
      id: 1,
      summary: "This is a summary!",
      description: "This is a description!"
    })

    expect(teamSelector(baseState, 1)).to.deep.eq(expected)
  })

  it('loadingSelector returns the loading status', () => {
    const state = fromJS(
      baseState.setIn(['data', 'teams', 'loading'], true)
    )
    const expected = true

    expect(loadingSelector(state)).to.eq(expected)
  })

  it('errorSelector returns the error status', () => {
    const state = fromJS(
      baseState.setIn(['data', 'teams', 'error'], 'This is an error!')
    )
    const expected = 'This is an error!'

    expect(errorSelector(state)).to.eq(expected)
  })
})
