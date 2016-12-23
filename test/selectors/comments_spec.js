import { expect } from 'chai'
import { fromJS } from 'immutable'
import {
  commentsSelector,
  commentSelector,
  loadingSelector,
  errorSelector,
} from 'selectors/comments'

describe('comments selectors', () => {
  const baseState = fromJS({
    data: {
      comments: {
        ids: [1, 2],
        byId: {
          1: {
            id: 1,
            body: 'This is a comment'
          },
          2: {
            id: 2,
            body: 'This is also a comment'
          }
        }
      }
    }
  })

  it('commentsSelector returns all comments', () => {
    const expected = fromJS([
      {
        id: 1,
        body: 'This is a comment'
      },
      {
        id: 2,
        body: 'This is also a comment'
      }
    ])

    expect(commentsSelector(baseState)).to.eq(expected)
  })

  it('commentsSelector returns specific comments', () => {
    const expected = fromJS([
      {
        id: 1,
        body: 'This is a comment'
      }
    ])

    expect(commentsSelector(baseState, fromJS([1]))).to.eq(expected)
  })

  it('commentSelector returns a comment', () => {
    const expected = fromJS({
      id: 1,
      body: 'This is a comment'
    })

    expect(commentSelector(baseState, 1)).to.deep.eq(expected)
  })

  it('loadingSelector returns the loading status', () => {
    const state = fromJS(
      baseState.setIn(['data', 'comments', 'loading'], true)
    )
    const expected = true

    expect(loadingSelector(state)).to.eq(expected)
  })

  it('errorSelector returns the error status', () => {
    const state = fromJS(
      baseState.setIn(['data', 'comments', 'error'], 'This is an error!')
    )
    const expected = 'This is an error!'

    expect(errorSelector(state)).to.eq(expected)
  })
})
