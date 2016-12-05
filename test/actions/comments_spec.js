import { expect } from 'chai'
import types from 'types/comments'
import * as actions from 'actions/comments'

describe('comments module actions', () => {
  const authorFixture = {
    id: 1,
    username: 'mark',
    email: 'mark@test.com',
    fullName: 'Mark',
    gravatar: 'mark@test.com',
    profilePic: 'mark@test.com',
    isAdmin: false,
  }

  describe('fetchCommentsRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: types.FETCH_COMMENTS_REQUEST,
      }

      expect(actions.fetchCommentsRequest()).to.deep.eq(expectedResult)
    })
  })

  describe('fetchCommentsFailure', () => {
    it('should return the correct type and error message', () => {
      const fixture = {
        message: 'Error!'
      }
      const expectedResult = {
        type: types.FETCH_COMMENTS_FAILURE,
        message: fixture.message
      }

      expect(actions.fetchCommentsFailure(fixture)).to.deep.eq(expectedResult)
    })
  })

  describe('createCommentRequest', () => {
    const fixture = {
      id: 1,
      body: "A Comment",
      author: authorFixture,
    }
    const expectedResult = {
      type: types.CREATE_COMMENT_REQUEST,
      payload: fixture
    }

    it('should return the correct type', () => {
      expect(actions.createCommentRequest(fixture).type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(actions.createCommentRequest(fixture).payload).to.deep.eq(expectedResult.payload)
    })
  })

  describe('createCommentSuccess', () => {
    const fixture = {
      id: 1,
      body: 'A Comment',
      author: authorFixture,
    }
    const expectedResult = {
      type: types.CREATE_COMMENT_SUCCESS,
      response: {
        result: 1,
        entities: {
          comments: {
            1: {
              ...fixture,
              author: authorFixture.id,
            }
          },
          users: {
            1: {
              ...authorFixture,
            }
          }
        }
      }
    }
    const result = actions.createCommentSuccess(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('createCommentFailure', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      type: types.CREATE_COMMENT_FAILURE,
      message: fixture.message
    }
    const result = actions.createCommentFailure(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.message).to.eq(expectedResult.message)
    })
  })

  describe('updateCommentRequest', () => {
    const fixture = {
      id: 0,
      body: 'A Comment',
    }
    const expectedResult = {
      type: types.UPDATE_COMMENT_REQUEST,
      payload: fixture
    }
    const result = actions.updateCommentRequest(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(result.payload).to.eq(expectedResult.payload)
    })
  })

  describe('updateCommentSuccess', () => {
    const fixture = {
      id: 1,
      body: 'A Comment',
      author: authorFixture,
    }
    const expectedResult = {
      type: types.UPDATE_COMMENT_SUCCESS,
      response: {
        result: 1,
        entities: {
          comments: {
            1: {
              ...fixture,
              author: authorFixture.id,
            }
          },
          users: {
            1: {
              ...authorFixture,
            }
          }
        }
      }
    }
    const result = actions.updateCommentSuccess(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct response', () => {
      expect(result.response.toJS()).to.deep.eq(expectedResult.response)
    })
  })

  describe('updateCommentFailure', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      type: types.UPDATE_COMMENT_FAILURE,
      message: fixture.message
    }
    const result = actions.updateCommentFailure(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the error message', () => {
      expect(result.message).to.eq(expectedResult.message)
    })
  })

  describe('deleteCommentRequest', () => {
    const fixture = { id: 0 }
    const expectedResult = {
      type: types.DELETE_COMMENT_REQUEST,
      payload: fixture
    }
    const result = actions.deleteCommentRequest(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should contain the payload', () => {
      expect(result.payload).to.eq(expectedResult.payload)
    })
  })

  describe('deleteCommentSuccess', () => {
    const expectedResult = {
      type: types.DELETE_COMMENT_SUCCESS,
      id: 1,
    }
    const result = actions.deleteCommentSuccess(1)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the correct id', () => {
      expect(result.id).to.eq(expectedResult.id)
    })
  })

  describe('deleteCommentFailure', () => {
    const fixture = {
      message: 'Error!'
    }
    const expectedResult = {
      type: types.DELETE_COMMENT_FAILURE,
      message: fixture.message
    }
    const result = actions.deleteCommentFailure(fixture)

    it('should return the correct type', () => {
      expect(result.type).to.eq(expectedResult.type)
    })

    it('should return the error message', () => {
      expect(result.message).to.eq(expectedResult.message)
    })
  })
})
