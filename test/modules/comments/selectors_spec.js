import { expect } from 'chai'
import { fromJS } from 'immutable'
import {
  commentsSelector,
  commentSelector,
  loadingSelector,
  errorSelector,
} from 'modules/comments'

describe('comments selectors', () => {
  it('commentsSelector returns all comments', () => {
    const state = fromJS({
      comments: {
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

    expect(commentsSelector(state)).to.eq(expected)
  })

  it('commentSelector returns a comment', () => {
    const state = fromJS({
      comments: {
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

    expect(commentSelector(state, 1)).to.deep.eq(expected)
  })

  it('loadingSelector returns the loading status', () => {
    const state = fromJS({
      comments: {
        loading: true
      }
    })
    const expected = true

    expect(loadingSelector(state)).to.eq(expected)
  })

  it('errorSelector returns the error status', () => {
    const state = fromJS({
      comments: {
        error: 'This is an error!'
      }
    })
    const expected = 'This is an error!'

    expect(errorSelector(state)).to.eq(expected)
  })
})
