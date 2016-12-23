import { expect } from 'chai'
import { fromJS } from 'immutable'
import {
  usersSelector,
  userSelector,
  loadingSelector,
  errorSelector,
} from 'selectors/users'

describe('users selectors', () => {
  const baseState = fromJS({
    data: {
      users: {
        ids: [1, 2],
        byId: {
          1: {
            id: 1,
            summary: "This is a summary!",
            description: "This is a description!"
          },
          2: {
            id: 2,
            summary: 'This is a summary!',
            description: 'This is a description!',
          }
        }
      }
    }
  })

  it('usersSelector returns all users', () => {
    const expected = fromJS([
      {
        id: 1,
        summary: "This is a summary!",
        description: "This is a description!"
      },
      {
        id: 2,
        summary: "This is a summary!",
        description: "This is a description!"
      }
    ])

    expect(usersSelector(baseState)).to.eq(expected)
  })

  it('usersSelector returns specific users', () => {
    const expected = fromJS([
      {
        id: 1,
        summary: 'This is a summary!',
        description: 'This is a description!',
      }
    ])

    expect(usersSelector(baseState, fromJS([1]))).to.eq(expected)
  })

  it('userSelector returns a user', () => {
    const expected = fromJS({
      id: 1,
      summary: "This is a summary!",
      description: "This is a description!"
    })

    expect(userSelector(baseState, 1)).to.deep.eq(expected)
  })

  it('loadingSelector returns the loading status', () => {
    const state = fromJS(
      baseState.setIn(['data', 'users', 'loading'], true)
    )
    const expected = true

    expect(loadingSelector(state)).to.eq(expected)
  })

  it('errorSelector returns the error status', () => {
    const state = fromJS(
      baseState.setIn(['data', 'users', 'error'], 'This is an error!')
    )
    const expected = 'This is an error!'

    expect(errorSelector(state)).to.eq(expected)
  })
})
