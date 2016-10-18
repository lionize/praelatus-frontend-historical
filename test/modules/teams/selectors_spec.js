import { expect } from 'chai'
import { fromJS } from 'immutable'
import {
  teamsSelector,
  teamSelector,
  loadingSelector,
  errorSelector,
} from 'modules/teams'

describe('teams selectors', () => {
  it('teamsSelector returns all teams', () => {
    const state = fromJS({
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
    })
    const expected = fromJS([
      {
        id: 1,
        summary: "This is a summary!",
        description: "This is a description!"
      }
    ])

    expect(teamsSelector(state)).to.eq(expected)
  })

  it('teamSelector returns a team', () => {
    const state = fromJS({
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
    })
    const expected = fromJS({
      id: 1,
      summary: "This is a summary!",
      description: "This is a description!"
    })

    expect(teamSelector(state, 1)).to.deep.eq(expected)
  })

  it('loadingSelector returns the loading status', () => {
    const state = fromJS({
      teams: {
        loading: true
      }
    })
    const expected = true

    expect(loadingSelector(state)).to.eq(expected)
  })

  it('errorSelector returns the error status', () => {
    const state = fromJS({
      teams: {
        error: 'This is an error!'
      }
    })
    const expected = 'This is an error!'

    expect(errorSelector(state)).to.eq(expected)
  })
})
