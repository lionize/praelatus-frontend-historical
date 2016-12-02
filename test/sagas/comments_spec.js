import { expect } from 'chai'
import { put, call } from 'redux-saga/effects'
import api from 'api'
import * as actions from 'actions/comments'
import * as sagas from 'sagas/comments'

describe('comments module sagas', () => {
  describe('GET: fetch comments', () => {
    it('calls the api method', () => {
      const generator = sagas.fetchComments()

      expect(generator.next().value).to.deep.eq(call(api.fetchComments, {}))
    })

    it('fetches tickets', () => {
      const generator = sagas.fetchComments()
      generator.next()
      const response = []
      const next = generator.next(response).value
      const expected = put(actions.fetchCommentsSuccess(response))

      expect(next.PUT.action.type).to.eq(expected.PUT.action.type)
      expect(next.PUT.action.response).to.eq(expected.PUT.action.response)
    })

    it('returns an error if fetching fails', () => {
      const generator = sagas.fetchComments()
      generator.next()
      const response = { message: 'Error!' }

      expect(generator.throw(response).value).to.deep.eq(put(actions.fetchCommentsFailure(response)))
    })
  })

  describe('POST: create comment', () => {
    const fixture = {
      name: 'The A Comment',
    }

    it('calls the api method', () => {
      const generator = sagas.createComment({ payload: fixture })

      expect(generator.next().value).to.deep.eq(call(api.createComment, fixture))
    })

    it('creates a comment', () => {
      const generator = sagas.createComment({ payload: fixture })
      generator.next()
      const response = {
        id: 0,
        ...fixture
      }
      const next = generator.next(response).value
      const expected = put(actions.createCommentSuccess(response))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.response).to.equal(expected.PUT.action.response)
    })

    it('returns an error if creation fails', () => {
      const generator = sagas.createComment({ payload: fixture })
      generator.next()
      const response = { message: 'Error!' }

      expect(generator.throw(response).value).to.deep.eq(put(actions.createCommentFailure(response)))
    })
  })

  describe('PUT: update comment', () => {
    const fixture = {
      icon: "",
      name: 'The A Comment',
      urlSlug: 'the-a-comment'
    }

    it('calls the api method', () => {
      const generator = sagas.updateComment({ payload: fixture })

      expect(generator.next().value).to.deep.eq(call(api.updateComment, fixture))
    })

    it('updates the ticket', () => {
      const generator = sagas.updateComment({ payload: fixture })
      generator.next()
      const response = fixture
      const next = generator.next(response).value
      const expected = put(actions.updateCommentSuccess(response))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.response).to.equal(expected.PUT.action.response)
    })

    it('generates an error if updating fails', () => {
      const generator = sagas.updateComment({ payload: fixture })
      generator.next()
      const response = { message: 'Error!' }

      expect(generator.throw(response).value).to.deep.eq(put(actions.updateCommentFailure(response)))
    })
  })

  describe('DELETE: delete comment', () => {
    const fixture = { id: 0 }

    it('calls the api method', () => {
      const generator = sagas.deleteComment({ payload: fixture })

      expect(generator.next().value).to.deep.eq(call(api.deleteComment, fixture))
    })

    it('deletes a comment', () => {
      const generator = sagas.deleteComment({ payload: fixture })
      generator.next()
      const response = fixture
      const next = generator.next(response).value
      const expected = put(actions.deleteCommentSuccess(response))

      expect(next.PUT.action.type).to.equal(expected.PUT.action.type)
      expect(next.PUT.action.id).to.equal(expected.PUT.action.id)
    })
  })
})
