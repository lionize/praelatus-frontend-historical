import { expect } from 'chai'
import { fromJS } from 'immutable'
import {
  usersSelector,
  userSelector,
  loadingSelector,
  errorSelector,
} from 'selectors/users'

describe('users selectors', () => {
  it('usersSelector returns all users', () => {
    const state = fromJS({
      users: {
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

    expect(usersSelector(state)).to.eq(expected)
  })

  it('userSelector returns a user', () => {
    const state = fromJS({
      users: {
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

    expect(userSelector(state, 1)).to.deep.eq(expected)
  })

  it('loadingSelector returns the loading status', () => {
    const state = fromJS({
      users: {
        loading: true
      }
    })
    const expected = true

    expect(loadingSelector(state)).to.eq(expected)
  })

  it('errorSelector returns the error status', () => {
    const state = fromJS({
      users: {
        error: 'This is an error!'
      }
    })
    const expected = 'This is an error!'

    expect(errorSelector(state)).to.eq(expected)
  })
})
