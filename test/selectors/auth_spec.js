import { expect } from 'chai'
import { fromJS } from 'immutable'
import {
  currentUserSelector,
  loadingSelector,
  errorSelector,
} from 'selectors/auth'

describe('auth selectors', () => {
  const baseState = fromJS({
    data: {
      auth: {
        currentUser: 0,
      },
      users: {
        ids: [0],
        byId: {
          0: {
            id: 0,
            username: 'user0',
            fullName: 'User 0',
          },
        },
      },
    }
  })

  it('currentUserSelector returns the current user', () => {
    const expected = fromJS({
      id: 0,
      username: 'user0',
      fullName: 'User 0',
    })
    const actual = currentUserSelector(baseState, 0)

    expect(actual).to.eq(expected)
  })

  it('loadingSelector returns the loading status', () => {
    const state = fromJS(
      baseState.setIn(['data', 'auth', 'loading'], true)
    )

    expect(loadingSelector(state)).to.eq(true)
  })

  it('errorSelector returns the error message', () => {
    const state = fromJS(
      baseState.setIn(['data', 'auth', 'error'], 'Error!')
    )

    expect(errorSelector(state)).to.eq('Error!')
  })
})
