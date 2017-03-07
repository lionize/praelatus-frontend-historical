import { expect } from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import actions from 'modules/comment'
import {
  fetchComment,
  fetchComments,
  createComment,
  updateComment,
  deleteComment,
} from 'sagas/comments'

const comments = [
  {
    id: 0,
    body: 'Text'
  }
]

const api = {
  fetchComment() {},
  fetchComments() {},
  createComment() {},
  updateComment() {},
  deleteComment() {},
}

describe('Comment - Sagas', () => {
  describe('fetchComment', () => {
    it('success', () => {
      const generator = fetchComment(api, { id: 0 })

      expect(generator.next().value).to.deep.eq(call(api.fetchComment, 0))

      const response = {
        result: [0],
        entities: {
          comments: {
            0: comments[0]
          }
        }
      }

      const next = generator.next(response).value
      const expected = put(actions.fetchSuccess(response))

      expect(next).to.deep.eq(expected)
    })

    it('failure', () => {
      const generator = fetchComment(api, { id: 0 })
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.fetchFailure(error))

      expect(next).to.deep.eq(expected)
    })
  })

  describe('fetchComments', () => {
    it('success', () => {
      const generator = fetchComments(api)

      expect(generator.next().value).to.deep.eq(call(api.fetchComments))

      const response = {
        result: [0],
        entities: {
          comments: {
            0: comments[0]
          }
        }
      }

      const next = generator.next(response).value
      const expected = put(actions.fetchSuccess(response))

      expect(next).to.deep.eq(expected)
    })

    it('failure', () => {
      const generator = fetchComments(api)
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.fetchFailure(error))

      expect(next).to.deep.eq(expected)
    })
  })

  describe('createComment', () => {
    it('success', () => {
      const generator = createComment(api, { payload: comments[0] })

      expect(generator.next().value).to.deep.eq(call(api.createComment, comments[0]))

      const response = {
        result: [0],
        entities: {
          comments: {
            0: comments[0]
          }
        }
      }

      const next = generator.next(response).value
      const expected = put(actions.createSuccess(response))

      expect(next).to.deep.eq(expected)
    })

    it('failure', () => {
      const generator = createComment(api, { payload: comments[0] })
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.createFailure(error))

      expect(next).to.deep.eq(expected)
    })
  })

  describe('updateComment', () => {
    it('success', () => {
      const generator = updateComment(api, { payload: comments[0] })

      expect(generator.next().value).to.deep.eq(call(api.updateComment, comments[0]))

      const response = {
        result: [0],
        entities: {
          comments: {
            0: comments[0]
          }
        }
      }

      const next = generator.next(response).value
      const expected = put(actions.updateSuccess(response))

      expect(next).to.deep.eq(expected)
    })

    it('failure', () => {
      const generator = updateComment(api, { payload: comments[0] })
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.updateFailure(error))

      expect(next).to.deep.eq(expected)
    })
  })

  describe('deleteComment', () => {
    it('success', () => {
      const generator = deleteComment(api, { id: 0 })

      expect(generator.next().value).to.deep.eq(call(api.deleteComment, 0))

      const response = { id: 0 }

      let next = generator.next(response).value
      let expected = put(actions.deleteSuccess(response))

      expect(next).to.deep.eq(expected)

      next = generator.next().value
      expected = put(push('/comments'))

      expect(next).to.deep.eq(expected)
    })

    it('failure', () => {
      const generator = deleteComment(api, { id: 0})
      generator.next()

      const error = {
        message: 'Error!'
      }

      const next = generator.throw(error).value
      const expected = put(actions.deleteFailure(error))

      expect(next).to.deep.eq(expected)
    })
  })
})
